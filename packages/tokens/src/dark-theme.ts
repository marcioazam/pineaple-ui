import type { ThemeTokens } from './types';
import { defaultTheme } from './theme';

/**
 * Dark theme variant with adjusted colors for dark mode
 */
export const darkTheme: ThemeTokens = {
  ...defaultTheme,
  colors: {
    primary: {
      50: 'oklch(0.20 0.10 250)',
      100: 'oklch(0.28 0.12 250)',
      200: 'oklch(0.36 0.14 250)',
      300: 'oklch(0.44 0.16 250)',
      400: 'oklch(0.52 0.18 250)',
      500: 'oklch(0.60 0.20 250)',
      600: 'oklch(0.70 0.16 250)',
      700: 'oklch(0.80 0.12 250)',
      800: 'oklch(0.88 0.08 250)',
      900: 'oklch(0.94 0.04 250)',
      950: 'oklch(0.97 0.02 250)',
    },
    secondary: {
      50: 'oklch(0.20 0.05 280)',
      100: 'oklch(0.28 0.06 280)',
      200: 'oklch(0.36 0.07 280)',
      300: 'oklch(0.44 0.08 280)',
      400: 'oklch(0.52 0.09 280)',
      500: 'oklch(0.60 0.10 280)',
      600: 'oklch(0.70 0.08 280)',
      700: 'oklch(0.80 0.06 280)',
      800: 'oklch(0.88 0.04 280)',
      900: 'oklch(0.94 0.02 280)',
      950: 'oklch(0.97 0.01 280)',
    },
    success: {
      50: 'oklch(0.20 0.10 145)',
      100: 'oklch(0.28 0.12 145)',
      200: 'oklch(0.36 0.14 145)',
      300: 'oklch(0.44 0.16 145)',
      400: 'oklch(0.52 0.18 145)',
      500: 'oklch(0.60 0.20 145)',
      600: 'oklch(0.70 0.18 145)',
      700: 'oklch(0.80 0.14 145)',
      800: 'oklch(0.88 0.10 145)',
      900: 'oklch(0.94 0.06 145)',
      950: 'oklch(0.97 0.03 145)',
    },
    warning: {
      50: 'oklch(0.30 0.10 85)',
      100: 'oklch(0.38 0.12 85)',
      200: 'oklch(0.46 0.14 85)',
      300: 'oklch(0.54 0.16 85)',
      400: 'oklch(0.62 0.18 85)',
      500: 'oklch(0.70 0.20 85)',
      600: 'oklch(0.75 0.18 85)',
      700: 'oklch(0.80 0.16 85)',
      800: 'oklch(0.88 0.12 85)',
      900: 'oklch(0.94 0.06 85)',
      950: 'oklch(0.97 0.03 85)',
    },
    danger: {
      50: 'oklch(0.20 0.12 25)',
      100: 'oklch(0.28 0.14 25)',
      200: 'oklch(0.36 0.16 25)',
      300: 'oklch(0.44 0.18 25)',
      400: 'oklch(0.52 0.20 25)',
      500: 'oklch(0.60 0.22 25)',
      600: 'oklch(0.70 0.18 25)',
      700: 'oklch(0.80 0.14 25)',
      800: 'oklch(0.88 0.08 25)',
      900: 'oklch(0.94 0.04 25)',
      950: 'oklch(0.97 0.02 25)',
    },
    neutral: {
      50: 'oklch(0.13 0 0)',
      100: 'oklch(0.20 0 0)',
      200: 'oklch(0.27 0 0)',
      300: 'oklch(0.37 0 0)',
      400: 'oklch(0.45 0 0)',
      500: 'oklch(0.55 0 0)',
      600: 'oklch(0.70 0 0)',
      700: 'oklch(0.83 0 0)',
      800: 'oklch(0.90 0 0)',
      900: 'oklch(0.96 0 0)',
      950: 'oklch(0.98 0 0)',
    },
  },
};

/**
 * Generate CSS for dark mode toggle using class-based approach
 */
export function generateDarkModeCSS(_lightTheme: ThemeTokens, darkThemeTokens: ThemeTokens): string {
  const lines: string[] = [];

  // Dark mode class-based toggle
  lines.push('.dark {');
  for (const [colorName, scale] of Object.entries(darkThemeTokens.colors)) {
    for (const [shade, value] of Object.entries(scale)) {
      lines.push(`  --color-${colorName}-${shade}: ${value};`);
    }
  }
  lines.push('}');

  return lines.join('\n');
}
