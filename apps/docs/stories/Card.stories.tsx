import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@pineapple-ui/core';
import { Button } from '@pineapple-ui/core';

/**
 * Card component for grouping related content.
 *
 * Supports elevated, outlined, and filled variants.
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'Visual style variant',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-80',
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content area where you can place any content.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    className: 'w-80',
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>With shadow effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content with elevated styling.</p>
        </CardContent>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    className: 'w-80',
    children: (
      <>
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>With border</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content with outlined styling.</p>
        </CardContent>
      </>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    className: 'w-80',
    children: (
      <>
        <CardHeader>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>With background</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content with filled styling.</p>
        </CardContent>
      </>
    ),
  },
};
