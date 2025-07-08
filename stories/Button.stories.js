import { fn } from '@storybook/test';
import { createButton } from './Button';

export default {
  title: '株式会社XXYYZZ/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};