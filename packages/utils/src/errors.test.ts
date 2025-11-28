import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import {
  ERROR_CODES,
  PineappleUIError,
  InvalidPropError,
  MissingContextError,
  InvalidChildrenError,
} from './errors';

describe('Error Classes', () => {
  /**
   * **Feature: code-review-engine, Property 7: Error Class Usage**
   * **Validates: Requirements 11.1, 11.2**
   *
   * For any error thrown by Pineapple UI components, the error SHALL be
   * an instance of PineappleUIError or its subclasses AND SHALL include
   * component context.
   */
  describe('Error Class Hierarchy', () => {
    it('should have all error classes extend PineappleUIError', () => {
      fc.assert(
        fc.property(fc.string({ minLength: 1, maxLength: 50 }), (componentName) => {
          const invalidPropError = new InvalidPropError(componentName, 'testProp', 'string', 123);
          const missingContextError = new MissingContextError(componentName, 'TestContext');
          const invalidChildrenError = new InvalidChildrenError(componentName, 'valid React element');

          expect(invalidPropError).toBeInstanceOf(PineappleUIError);
          expect(invalidPropError).toBeInstanceOf(Error);

          expect(missingContextError).toBeInstanceOf(PineappleUIError);
          expect(missingContextError).toBeInstanceOf(Error);

          expect(invalidChildrenError).toBeInstanceOf(PineappleUIError);
          expect(invalidChildrenError).toBeInstanceOf(Error);
        }),
        { numRuns: 100 }
      );
    });

    it('should include component context in error message', () => {
      fc.assert(
        fc.property(fc.string({ minLength: 1, maxLength: 50 }), (componentName) => {
          const error = new InvalidPropError(componentName, 'testProp', 'string', 123);

          expect(error.message).toContain(componentName);
          expect(error.component).toBe(componentName);
        }),
        { numRuns: 100 }
      );
    });

    it('should have valid error codes', () => {
      const validCodes = Object.values(ERROR_CODES);

      fc.assert(
        fc.property(fc.constantFrom(...validCodes), (code) => {
          const error = new PineappleUIError('Test message', code, 'TestComponent');

          expect(validCodes).toContain(error.code);
        }),
        { numRuns: 100 }
      );
    });
  });

  describe('Error Code Constants', () => {
    it('should have all required error codes defined', () => {
      expect(ERROR_CODES.INVALID_PROP).toBe('INVALID_PROP');
      expect(ERROR_CODES.MISSING_CONTEXT).toBe('MISSING_CONTEXT');
      expect(ERROR_CODES.INVALID_CHILDREN).toBe('INVALID_CHILDREN');
      expect(ERROR_CODES.UNSUPPORTED_FEATURE).toBe('UNSUPPORTED_FEATURE');
    });
  });

  describe('Cause Chain Support', () => {
    it('should preserve cause error in stack trace', () => {
      const causeError = new Error('Original error');
      const error = new PineappleUIError(
        'Wrapper error',
        ERROR_CODES.INVALID_PROP,
        'TestComponent',
        causeError
      );

      expect(error.cause).toBe(causeError);
      expect(error.stack).toContain('Caused by:');
    });

    it('should work without cause', () => {
      const error = new PineappleUIError(
        'Test error',
        ERROR_CODES.INVALID_PROP,
        'TestComponent'
      );

      expect(error.cause).toBeUndefined();
      expect(error.stack).not.toContain('Caused by:');
    });
  });

  describe('InvalidPropError', () => {
    it('should format message correctly', () => {
      const error = new InvalidPropError('Button', 'variant', 'string', 123);

      expect(error.message).toContain('Button');
      expect(error.message).toContain('variant');
      expect(error.message).toContain('string');
      expect(error.message).toContain('number');
      expect(error.code).toBe(ERROR_CODES.INVALID_PROP);
      expect(error.name).toBe('InvalidPropError');
    });
  });

  describe('MissingContextError', () => {
    it('should format message correctly', () => {
      const error = new MissingContextError('MenuItem', 'Menu');

      expect(error.message).toContain('MenuItem');
      expect(error.message).toContain('Menu');
      expect(error.code).toBe(ERROR_CODES.MISSING_CONTEXT);
      expect(error.name).toBe('MissingContextError');
    });
  });

  describe('InvalidChildrenError', () => {
    it('should format message correctly', () => {
      const error = new InvalidChildrenError('FormField', 'valid React element');

      expect(error.message).toContain('FormField');
      expect(error.message).toContain('valid React element');
      expect(error.code).toBe(ERROR_CODES.INVALID_CHILDREN);
      expect(error.name).toBe('InvalidChildrenError');
    });
  });
});
