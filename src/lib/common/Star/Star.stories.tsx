import type { Meta } from '@storybook/react';

import { useState } from 'react';

import type { StarProps } from './Star';
import Star from './Star';

const meta = {
  title: 'Components/Star',
  component: Star,
  tags: ['autodocs'],
  args: {
    isSelected: false,
    onClick: () => {
      alert('제가 눌렸어요!!!');
    },
    size: 'md',
  },
  argTypes: {
    isSelected: {
      description: '별에 불을 들어오게 하는 역할을 합니다.',
    },
    onClick: {
      description: '눌렀을 때 반응하도록 할 수 있습니다.',
    },
    size: {
      description: '크기를 지정할 수 있습니다.',
    },
  },
} satisfies Meta<typeof Star>;

export default meta;

export const Default = (args: StarProps) => {
  return <Star {...args} />;
};

export const Sizes = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <Star isSelected={isSelected} onClick={() => setIsSelected(!isSelected)} size="xs" />
      <Star isSelected={isSelected} onClick={() => setIsSelected(!isSelected)} size="sm" />
      <Star isSelected={isSelected} onClick={() => setIsSelected(!isSelected)} size="md" />
      <Star isSelected={isSelected} onClick={() => setIsSelected(!isSelected)} size="lg" />
      <Star isSelected={isSelected} onClick={() => setIsSelected(!isSelected)} size="xl" />
      <Star isSelected={isSelected} onClick={() => setIsSelected(!isSelected)} size="xxl" />
    </div>
  );
};
