import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import fc from 'fast-check';
import { Radio, RadioGroup } from './radio';

describe('Radio Component', () => {
  /**
   * **Feature: pineapple-ui, Property 6: ARIA Attribute Presence**
   * **Validates: Requirements 4.1**
   *
   * For any interactive headless component,
   * when rendered, the component SHALL include all required ARIA attributes.
   */
  it('should have correct ARIA role and state attributes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('option1', 'option2', 'option3'),
        fc.constantFrom('option1', 'option2', 'option3'),
        (defaultValue, selectedValue) => {
          const { unmount } = render(
            <RadioGroup defaultValue={defaultValue}>
              <Radio value="option1" data-testid="radio1" />
              <Radio value="option2" data-testid="radio2" />
              <Radio value="option3" data-testid="radio3" />
            </RadioGroup>
          );

          const radioGroup = screen.getByRole('radiogroup');
          expect(radioGroup).toBeInTheDocument();

          const radios = screen.getAllByRole('radio');
          expect(radios).toHaveLength(3);

          radios.forEach((radio) => {
            const value = radio.getAttribute('value');
            if (value === defaultValue) {
              expect(radio).toHaveAttribute('aria-checked', 'true');
            } else {
              expect(radio).toHaveAttribute('aria-checked', 'false');
            }
          });

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should forward ref to radio element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <RadioGroup>
        <Radio ref={ref} value="test" />
      </RadioGroup>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should apply error variant styles when error is true', () => {
    render(
      <RadioGroup>
        <Radio error value="test" data-testid="radio" />
      </RadioGroup>
    );
    const radio = screen.getByTestId('radio');
    expect(radio.className).toContain('border-danger-500');
  });

  it('should be disabled when disabled prop is true', () => {
    render(
      <RadioGroup disabled>
        <Radio value="test" data-testid="radio" />
      </RadioGroup>
    );
    expect(screen.getByTestId('radio')).toBeDisabled();
  });

  it('should support horizontal orientation', () => {
    render(
      <RadioGroup orientation="horizontal" data-testid="group">
        <Radio value="option1" />
        <Radio value="option2" />
      </RadioGroup>
    );
    const group = screen.getByTestId('group');
    expect(group.className).toContain('grid-flow-col');
  });
});
