import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = {
  primitives: 'src/design/tokens/primitives.tokens.json',
  light: 'src/design/tokens/semantic.light.tokens.json',
  dark: 'src/design/tokens/semantic.dark.tokens.json',
};
const output = 'src/assets/styles/generated/design-tokens.css';

function parseStrict(text, file) {
  let at = 0;
  const space = () => {
    while (/\s/.test(text[at] ?? '')) at++;
  };
  const string = () => {
    const start = at++;
    while (at < text.length) {
      if (text[at] === '\\') at += 2;
      else if (text[at++] === '"') break;
    }
    return JSON.parse(text.slice(start, at));
  };
  const value = () => {
    space();
    if (text[at] === '{') {
      at++;
      space();
      const keys = new Set();
      while (text[at] !== '}') {
        const key = string();
        if (keys.has(key)) throw new Error(`${file}: duplicate key "${key}"`);
        keys.add(key);
        space();
        at++;
        value();
        space();
        if (text[at] === ',') {
          at++;
          space();
          continue;
        }
        break;
      }
      at++;
      return;
    }
    if (text[at] === '[') {
      at++;
      space();
      while (text[at] !== ']') {
        value();
        space();
        if (text[at] === ',') {
          at++;
          space();
          continue;
        }
        break;
      }
      at++;
      return;
    }
    if (text[at] === '"') {
      string();
      return;
    }
    while (at < text.length && !/[\s,}\]]/.test(text[at])) at++;
  };
  value();
  space();
  if (at !== text.length) throw new Error(`${file}: invalid JSON near byte ${at}`);
  return JSON.parse(text);
}

async function load(file) {
  const name = files[file];
  return parseStrict(await readFile(path.join(root, name), 'utf8'), name);
}

function flatten(tree, prefix = [], inheritedType, result = new Map()) {
  if (!tree || typeof tree !== 'object' || Array.isArray(tree))
    throw new Error(`Invalid token group at ${prefix.join('.') || '<root>'}`);
  const type = tree.$type ?? inheritedType;
  if ('$value' in tree) {
    const tokenType = tree.$type ?? inheritedType;
    if (!tokenType) throw new Error(`Missing $type for ${prefix.join('.')}`);
    result.set(prefix.join('.'), { type: tokenType, value: tree.$value });
    return result;
  }
  for (const [key, child] of Object.entries(tree)) {
    if (key.startsWith('$')) {
      if (key !== '$type' && key !== '$description')
        throw new Error(`Unsupported DTCG field ${key} at ${prefix.join('.')}`);
      continue;
    }
    flatten(child, [...prefix, key], type, result);
  }
  return result;
}

function resolve(tokenPath, tokens, stack = []) {
  if (stack.includes(tokenPath)) throw new Error(`Alias cycle: ${[...stack, tokenPath].join(' -> ')}`);
  const token = tokens.get(tokenPath);
  if (!token) throw new Error(`Unresolved token reference {${tokenPath}}`);
  const alias = typeof token.value === 'string' ? token.value.match(/^\{([^{}]+)\}$/) : null;
  if (alias) {
    const target = resolve(alias[1], tokens, [...stack, tokenPath]);
    if (target.type !== token.type)
      throw new Error(`Type mismatch ${tokenPath} (${token.type}) -> ${alias[1]} (${target.type})`);
    return target;
  }
  if (token.type === 'color' && !/^#[\da-f]{6}$/i.test(token.value))
    throw new Error(`Invalid color at ${tokenPath}: ${token.value}`);
  if (token.type === 'dimension' && !/^-?(?:\d+|\d*\.\d+)(?:px|rem|em)$/.test(token.value))
    throw new Error(`Invalid dimension at ${tokenPath}: ${token.value}`);
  if (!['color', 'dimension'].includes(token.type))
    throw new Error(`Unsupported token type ${token.type} at ${tokenPath}`);
  return token;
}

function flattenTheme(theme) {
  return flatten(theme);
}

function cssName(key) {
  const parts = key.split('.');
  if (parts[0] === 'color') return `--gg-color-${parts.slice(1).join('-')}`;
  if (parts[0] === 'border' && parts[1] === 'color') return `--gg-border-color-${parts.slice(2).join('-')}`;
  if (parts[0] === 'border' && parts[1] === 'width') return `--gg-border-width-${parts.slice(2).join('-')}`;
  if (parts[0] === 'border') return `--gg-border-${parts.slice(1).join('-')}-width`;
  if (parts[0] === 'radius') return `--gg-radius-${parts.slice(1).join('-')}`;
  throw new Error(`No CSS naming rule for semantic token ${key}`);
}

export async function generate() {
  const [primitiveRaw, lightRaw, darkRaw] = await Promise.all([load('primitives'), load('light'), load('dark')]);
  const primitives = flatten(primitiveRaw);
  const light = flattenTheme(lightRaw);
  const dark = flattenTheme(darkRaw);
  const lightKeys = [...light.keys()].sort((a, b) => a.localeCompare(b));
  const darkKeys = [...dark.keys()].sort((a, b) => a.localeCompare(b));
  if (JSON.stringify(lightKeys) !== JSON.stringify(darkKeys))
    throw new Error('Light/dark semantic token shape mismatch');
  const mergedLight = new Map([...primitives, ...light]);
  const mergedDark = new Map([...primitives, ...dark]);
  const blocks = [];
  for (const [selector, tokens] of /** @type {const} */ ([
    [':root', mergedLight],
    ['.dark', mergedDark],
  ])) {
    const source = selector === ':root' ? light : dark;
    const lines = [...source.keys()]
      .sort((a, b) => a.localeCompare(b))
      .map((key) => {
        const resolved = resolve(key, tokens);
        return `  ${cssName(key)}: ${resolved.value.toLowerCase()};`;
      });
    blocks.push(`${selector} {\n${lines.join('\n')}\n}`);
  }
  return `/* GENERATED by scripts/build-design-tokens.mjs. Sources: primitives.tokens.json, semantic.light.tokens.json, semantic.dark.tokens.json. Do not edit. */\n\n${blocks.join('\n\n')}\n`;
}

const generated = await generate();
const destination = path.join(root, output);
if (process.argv.includes('--check')) {
  let current = '';
  try {
    current = await readFile(destination, 'utf8');
  } catch {}
  if (current !== generated) {
    console.error(`${output} is stale. Run npm run tokens:build.`);
    process.exitCode = 1;
  }
} else {
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, generated);
}
