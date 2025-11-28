import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { defaultTheme } from './theme';
import type { SpacingTokens, ColorScale } from './types';

describe('Theme Tokens', () => {
  /**
   * **Feature: pineapple-ui, Property 2: Spacing Scale Consistency**
   * **Validates: Requirements 3.4**
   *
   * For any spacing token value in the theme, the numeric value
   * SHALL be a multiple of 4 (the base unit).
   */
  it('should have all spacing values as multiples of 4', () => {
    const spacingKeys = Object.keys(defaultTheme.spacing) as (keyof SpacingTokens)[];

    fc.assert(
      fc.property(fc.constantFrom(...spacingKeys), (key) => {
        const value = defaultTheme.spacing[key];
        const numericValue = parseInt(value, 10);
        expect(numericValue % 4).toBe(0);
      }),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: pineapple-ui, Property 3: Color Format Validity**
   * **Validates: Requirements 3.3**
   *
   * For any color token in the theme, the value SHALL be a valid
   * oklch color string matching the pattern `oklch(L C H)`.
   */
  it('should have all colors in valid oklch format', () => {
    const oklchPattern = /^oklch\(\d+(\.\d+)?\s+\d+(\.\d+)?\s+\d+(\.\d+)?\)$/;
    const colorNames = Object.keys(defaultTheme.colors) as (keyof typeof defaultTheme.colors)[];
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

    fc.assert(
      fc.property(
        fc.constantFrom(...colorNames),
        fc.constantFrom(...shades),
        (colorName, shade) => {
          const colorScale = defaultTheme.colors[colorName] as ColorScale;
          const value = colorScale[shade];
          expect(value).toMatch(oklchPattern);
        }
      ),
      { numRuns: 100 }
    );
  });
});
