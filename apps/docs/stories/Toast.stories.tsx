import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastTitle, ToastDescription } from '@pineapple-ui/core';

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ToastTitle>Notification</ToastTitle>
        <ToastDescription>This is a toast message.</ToastDescription>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    children: (
      <>
        <ToastTitle>Success!</ToastTitle>
        <ToastDescription>Your changes have been saved.</ToastDescription>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    children: (
      <>
        <ToastTitle>Warning</ToastTitle>
        <ToastDescription>Please review your input.</ToastDescription>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    children: (
      <>
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>Something went wrong.</ToastDescription>
      </>
    ),
  },
};
