import type { ThemeTokens } from './types';
import { defaultTheme } from './theme';

/**
 * Tailwind-compatible theme configuration
 * Converts ThemeTokens to Tailwind CSS format
 */
export interface TailwindTheme {
  colors: ThemeTokens['colors'];
  spacing: ThemeTokens['spacing'];
  fontFamily: ThemeTokens['typography']['fontFamily'];
  fontSize: ThemeTokens['typography']['fontSize'];
  fontWeight: ThemeTokens['typography']['fontWeight'];
  lineHeight: ThemeTokens['typography']['lineHeight'];
  borderRadius: ThemeTokens['radii'];
  boxShadow: ThemeTokens['shadows'];
  transitionDuration: ThemeTokens['transitions'];
}

/**
 * Converts ThemeTokens to Tailwind-compatible format
 * @param theme - The theme tokens to convert
 * @returns Tailwind-compatible theme object
 */
export function toTailwindTheme(theme: ThemeTokens): TailwindTheme {
  return {
    colors: theme.colors,
    spacing: theme.spacing,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    lineHeight: theme.typography.lineHeight,
    borderRadius: theme.radii,
    boxShadow: theme.shadows,
    transitionDuration: theme.transitions,
  };
}

/**
 * Pre-converted default theme for Tailwind CSS
 * Single source of truth - use this in tailwind.config.js
 */
export const tailwindTheme: TailwindTheme = toTailwindTheme(defaultTheme);
