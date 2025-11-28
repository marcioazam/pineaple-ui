import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import fc from 'fast-check';
import { createIcon } from './create-icon';
import { Icon } from './icon';
import { CheckIcon, XIcon } from './icons';

describe('Icon Components', () => {
  /**
   * **Feature: pineapple-ui, Property 12: Icon Accessibility**
   * **Validates: Requirements 11.3**
   *
   * For any Icon component, if aria-label is provided it SHALL have role="img",
   * otherwise it SHALL have aria-hidden="true".
   */
  it('should have correct accessibility attributes based on aria-label', () => {
    // Test with aria-label
    const { unmount: unmount1 } = render(
      <CheckIcon aria-label="Check mark" data-testid="icon-with-label" />
    );
    const iconWithLabel = screen.getByTestId('icon-with-label');
    expect(iconWithLabel).toHaveAttribute('role', 'img');
    expect(iconWithLabel).toHaveAttribute('aria-label', 'Check mark');
    unmount1();

    // Test without aria-label (decorative)
    const { unmount: unmount2 } = render(
      <CheckIcon data-testid="icon-decorative" />
    );
    const iconDecorative = screen.getByTestId('icon-decorative');
    expect(iconDecorative).toHaveAttribute('aria-hidden', 'true');
    expect(iconDecorative).not.toHaveAttribute('role');
    unmount2();
  });

  /**
   * **Feature: pineapple-ui, Property 13: Icon Size and Color Props**
   * **Validates: Requirements 11.2**
   *
   * For any Icon component with size and color props,
   * the rendered SVG SHALL have width/height equal to size and stroke equal to color.
   */
  it('should apply size and color props correctly', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 8, max: 128 }),
        fc.constantFrom('red', 'blue', 'green', '#ff0000', 'currentColor'),
        (size, color) => {
          const { unmount } = render(
            <XIcon size={size} color={color} data-testid="icon" />
          );
          const icon = screen.getByTestId('icon');

          expect(icon).toHaveAttribute('width', String(size));
          expect(icon).toHaveAttribute('height', String(size));
          expect(icon).toHaveAttribute('stroke', color);

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should render custom Icon wrapper with children', () => {
    render(
      <Icon data-testid="custom-icon">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
      </Icon>
    );
    const icon = screen.getByTestId('custom-icon');
    expect(icon).toBeInTheDocument();
    expect(icon.querySelector('path')).toBeInTheDocument();
  });

  it('should create icon with createIcon factory', () => {
    const TestIcon = createIcon('TestIcon', <circle cx="12" cy="12" r="10" />);
    render(<TestIcon data-testid="test-icon" />);
    const icon = screen.getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
    expect(icon.querySelector('circle')).toBeInTheDocument();
  });
});
