/**
 * Error codes for Pineapple UI errors
 */
export const ERROR_CODES = {
  INVALID_PROP: 'INVALID_PROP',
  MISSING_CONTEXT: 'MISSING_CONTEXT',
  INVALID_CHILDREN: 'INVALID_CHILDREN',
  UNSUPPORTED_FEATURE: 'UNSUPPORTED_FEATURE',
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

/**
 * Base error class for Pineapple UI
 */
export class PineappleUIError extends Error {
  constructor(
    message: string,
    public readonly code: ErrorCode,
    public readonly component?: string,
    public readonly cause?: Error
  ) {
    const prefix = component ? `[Pineapple UI - ${component}]` : '[Pineapple UI]';
    super(`${prefix} ${message}`);
    this.name = 'PineappleUIError';

    // Preserve stack trace from cause
    if (cause?.stack) {
      this.stack = `${this.stack}\nCaused by: ${cause.stack}`;
    }
  }
}

/**
 * Error thrown when an invalid prop value is provided
 */
export class InvalidPropError extends PineappleUIError {
  constructor(
    component: string,
    prop: string,
    expected: string,
    received: unknown,
    cause?: Error
  ) {
    super(
      `Invalid prop "${prop}": expected ${expected}, received ${typeof received}`,
      ERROR_CODES.INVALID_PROP,
      component,
      cause
    );
    this.name = 'InvalidPropError';
  }
}

/**
 * Error thrown when a component is used outside its required context
 */
export class MissingContextError extends PineappleUIError {
  constructor(component: string, context: string, cause?: Error) {
    super(
      `${component} must be used within a ${context} provider`,
      ERROR_CODES.MISSING_CONTEXT,
      component,
      cause
    );
    this.name = 'MissingContextError';
  }
}

/**
 * Error thrown when invalid children are passed to a component
 */
export class InvalidChildrenError extends PineappleUIError {
  constructor(component: string, expected: string, cause?: Error) {
    super(
      `Invalid children: expected ${expected}`,
      ERROR_CODES.INVALID_CHILDREN,
      component,
      cause
    );
    this.name = 'InvalidChildrenError';
  }
}
