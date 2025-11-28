import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'dialog/index': 'src/dialog/index.ts',
    'menu/index': 'src/menu/index.ts',
    'tabs/index': 'src/tabs/index.ts',
    'select/index': 'src/select/index.ts',
    'tooltip/index': 'src/tooltip/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  treeshake: true,
});
