import * as React from 'react';

type UseControllableStateParams<T> = {
  prop?: T;
  defaultProp?: T;
  onChange?: (value: T) => void;
};

type SetStateFn<T> = (prevState?: T) => T;

/**
 * Hook for managing controllable state.
 * Allows a component to be either controlled or uncontrolled.
 *
 * @example
 * ```tsx
 * const [value, setValue] = useControllableState({
 *   prop: controlledValue,
 *   defaultProp: 'default',
 *   onChange: onValueChange,
 * });
 * ```
 */
export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: UseControllableStateParams<T>): [T | undefined, (value: T | SetStateFn<T>) => void] {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange,
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = React.useCallback(
    (nextValue: T | SetStateFn<T>) => {
      if (isControlled) {
        const setter = nextValue as SetStateFn<T>;
        const newValue = typeof nextValue === 'function' ? setter(prop) : nextValue;
        if (newValue !== prop) onChange?.(newValue);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, onChange, setUncontrolledProp]
  );

  return [value, setValue];
}

function useUncontrolledState<T>({
  defaultProp,
  onChange,
}: {
  defaultProp?: T | undefined;
  onChange?: ((value: T) => void) | undefined;
}) {
  const [value, setValue] = React.useState(defaultProp);
  const prevValueRef = React.useRef(value);

  React.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChange?.(value as T);
      prevValueRef.current = value;
    }
  }, [value, onChange]);

  return [value, setValue] as const;
}
