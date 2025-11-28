import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'alert/index': 'src/components/alert/index.ts',
    'button/index': 'src/components/button/index.ts',
    'card/index': 'src/components/card/index.ts',
    'checkbox/index': 'src/components/checkbox/index.ts',
    'dialog/index': 'src/components/dialog/index.ts',
    'input/index': 'src/components/input/index.ts',
    'select/index': 'src/components/select/index.ts',
    'toast/index': 'src/components/toast/index.ts',
    'form-field/index': 'src/components/form-field/index.ts',
    'flex/index': 'src/components/flex/index.ts',
    'box/index': 'src/components/box/index.ts',
    'badge/index': 'src/components/badge/index.ts',
    'table/index': 'src/components/table/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  treeshake: true,
});
