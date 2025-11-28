import { theme } from './theme.js';

/**
 * Pineapple UI Tailwind CSS 4 Configuration
 * Uses @theme directive for design tokens
 */
export default {
  content: [
    '../../packages/*/src/**/*.{ts,tsx}',
    '../../apps/*/src/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
      lineHeight: theme.lineHeight,
      borderRadius: theme.borderRadius,
      boxShadow: theme.boxShadow,
      transitionDuration: theme.transitionDuration,
    },
  },
};

export { theme };
