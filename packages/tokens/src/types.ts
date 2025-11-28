/**
 * Complete theme tokens interface
 */
export interface ThemeTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  radii: RadiiTokens;
  shadows: ShadowTokens;
  transitions: TransitionTokens;
}

/**
 * Color tokens organized by semantic purpose
 */
export interface ColorTokens {
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  neutral: ColorScale;
}

/**
 * Color scale from 50 (lightest) to 950 (darkest)
 * All values use oklch color space
 */
export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

/**
 * Spacing tokens based on 4px base unit
 */
export interface SpacingTokens {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
}


/**
 * Typography tokens for font configuration
 */
export interface TypographyTokens {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  fontWeight: {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

/**
 * Border radius tokens
 */
export interface RadiiTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

/**
 * Box shadow tokens
 */
export interface ShadowTokens {
  sm: string;
  md: string;
  lg: string;
}

/**
 * Transition duration tokens
 */
export interface TransitionTokens {
  fast: string;
  normal: string;
  slow: string;
}
