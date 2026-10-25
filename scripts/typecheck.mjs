import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const tsc = fileURLToPath(new URL('../node_modules/typescript/bin/tsc', import.meta.url));
const result = spawnSync(process.execPath, [tsc, '--noEmit', '--runExternalCode', '--pretty', 'false'], {
  encoding: 'utf8',
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

const output = `${result.stdout ?? ''}${result.stderr ?? ''}`.trim();
const lines = output ? output.split('\n') : [];
const knownUpstreamDiagnostics = [
  /^node_modules[\\/]@vercel[\\/]analytics[\\/]dist[\\/]astro[\\/]component\.ts(?:\(\d+,\d+\))?:\s+error TS2578:/,
  /^node_modules[\\/]@vercel[\\/]speed-insights[\\/]dist[\\/]astro[\\/]component\.ts(?:\(\d+,\d+\))?:\s+error TS2578:/,
  /^node_modules[\\/]astro-seo[\\/]src[\\/]components[\\/]ExtendedTags\.astro(?:\(\d+,\d+\))?:\s+error TS7031:/,
  /^node_modules[\\/]astro-seo[\\/]src[\\/]components[\\/]LanguageAlternatesTags\.astro(?:\(\d+,\d+\))?:\s+error TS18048:/,
];
const ignoredDependencyDiagnostics = lines.filter((line) =>
  knownUpstreamDiagnostics.some((pattern) => pattern.test(line))
);
const ignoredLines = new Set(ignoredDependencyDiagnostics);
const projectDiagnostics = lines.filter((line) => !ignoredLines.has(line));

if (projectDiagnostics.length > 0) {
  console.error(projectDiagnostics.join('\n'));
  process.exit(result.status || 1);
}

if (result.status !== 0 && ignoredDependencyDiagnostics.length === 0) {
  console.error(output || `TypeScript exited with status ${result.status}.`);
  process.exit(result.status || 1);
}

if (ignoredDependencyDiagnostics.length > 0) {
  console.warn(
    `Ignored ${ignoredDependencyDiagnostics.length} known upstream TypeScript diagnostic(s) ` +
      'from the current TypeScript 7.1 Astro mapper compatibility set.'
  );
}

console.log('Project TypeScript diagnostics passed.');
