import * as React from 'react';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

/**
 * Hook that returns a stable callback reference.
 * The callback is always up-to-date but the reference never changes.
 *
 * @example
 * ```tsx
 * const stableCallback = useCallbackRef(callback);
 * ```
 */
export function useCallbackRef<T extends (...args: unknown[]) => unknown>(
  callback: T | undefined
): T {
  const callbackRef = React.useRef(callback);

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return React.useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}
