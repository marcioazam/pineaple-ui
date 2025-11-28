import { describe, it, expect } from 'vitest';
import { useControllableState, useMediaQuery, useIsomorphicLayoutEffect, useCallbackRef } from './index';

describe('Hooks Package', () => {
  it('should export useControllableState', () => {
    expect(useControllableState).toBeDefined();
    expect(typeof useControllableState).toBe('function');
  });

  it('should export useMediaQuery', () => {
    expect(useMediaQuery).toBeDefined();
    expect(typeof useMediaQuery).toBe('function');
  });

  it('should export useIsomorphicLayoutEffect', () => {
    expect(useIsomorphicLayoutEffect).toBeDefined();
    expect(typeof useIsomorphicLayoutEffect).toBe('function');
  });

  it('should export useCallbackRef', () => {
    expect(useCallbackRef).toBeDefined();
    expect(typeof useCallbackRef).toBe('function');
  });
});
