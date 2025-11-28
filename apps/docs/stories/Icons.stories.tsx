import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@pineapple-ui/icons';
import * as Icons from '@pineapple-ui/icons';

const meta = {
  title: 'Icons/Overview',
  component: Icon,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const iconList = [
  'CheckIcon', 'XIcon', 'PlusIcon', 'MinusIcon',
  'ChevronDownIcon', 'ChevronUpIcon', 'ChevronLeftIcon', 'ChevronRightIcon',
  'ArrowUpIcon', 'ArrowDownIcon', 'ArrowLeftIcon', 'ArrowRightIcon',
  'MenuIcon', 'SearchIcon', 'SettingsIcon', 'UserIcon', 'HomeIcon',
  'AlertCircleIcon', 'InfoIcon', 'AlertTriangleIcon', 'CheckCircleIcon',
];

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4">
      {iconList.map((name) => {
        const IconComponent = (Icons as Record<string, React.ComponentType<{ size?: number }>>)[name];
        return IconComponent ? (
          <div key={name} className="flex flex-col items-center gap-2 p-4 rounded border">
            <IconComponent size={24} />
            <span className="text-xs text-neutral-500">{name}</span>
          </div>
        ) : null;
      })}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Icons.CheckIcon size={16} />
      <Icons.CheckIcon size={24} />
      <Icons.CheckIcon size={32} />
      <Icons.CheckIcon size={48} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icons.CheckCircleIcon color="green" size={32} />
      <Icons.AlertTriangleIcon color="orange" size={32} />
      <Icons.AlertCircleIcon color="red" size={32} />
      <Icons.InfoIcon color="blue" size={32} />
    </div>
  ),
};
