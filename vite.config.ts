import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import fs from 'fs';
import dts from 'vite-plugin-dts';

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const name = packageJson.name;

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': path.relative(process.cwd(), './src'),
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: name,
        fileName: name,
      },
    },
    plugins: [dts()],
  };
});
