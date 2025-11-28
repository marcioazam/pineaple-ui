import type { ThemeTokens, ColorScale } from './types';

const SERIALIZER_VERSION = '1.0.0';

interface SerializedTokens {
  version: string;
  tokens: ThemeTokens;
}

/**
 * Serialize theme tokens to JSON string
 */
export function serializeTokens(tokens: ThemeTokens): string {
  const serialized: SerializedTokens = {
    version: SERIALIZER_VERSION,
    tokens,
  };
  return JSON.stringify(serialized, null, 2);
}

/**
 * Deserialize JSON string to theme tokens
 */
export function deserializeTokens(json: string): ThemeTokens {
  const parsed: SerializedTokens = JSON.parse(json);
  return parsed.tokens;
}

/**
 * Convert theme tokens to CSS custom properties
 */
export function tokensToCSS(tokens: ThemeTokens): string {
  const lines: string[] = [':root {'];

  // Colors
  for (const [colorName, scale] of Object.entries(tokens.colors)) {
    for (const [shade, value] of Object.entries(scale as ColorScale)) {
      lines.push(`  --color-${colorName}-${shade}: ${value};`);
    }
  }

  // Spacing
  for (const [key, value] of Object.entries(tokens.spacing)) {
    lines.push(`  --spacing-${key}: ${value};`);
  }

  // Typography
  for (const [key, value] of Object.entries(tokens.typography.fontFamily)) {
    lines.push(`  --font-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(tokens.typography.fontSize)) {
    lines.push(`  --text-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(tokens.typography.fontWeight)) {
    lines.push(`  --font-weight-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(tokens.typography.lineHeight)) {
    lines.push(`  --leading-${key}: ${value};`);
  }

  // Radii
  for (const [key, value] of Object.entries(tokens.radii)) {
    lines.push(`  --radius-${key}: ${value};`);
  }

  // Shadows
  for (const [key, value] of Object.entries(tokens.shadows)) {
    lines.push(`  --shadow-${key}: ${value};`);
  }

  // Transitions
  for (const [key, value] of Object.entries(tokens.transitions)) {
    lines.push(`  --transition-${key}: ${value};`);
  }

  lines.push('}');
  return lines.join('\n');
}
