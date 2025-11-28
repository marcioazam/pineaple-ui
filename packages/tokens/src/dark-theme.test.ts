import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { darkTheme, generateDarkModeCSS } from './dark-theme';
import { defaultTheme } from './theme';
import type { ColorScale } from './types';

describe('Dark Theme', () => {
  /**
   * **Feature: pineapple-ui, Property 16: Dark Mode Token Switch**
   * **Validates: Requirements 3.6**
   *
   * For any component, when dark mode class is applied to a parent element,
   * the component's computed styles SHALL use dark mode token values.
   */
  it('should have different color values from light theme for edge shades', () => {
    const colorNames = Object.keys(defaultTheme.colors) as (keyof typeof defaultTheme.colors)[];
    // Test edge shades that should be inverted (50 and 950 swap positions)
    const edgeShades = ['50', '100', '900', '950'] as const;

    fc.assert(
      fc.property(
        fc.constantFrom(...colorNames),
        fc.constantFrom(...edgeShades),
        (colorName, shade) => {
          const lightValue = (defaultTheme.colors[colorName] as ColorScale)[shade];
          const darkValue = (darkTheme.colors[colorName] as ColorScale)[shade];
          // Dark theme edge shades should have inverted lightness values
          expect(darkValue).not.toBe(lightValue);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate valid dark mode CSS', () => {
    const css = generateDarkModeCSS(defaultTheme, darkTheme);

    expect(css).toContain('.dark {');
    expect(css).toContain('--color-primary-500:');
    expect(css).toContain('--color-neutral-50:');
    expect(css).toContain('}');
  });

  it('should have all colors in valid oklch format', () => {
    const oklchPattern = /^oklch\(\d+(\.\d+)?\s+\d+(\.\d+)?\s+\d+(\.\d+)?\)$/;
    const colorNames = Object.keys(darkTheme.colors) as (keyof typeof darkTheme.colors)[];
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

    fc.assert(
      fc.property(
        fc.constantFrom(...colorNames),
        fc.constantFrom(...shades),
        (colorName, shade) => {
          const value = (darkTheme.colors[colorName] as ColorScale)[shade];
          expect(value).toMatch(oklchPattern);
        }
      ),
      { numRuns: 100 }
    );
  });
});
