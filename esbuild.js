import { build } from 'esbuild';
import env from 'esbuild-plugin-env';

// minify to true to make the NODE_ENV in production
build({
  entryPoints: ['./index.js'],
  bundle: true,
  minify: true,
  platform: 'node',
  packages: 'external',
  format: 'esm',
  target: 'node20.11.0',
  outdir: 'dist',
  plugins: [env()],
});
