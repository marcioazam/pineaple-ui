import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Box } from '@pineapple-ui/core';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Box className="bg-primary-100 p-4 rounded">{children}</Box>
);

export const Row: Story = {
  render: () => (
    <Flex gap={4}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Flex>
  ),
};

export const Column: Story = {
  render: () => (
    <Flex direction="column" gap={4}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Flex justify="between" className="w-full">
      <Item>Left</Item>
      <Item>Right</Item>
    </Flex>
  ),
};

export const Centered: Story = {
  render: () => (
    <Flex align="center" justify="center" className="h-32 bg-neutral-100 rounded">
      <Item>Centered</Item>
    </Flex>
  ),
};
