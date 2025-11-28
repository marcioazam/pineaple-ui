import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { cn } from './cn';

describe('cn utility', () => {
  /**
   * **Feature: pineapple-ui, Property 5: Class Merging Override**
   * **Validates: Requirements 5.5**
   *
   * For any styled component with custom className prop, when the custom class
   * conflicts with a default class, tailwind-merge SHALL keep only the custom class.
   */
  it('should override conflicting Tailwind classes with custom classes', () => {
    const conflictingPairs = [
      { base: 'p-2', custom: 'p-4', expected: 'p-4' },
      { base: 'text-red-500', custom: 'text-blue-500', expected: 'text-blue-500' },
      { base: 'bg-white', custom: 'bg-black', expected: 'bg-black' },
      { base: 'mt-2', custom: 'mt-8', expected: 'mt-8' },
      { base: 'rounded-sm', custom: 'rounded-lg', expected: 'rounded-lg' },
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...conflictingPairs),
        ({ base, custom, expected }) => {
          const result = cn(base, custom);
          expect(result).toBe(expected);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should merge non-conflicting classes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('flex', 'grid', 'block', 'inline'),
        fc.constantFrom('p-2', 'p-4', 'p-6'),
        fc.constantFrom('text-sm', 'text-base', 'text-lg'),
        (display, padding, text) => {
          const result = cn(display, padding, text);
          expect(result).toContain(display);
          expect(result).toContain(padding);
          expect(result).toContain(text);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should handle conditional classes', () => {
    fc.assert(
      fc.property(fc.boolean(), (condition) => {
        const result = cn('base-class', condition && 'conditional-class');
        expect(result).toContain('base-class');
        if (condition) {
          expect(result).toContain('conditional-class');
        } else {
          expect(result).not.toContain('conditional-class');
        }
      }),
      { numRuns: 100 }
    );
  });

  it('should handle empty and falsy inputs', () => {
    expect(cn()).toBe('');
    expect(cn('')).toBe('');
    expect(cn(null)).toBe('');
    expect(cn(undefined)).toBe('');
    expect(cn(false)).toBe('');
  });
});
