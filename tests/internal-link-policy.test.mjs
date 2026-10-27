import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';

const sourceRoot = new URL('../src/', import.meta.url);

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return collectSourceFiles(path);
      return /\.(astro|md|ts)$/.test(entry.name) ? [path] : [];
    })
  );
  return files.flat();
}

await test('internal page links follow the no-trailing-slash route policy', async () => {
  const files = await collectSourceFiles(sourceRoot.pathname);
  const violations = [];
  const patterns = [
    /\bhref\s*=\s*["'](\/(?!\/)[^"'#?]+\/)(?:["']|#)/g,
    /\bhref\s*:\s*["'`](\/(?!\/)[^"'`#?]+\/)["'`]/g,
    /\]\((\/(?!\/)[^)#?]+\/)\)/g,
    /\bhref\s*=\s*\{`(\/(?!\/)[^`]*\/)`\}/g,
  ];

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const pattern of patterns) {
      for (const match of source.matchAll(pattern)) {
        const line = source.slice(0, match.index).split('\n').length;
        violations.push(`${file}:${line} ${match[1]}`);
      }
    }
  }

  assert.deepEqual(violations, [], `Use getPermalink() for internal links:\n${violations.join('\n')}`);
});
