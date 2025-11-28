import * as React from 'react';

/**
 * useLayoutEffect that works on both server and client.
 * Falls back to useEffect on the server to avoid warnings.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
