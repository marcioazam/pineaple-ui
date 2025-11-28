import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMediaQuery } from './use-media-query';

describe('useMediaQuery', () => {
  const mockMatchMedia = vi.fn();
  let listeners: Map<string, (e: MediaQueryListEvent) => void>;

  beforeEach(() => {
    listeners = new Map();
    mockMatchMedia.mockImplementation((query: string) => ({
      matches: query === '(min-width: 768px)',
      media: query,
      addEventListener: (_: string, handler: (e: MediaQueryListEvent) => void) => {
        listeners.set(query, handler);
      },
      removeEventListener: () => {
        listeners.delete(query);
      },
    }));
    vi.stubGlobal('matchMedia', mockMatchMedia);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return true when query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(true);
  });

  it('should return false when query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 480px)'));
    expect(result.current).toBe(false);
  });

  it('should update when media query changes', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(true);

    act(() => {
      const handler = listeners.get('(min-width: 768px)');
      if (handler) {
        handler({ matches: false } as MediaQueryListEvent);
      }
    });

    expect(result.current).toBe(false);
  });

  it('should cleanup listener on unmount', () => {
    const { unmount } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(listeners.has('(min-width: 768px)')).toBe(true);

    unmount();

    expect(listeners.has('(min-width: 768px)')).toBe(false);
  });

  it('should handle query change', () => {
    const { result, rerender } = renderHook(
      ({ query }) => useMediaQuery(query),
      { initialProps: { query: '(min-width: 768px)' } }
    );

    expect(result.current).toBe(true);

    rerender({ query: '(max-width: 480px)' });

    expect(result.current).toBe(false);
  });
});
