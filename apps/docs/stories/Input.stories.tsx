import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@pineapple-ui/core';

/**
 * Input component for text entry.
 *
 * Supports error states, disabled state, and required indication.
 */
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Shows error styling',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    required: {
      control: 'boolean',
      description: 'Marks field as required',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Enter text...',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    placeholder: 'Required field',
    required: true,
  },
};
