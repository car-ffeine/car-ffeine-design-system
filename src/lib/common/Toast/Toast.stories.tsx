import type { Meta } from '@storybook/react';
import styled from 'styled-components';

import { useExternalValue } from '@utils/external-state';

import { toastActions, toastListStore } from '@stores/toastStore';

import Box from '@common/Box';
import Button from '@common/Button';
import { StyledToast } from '@common/Toast/Toast.style';

import Text from '../Text';
import type { ToastProps } from './Toast';
import Toast from './Toast';

const meta = {
  title: 'Notice/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    toastId: 0,
    message: '사용자에게 보여줄 메시지를 입력하세요',
    position: 'bottom-center',
    color: 'success',
  },
  argTypes: {
    toastId: {
      description: '토스트 고유의 id 입니다.',
    },
    message: {
      description: '원하는 글자를 입력해 테스트를 할 수 있습니다.',
    },
    color: {
      description: '선택한 색상에 따라 토스트의 색상이 변합니다.',
    },
    css: {
      description: '원하는 css를 적용할 수 있습니다.',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

export const Default = (args: ToastProps) => {
  const toastItems = useExternalValue<ToastProps[]>(toastListStore);
  const { showToast } = toastActions;

  const { message, position, color } = args;

  return (
    <Box height={30}>
      <Button
        width={10}
        height={4}
        variant="contained"
        onClick={() => showToast(message, color, position)}
      >
        나와라 토스트!
      </Button>
      <>
        {toastItems.map((toastItem) => (
          <Toast key={toastItem.toastId} {...toastItem} />
        ))}
      </>
    </Box>
  );
};

const ToastForStorybook = styled(StyledToast)`
  position: initial;
  transform: none;
  margin-bottom: 4rem;
`;

export const Colors = () => {
  return (
    <>
      <Text variant="h5" mb={4}>
        Primary
      </Text>
      <ToastForStorybook color="primary">이삭 토스트</ToastForStorybook>
      <Text variant="h5" mb={4}>
        Secondary
      </Text>
      <ToastForStorybook color="secondary">이삭 토스트</ToastForStorybook>
      <Text variant="h5" mb={4}>
        Success
      </Text>
      <ToastForStorybook color="success">이삭 토스트</ToastForStorybook>
      <Text variant="h5" mb={4}>
        Warning
      </Text>
      <ToastForStorybook color="warning">이삭 토스트</ToastForStorybook>
      <Text variant="h5" mb={4}>
        Error
      </Text>
      <ToastForStorybook color="error">이삭 토스트</ToastForStorybook>
      <Text variant="h5" mb={4}>
        Info
      </Text>
      <ToastForStorybook color="info">이삭 토스트</ToastForStorybook>
      <Text variant="h5" mb={4}>
        Light
      </Text>
      <ToastForStorybook color="light">이삭 토스트</ToastForStorybook>
      <Text variant="h5" mb={4}>
        Dark
      </Text>
      <ToastForStorybook color="dark">이삭 토스트</ToastForStorybook>
    </>
  );
};
