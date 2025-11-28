import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useControllableState } from './use-controllable-state';

describe('useControllableState', () => {
  describe('uncontrolled mode', () => {
    it('should use defaultProp as initial value', () => {
      const { result } = renderHook(() =>
        useControllableState({ defaultProp: 'initial' })
      );
      expect(result.current[0]).toBe('initial');
    });

    it('should update value when setValue is called', () => {
      const { result } = renderHook(() =>
        useControllableState({ defaultProp: 'initial' })
      );

      act(() => {
        result.current[1]('updated');
      });

      expect(result.current[0]).toBe('updated');
    });

    it('should call onChange when value changes', () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useControllableState({ defaultProp: 'initial', onChange })
      );

      act(() => {
        result.current[1]('updated');
      });

      expect(onChange).toHaveBeenCalledWith('updated');
    });

    it('should support function updater', () => {
      const { result } = renderHook(() =>
        useControllableState({ defaultProp: 0 })
      );

      act(() => {
        result.current[1]((prev) => (prev ?? 0) + 1);
      });

      expect(result.current[0]).toBe(1);
    });
  });

  describe('controlled mode', () => {
    it('should use prop as value', () => {
      const { result } = renderHook(() =>
        useControllableState({ prop: 'controlled' })
      );
      expect(result.current[0]).toBe('controlled');
    });

    it('should call onChange when setValue is called', () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useControllableState({ prop: 'controlled', onChange })
      );

      act(() => {
        result.current[1]('new-value');
      });

      expect(onChange).toHaveBeenCalledWith('new-value');
    });

    it('should not call onChange if value is the same', () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useControllableState({ prop: 'controlled', onChange })
      );

      act(() => {
        result.current[1]('controlled');
      });

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should update when prop changes', () => {
      const { result, rerender } = renderHook(
        ({ prop }) => useControllableState({ prop }),
        { initialProps: { prop: 'initial' } }
      );

      expect(result.current[0]).toBe('initial');

      rerender({ prop: 'updated' });

      expect(result.current[0]).toBe('updated');
    });
  });
});
