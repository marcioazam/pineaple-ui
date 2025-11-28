import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Box } from '@pineapple-ui/core';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Box className="bg-primary-100 p-4 rounded text-center">{children}</Box>
);

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3} gap={4}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap={4}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <Item key={n}>{n}</Item>
      ))}
    </Grid>
  ),
};

export const WithGap: Story = {
  render: () => (
    <Grid columns={2} gap={8}>
      <Item>Large gap</Item>
      <Item>Between items</Item>
      <Item>In a grid</Item>
      <Item>Layout</Item>
    </Grid>
  ),
};
