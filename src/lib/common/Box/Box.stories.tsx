import type { Meta } from '@storybook/react';

import Text from '../Text';
import type { BoxProps } from './Box';
import Box from './Box';
import { boxStyleArgTypes } from './Box.style';

const meta = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    border: false,
    position: 'absolute',
  },
  argTypes: {
    children: {
      description: 'div처럼 사용할 수 있습니다.',
    },
    ...boxStyleArgTypes,
  },
} satisfies Meta<typeof Box>;

export default meta;

export const Default = (args: BoxProps) => {
  return (
    <Box {...args}>
      <Text variant="body">이것은 아무것도 없는 박스입니다.</Text>
    </Box>
  );
};
