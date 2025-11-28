import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Pineapple UI',
  brandUrl: 'https://pineapple-ui.dev',
  brandImage: undefined,
  brandTarget: '_self',

  // Colors
  colorPrimary: '#6366f1', // primary-500
  colorSecondary: '#8b5cf6', // secondary-500

  // UI
  appBg: '#fafafa',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e5e5e5',
  appBorderRadius: 8,

  // Text colors
  textColor: '#171717',
  textInverseColor: '#fafafa',
  textMutedColor: '#737373',

  // Toolbar
  barTextColor: '#525252',
  barSelectedColor: '#6366f1',
  barHoverColor: '#6366f1',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d4d4d4',
  inputTextColor: '#171717',
  inputBorderRadius: 6,

  // Button
  buttonBg: '#f5f5f5',
  buttonBorder: '#e5e5e5',

  // Boolean
  booleanBg: '#f5f5f5',
  booleanSelectedBg: '#6366f1',

  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: '"JetBrains Mono", monospace',
});
