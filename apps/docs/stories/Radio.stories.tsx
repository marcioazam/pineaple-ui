import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, Radio } from '@pineapple-ui/core';

const meta = {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <Radio value="option1" />
          Option 1
        </label>
        <label className="flex items-center gap-2">
          <Radio value="option2" />
          Option 2
        </label>
        <label className="flex items-center gap-2">
          <Radio value="option3" />
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="small" orientation="horizontal">
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <Radio value="small" />
          Small
        </label>
        <label className="flex items-center gap-2">
          <Radio value="medium" />
          Medium
        </label>
        <label className="flex items-center gap-2">
          <Radio value="large" />
          Large
        </label>
      </div>
    </RadioGroup>
  ),
};
