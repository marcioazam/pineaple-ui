import type { Preview } from '@storybook/react';
import '../styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduction',
          'Components',
          ['Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch'],
          'Layout',
          ['Box', 'Flex', 'Grid', 'Stack', 'Container'],
          'Navigation',
          ['Tabs', 'Menu', 'Dropdown', 'Breadcrumb'],
          'Feedback',
          ['Alert', 'Dialog', 'Toast', 'Tooltip'],
          'Data Display',
          ['Card', 'Badge', 'Avatar', 'Table'],
          'Icons',
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
