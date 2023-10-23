import type { Meta } from '@storybook/react';

import { flexBoxStyleArgTypes } from '@common/FlexBox/FlexBox.style';

import type { ErrorProps } from './Error';
import Error from './Error';

const meta = {
  title: 'Components/Error',
  component: Error,
  tags: ['autodocs'],
  args: {
    title: '타이틀',
    message: '에러 메시지',
    subMessage: '보조적인 에러 메시지',
    fontSize: '80%',
  },
  argTypes: {
    ...flexBoxStyleArgTypes,
  },
} satisfies Meta<typeof Error>;

export default meta;

export const Default = (args: ErrorProps) => {
  return <Error {...args} handleRetry={() => location.reload()} minHeight={40.4} />;
};
