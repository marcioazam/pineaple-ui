import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Box } from './box';

describe('Box Component', () => {
  it('should render as div by default', () => {
    render(<Box data-testid="box">Content</Box>);
    const box = screen.getByTestId('box');
    expect(box.tagName).toBe('DIV');
    expect(box).toHaveTextContent('Content');
  });

  it('should render as specified element with as prop', () => {
    render(
      <Box as="section" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId('box').tagName).toBe('SECTION');
  });

  it('should forward ref to underlying element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Box ref={ref}>Content</Box>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should apply custom className', () => {
    render(
      <Box className="custom-class p-4" data-testid="box">
        Content
      </Box>
    );
    const box = screen.getByTestId('box');
    expect(box.className).toContain('custom-class');
    expect(box.className).toContain('p-4');
  });

  it('should pass through HTML attributes', () => {
    render(
      <Box id="my-box" aria-label="My box" data-testid="box">
        Content
      </Box>
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveAttribute('id', 'my-box');
    expect(box).toHaveAttribute('aria-label', 'My box');
  });
});
