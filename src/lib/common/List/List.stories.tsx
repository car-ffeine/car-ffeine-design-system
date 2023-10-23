import type { Meta } from '@storybook/react';

import { spacingArgTypes } from '@style/spacing';

import ListItem from '../ListItem';
import Text from '../Text';
import type { ListProps } from './List';
import List from './List';

const meta = {
  title: 'Layout/List/List',
  component: List,
  tags: ['autodocs'],
  args: {
    children: 'List',
    p: '0',
    border: false,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: '리스트의 하위 요소는 `<ListItem/>` 컴포넌트가 와야합니다.',
    },
    border: {
      control: {
        type: 'boolean',
      },
      description: 'border를 기본적으로 줄 수 있습니다.',
    },
    ...spacingArgTypes,
  },
} satisfies Meta<typeof List>;

export default meta;

export const Default = (args: ListProps) => {
  return <List {...args} />;
};

export const ListWithoutPadding = () => {
  return (
    <List>
      <ListItem css={{ backgroundColor: '#2d79c4' }}>
        <Text>패딩이 없는</Text>
      </ListItem>
      <ListItem css={{ backgroundColor: '#965abb' }}>
        <Text>리스트라니</Text>
      </ListItem>
    </List>
  );
};

export const ListWithPadding = () => {
  return (
    <List p={40} border>
      <ListItem css={{ backgroundColor: '#2d79c4' }}>
        <Text>패딩이 있는</Text>
      </ListItem>
      <ListItem css={{ backgroundColor: '#965abb' }}>
        <Text>리스트라니</Text>
      </ListItem>
    </List>
  );
};

export const ListWithBorder = () => {
  return (
    <List p={4} border>
      <ListItem>
        <Text>보더가 있는</Text>
      </ListItem>
      <ListItem>
        <Text>리스트라니</Text>
      </ListItem>
    </List>
  );
};
