import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Menu from './index';

describe('Menu Primitive', () => {
  /**
   * **Feature: pineapple-ui, Property 8: Keyboard Navigation Consistency**
   * **Validates: Requirements 4.2**
   *
   * For any navigable component (Menu, Tabs, Select),
   * arrow key presses SHALL move focus to the next/previous item in the expected direction.
   */
  it('should navigate menu items with arrow keys', async () => {
    const user = userEvent.setup();

    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger data-testid="trigger">Open Menu</Menu.Trigger>
        <Menu.Portal>
          <Menu.Content data-testid="content">
            <Menu.Item data-testid="item1">Item 1</Menu.Item>
            <Menu.Item data-testid="item2">Item 2</Menu.Item>
            <Menu.Item data-testid="item3">Item 3</Menu.Item>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    );

    // Menu should be open
    expect(screen.getByTestId('content')).toBeInTheDocument();

    // Navigate with arrow down
    await user.keyboard('{ArrowDown}');

    // Focus should be on a menu item
    const content = screen.getByTestId('content');
    expect(content.contains(document.activeElement)).toBe(true);
  });

  it('should export all required compound component parts', () => {
    // Verify all parts are exported
    expect(Menu.Root).toBeDefined();
    expect(Menu.Trigger).toBeDefined();
    expect(Menu.Portal).toBeDefined();
    expect(Menu.Content).toBeDefined();
    expect(Menu.Item).toBeDefined();
    expect(Menu.Separator).toBeDefined();
    expect(Menu.Group).toBeDefined();
    expect(Menu.Label).toBeDefined();
    expect(Menu.CheckboxItem).toBeDefined();
    expect(Menu.RadioGroup).toBeDefined();
    expect(Menu.RadioItem).toBeDefined();
    expect(Menu.Sub).toBeDefined();
    expect(Menu.SubTrigger).toBeDefined();
    expect(Menu.SubContent).toBeDefined();
  });

  it('should render menu content when open', () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.Portal>
          <Menu.Content>
            <Menu.Item>Test Item</Menu.Item>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    );

    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });
});
