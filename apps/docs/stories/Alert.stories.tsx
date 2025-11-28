import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@pineapple-ui/core';

/**
 * Alert component for displaying important messages.
 *
 * Supports info, success, warning, and error status variants.
 */
const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Status variant',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    status: 'info',
    children: (
      <>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational message.</AlertDescription>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    children: (
      <>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your action was completed successfully.</AlertDescription>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    children: (
      <>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review before proceeding.</AlertDescription>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    children: (
      <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
    ),
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert status="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Informational message</AlertDescription>
      </Alert>
      <Alert status="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Success message</AlertDescription>
      </Alert>
      <Alert status="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Warning message</AlertDescription>
      </Alert>
      <Alert status="error">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Error message</AlertDescription>
      </Alert>
    </div>
  ),
};
