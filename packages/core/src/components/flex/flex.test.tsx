import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Flex } from './flex';

describe('Flex Component', () => {
  it('should render with flex class by default', () => {
    render(<Flex data-testid="flex">Content</Flex>);
    const flex = screen.getByTestId('flex');
    expect(flex.className).toContain('flex');
  });

  it('should apply direction variant', () => {
    render(
      <Flex direction="column" data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId('flex').className).toContain('flex-col');
  });

  it('should apply align variant', () => {
    render(
      <Flex align="center" data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId('flex').className).toContain('items-center');
  });

  it('should apply justify variant', () => {
    render(
      <Flex justify="between" data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId('flex').className).toContain('justify-between');
  });

  it('should apply gap variant', () => {
    render(
      <Flex gap={4} data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId('flex').className).toContain('gap-4');
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Flex ref={ref}>Content</Flex>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
