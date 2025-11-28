/**
 * Base error class for Pineapple UI
 */
export class PineappleUIError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly component?: string
  ) {
    const prefix = component ? `[Pineapple UI - ${component}]` : '[Pineapple UI]';
    super(`${prefix} ${message}`);
    this.name = 'PineappleUIError';
  }
}

/**
 * Error thrown when an invalid prop value is provided
 */
export class InvalidPropError extends PineappleUIError {
  constructor(component: string, prop: string, expected: string, received: unknown) {
    super(
      `Invalid prop "${prop}": expected ${expected}, received ${typeof received}`,
      'INVALID_PROP',
      component
    );
    this.name = 'InvalidPropError';
  }
}

/**
 * Error thrown when a component is used outside its required context
 */
export class MissingContextError extends PineappleUIError {
  constructor(component: string, context: string) {
    super(`${component} must be used within a ${context} provider`, 'MISSING_CONTEXT', component);
    this.name = 'MissingContextError';
  }
}
