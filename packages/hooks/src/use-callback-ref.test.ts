import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useCallbackRef } from './use-callback-ref';

describe('useCallbackRef', () => {
  it('should return a stable function reference', () => {
    const callback = vi.fn();
    const { result, rerender } = renderHook(
      ({ cb }) => useCallbackRef(cb),
      { initialProps: { cb: callback } }
    );

    const firstRef = result.current;

    rerender({ cb: callback });

    expect(result.current).toBe(firstRef);
  });

  it('should call the latest callback', () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    const { result, rerender } = renderHook(
      ({ cb }) => useCallbackRef(cb),
      { initialProps: { cb: callback1 } }
    );

    result.current('arg1');
    expect(callback1).toHaveBeenCalledWith('arg1');

    rerender({ cb: callback2 });

    result.current('arg2');
    expect(callback2).toHaveBeenCalledWith('arg2');
    expect(callback1).toHaveBeenCalledTimes(1);
  });

  it('should handle undefined callback', () => {
    const { result } = renderHook(() => useCallbackRef(undefined));

    expect(() => result.current('arg')).not.toThrow();
  });

  it('should maintain reference identity across renders', () => {
    const { result, rerender } = renderHook(
      ({ cb }) => useCallbackRef(cb),
      { initialProps: { cb: () => 'first' } }
    );

    const refs: Array<typeof result.current> = [result.current];

    for (let i = 0; i < 5; i++) {
      rerender({ cb: () => `render-${i}` });
      refs.push(result.current);
    }

    expect(refs.every((ref) => ref === refs[0])).toBe(true);
  });
});
