import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { Dialog, Menu, Tabs, Select, Tooltip } from './index';

/**
 * **Feature: pineapple-ui, Property 17: Component Part Exports**
 * **Validates: Requirements 4.3**
 *
 * For any compound component (Dialog, Menu, Tabs),
 * the module SHALL export Root, Trigger, and Content parts at minimum.
 */
describe('Primitives Component Part Exports', () => {
  const requiredParts = ['Root', 'Trigger', 'Content'] as const;

  const primitives = [
    { name: 'Dialog', component: Dialog },
    { name: 'Menu', component: Menu },
    { name: 'Tabs', component: Tabs },
    { name: 'Select', component: Select },
    { name: 'Tooltip', component: Tooltip },
  ] as const;

  it('should export Root, Trigger, and Content for all compound components', () => {
    fc.assert(
      fc.property(fc.constantFrom(...primitives), ({ name, component }) => {
        for (const part of requiredParts) {
          expect(component[part], `${name} should export ${part}`).toBeDefined();
        }
      }),
      { numRuns: 100 }
    );
  });

  it('Dialog should export all required parts', () => {
    expect(Dialog.Root).toBeDefined();
    expect(Dialog.Trigger).toBeDefined();
    expect(Dialog.Portal).toBeDefined();
    expect(Dialog.Overlay).toBeDefined();
    expect(Dialog.Content).toBeDefined();
    expect(Dialog.Title).toBeDefined();
    expect(Dialog.Description).toBeDefined();
    expect(Dialog.Close).toBeDefined();
  });

  it('Menu should export all required parts', () => {
    expect(Menu.Root).toBeDefined();
    expect(Menu.Trigger).toBeDefined();
    expect(Menu.Portal).toBeDefined();
    expect(Menu.Content).toBeDefined();
    expect(Menu.Item).toBeDefined();
    expect(Menu.Separator).toBeDefined();
  });

  it('Tabs should export all required parts', () => {
    expect(Tabs.Root).toBeDefined();
    expect(Tabs.List).toBeDefined();
    expect(Tabs.Trigger).toBeDefined();
    expect(Tabs.Content).toBeDefined();
  });

  it('Select should export all required parts', () => {
    expect(Select.Root).toBeDefined();
    expect(Select.Trigger).toBeDefined();
    expect(Select.Value).toBeDefined();
    expect(Select.Portal).toBeDefined();
    expect(Select.Content).toBeDefined();
    expect(Select.Item).toBeDefined();
  });

  it('Tooltip should export all required parts', () => {
    expect(Tooltip.Provider).toBeDefined();
    expect(Tooltip.Root).toBeDefined();
    expect(Tooltip.Trigger).toBeDefined();
    expect(Tooltip.Portal).toBeDefined();
    expect(Tooltip.Content).toBeDefined();
    expect(Tooltip.Arrow).toBeDefined();
  });
});
