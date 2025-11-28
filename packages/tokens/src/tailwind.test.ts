import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { tailwindTheme, toTailwindTheme } from './tailwind';
import { defaultTheme } from './theme';
import type { ColorScale } from './types';

describe('Tailwind Theme', () => {
  /**
   * **Feature: code-review-engine, Property 9: Token Single Source of Truth**
   * **Validates: Requirements 12.2**
   *
   * For any token defined in @pineapple-ui/tokens, the corresponding
   * value in tailwindTheme SHALL be identical to the source theme.
   */
  describe('Single Source of Truth', () => {
    it('should have identical color values between theme and tailwindTheme', () => {
      const colorNames = Object.keys(defaultTheme.colors) as (keyof typeof defaultTheme.colors)[];
      const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

      fc.assert(
        fc.property(
          fc.constantFrom(...colorNames),
          fc.constantFrom(...shades),
          (colorName, shade) => {
            const sourceValue = (defaultTheme.colors[colorName] as ColorScale)[shade];
            const tailwindValue = (tailwindTheme.colors[colorName] as ColorScale)[shade];
            expect(tailwindValue).toBe(sourceValue);
          }
        ),
        { numRuns: 100 }
      );
    });

    it('should have identical spacing values between theme and tailwindTheme', () => {
      const spacingKeys = Object.keys(defaultTheme.spacing) as unknown as (keyof typeof defaultTheme.spacing)[];

      fc.assert(
        fc.property(fc.constantFrom(...spacingKeys), (key) => {
          const sourceValue = defaultTheme.spacing[key];
          const tailwindValue = tailwindTheme.spacing[key];
          expect(tailwindValue).toBe(sourceValue);
        }),
        { numRuns: 100 }
      );
    });

    it('should have identical typography values between theme and tailwindTheme', () => {
      // Font family
      expect(tailwindTheme.fontFamily).toEqual(defaultTheme.typography.fontFamily);
      // Font size
      expect(tailwindTheme.fontSize).toEqual(defaultTheme.typography.fontSize);
      // Font weight
      expect(tailwindTheme.fontWeight).toEqual(defaultTheme.typography.fontWeight);
      // Line height
      expect(tailwindTheme.lineHeight).toEqual(defaultTheme.typography.lineHeight);
    });

    it('should have identical radii values between theme and tailwindTheme', () => {
      const radiiKeys = Object.keys(defaultTheme.radii) as (keyof typeof defaultTheme.radii)[];

      fc.assert(
        fc.property(fc.constantFrom(...radiiKeys), (key) => {
          const sourceValue = defaultTheme.radii[key];
          const tailwindValue = tailwindTheme.borderRadius[key];
          expect(tailwindValue).toBe(sourceValue);
        }),
        { numRuns: 100 }
      );
    });

    it('should have identical shadow values between theme and tailwindTheme', () => {
      const shadowKeys = Object.keys(defaultTheme.shadows) as (keyof typeof defaultTheme.shadows)[];

      fc.assert(
        fc.property(fc.constantFrom(...shadowKeys), (key) => {
          const sourceValue = defaultTheme.shadows[key];
          const tailwindValue = tailwindTheme.boxShadow[key];
          expect(tailwindValue).toBe(sourceValue);
        }),
        { numRuns: 100 }
      );
    });

    it('should have identical transition values between theme and tailwindTheme', () => {
      const transitionKeys = Object.keys(defaultTheme.transitions) as (keyof typeof defaultTheme.transitions)[];

      fc.assert(
        fc.property(fc.constantFrom(...transitionKeys), (key) => {
          const sourceValue = defaultTheme.transitions[key];
          const tailwindValue = tailwindTheme.transitionDuration[key];
          expect(tailwindValue).toBe(sourceValue);
        }),
        { numRuns: 100 }
      );
    });
  });

  describe('toTailwindTheme', () => {
    it('should correctly convert theme tokens to tailwind format', () => {
      const converted = toTailwindTheme(defaultTheme);
      expect(converted).toEqual(tailwindTheme);
    });
  });
});
