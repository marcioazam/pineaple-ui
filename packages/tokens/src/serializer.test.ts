import { describe, it, expect } from 'vitest';
import { serializeTokens, deserializeTokens, tokensToCSS } from './serializer';
import { defaultTheme } from './theme';
import type { ThemeTokens } from './types';

describe('Token Serialization', () => {
  /**
   * **Feature: pineapple-ui, Property 1: Token Round-Trip Consistency**
   * **Validates: Requirements 3.7**
   *
   * For any valid ThemeTokens object, serializing to JSON and then
   * deserializing SHALL produce an equivalent ThemeTokens object.
   */
  it('should round-trip serialize and deserialize tokens', () => {
    const serialized = serializeTokens(defaultTheme);
    const deserialized = deserializeTokens(serialized);

    expect(deserialized).toEqual(defaultTheme);
  });

  it('should produce valid JSON', () => {
    const serialized = serializeTokens(defaultTheme);
    expect(() => JSON.parse(serialized)).not.toThrow();
  });

  it('should generate valid CSS custom properties', () => {
    const css = tokensToCSS(defaultTheme);

    expect(css).toContain(':root {');
    expect(css).toContain('--color-primary-500:');
    expect(css).toContain('--spacing-4:');
    expect(css).toContain('--font-sans:');
    expect(css).toContain('--radius-md:');
    expect(css).toContain('--shadow-md:');
    expect(css).toContain('--transition-normal:');
    expect(css).toContain('}');
  });

  it('should preserve all color scales in round-trip', () => {
    const serialized = serializeTokens(defaultTheme);
    const deserialized = deserializeTokens(serialized);

    for (const colorName of Object.keys(defaultTheme.colors) as (keyof typeof defaultTheme.colors)[]) {
      expect(deserialized.colors[colorName]).toEqual(defaultTheme.colors[colorName]);
    }
  });
});
