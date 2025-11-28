import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fc from 'fast-check';
import * as Dialog from './index';

describe('Dialog Primitive', () => {
  /**
   * **Feature: pineapple-ui, Property 7: Focus Trap Containment**
   * **Validates: Requirements 4.5**
   *
   * For any modal component (Dialog, Dropdown) in open state,
   * pressing Tab SHALL cycle focus only within the modal's focusable elements.
   */
  it('should trap focus within dialog when open', async () => {
    const user = userEvent.setup();

    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Overlay data-testid="overlay" />
          <Dialog.Content data-testid="content">
            <Dialog.Title>Test Dialog</Dialog.Title>
            <Dialog.Description>Test description</Dialog.Description>
            <button data-testid="button1">First</button>
            <button data-testid="button2">Second</button>
            <Dialog.Close data-testid="close">Close</Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );

    // Dialog should be open
    expect(screen.getByTestId('content')).toBeInTheDocument();

    // Focus should be within the dialog
    const button1 = screen.getByTestId('button1');
    const button2 = screen.getByTestId('button2');
    const closeButton = screen.getByTestId('close');

    // Tab through focusable elements
    await user.tab();
    await user.tab();
    await user.tab();

    // Focus should cycle within dialog (not escape to body)
    const activeElement = document.activeElement;
    const dialogContent = screen.getByTestId('content');
    expect(dialogContent.contains(activeElement)).toBe(true);
  });

  it('should export all required compound component parts', () => {
    // Verify all parts are exported
    expect(Dialog.Root).toBeDefined();
    expect(Dialog.Trigger).toBeDefined();
    expect(Dialog.Portal).toBeDefined();
    expect(Dialog.Overlay).toBeDefined();
    expect(Dialog.Content).toBeDefined();
    expect(Dialog.Title).toBeDefined();
    expect(Dialog.Description).toBeDefined();
    expect(Dialog.Close).toBeDefined();
  });

  it('should render dialog content when open', () => {
    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Content>
            <Dialog.Title>Test Title</Dialog.Title>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
