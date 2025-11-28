import * as React from 'react';
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from '../menu';
import { Button, type ButtonProps } from '../button';

export interface DropdownProps {
  /** Trigger button content */
  trigger: React.ReactNode;
  /** Trigger button props */
  triggerProps?: Omit<ButtonProps, 'children'>;
  /** Dropdown content */
  children: React.ReactNode;
  /** Alignment of dropdown */
  align?: 'start' | 'center' | 'end';
}

/**
 * Dropdown component using Menu primitive with styled trigger.
 *
 * @example
 * ```tsx
 * <Dropdown trigger="Options">
 *   <DropdownItem>Edit</DropdownItem>
 *   <DropdownItem>Delete</DropdownItem>
 * </Dropdown>
 * ```
 */
export function Dropdown({ trigger, triggerProps, children, align = 'start' }: DropdownProps) {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline" {...triggerProps}>
          {trigger}
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </MenuTrigger>
      <MenuContent align={align}>{children}</MenuContent>
    </Menu>
  );
}

Dropdown.displayName = 'Dropdown';

export const DropdownItem = MenuItem;
export const DropdownSeparator = MenuSeparator;
