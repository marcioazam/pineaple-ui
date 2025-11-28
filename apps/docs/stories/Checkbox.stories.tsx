import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@pineapple-ui/core';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Accept terms and conditions' },
};

export const Checked: Story = {
  args: { children: 'Checked by default', defaultChecked: true },
};

export const Disabled: Story = {
  args: { children: 'Disabled checkbox', disabled: true },
};

export const DisabledChecked: Story = {
  args: { children: 'Disabled and checked', disabled: true, defaultChecked: true },
};
