import type { Meta } from '@storybook/react';
import styled, { css } from 'styled-components';

import { getTypedObjectKeys } from '@utils/getTypedObjectKeys';

import Box from '@common/Box';
import { LAYOUT, flexBoxStyleArgTypes } from '@common/FlexBox/FlexBox.style';
import Text from '@common/Text';

import type { FlexBoxProps } from './FlexBox';
import FlexBox from './FlexBox';

const Boxes = (tag?: 'li') => {
  return (
    <>
      <Box as={tag}>1 박스</Box>
      <Box as={tag}>2 박스</Box>
      <Box as={tag}>3 박스</Box>
      <Box as={tag}>1 박스</Box>
      <Box as={tag}>2 박스</Box>
      <Box as={tag}>3 박스</Box>
    </>
  );
};

const meta = {
  title: 'Layout/Flex/FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
  args: {
    tag: 'ul',
    width: '100%',
    height: 24,
    justifyContent: 'center',
    alignContent: 'center',
    border: true,
    direction: 'row',
    nowrap: false,
    children: Boxes('li'),
  },
  argTypes: {
    ...flexBoxStyleArgTypes,
  },
} satisfies Meta<typeof FlexBox>;

export default meta;

const containerForStorybook = css`
  height: 100px;
  border: 2px solid #32affd;

  & > * {
    width: fit-content;
    height: 32px;
    padding: 0 16px;

    line-height: 32px;

    border: 2px solid #fb709f;
  }
`;

export const Default = ({ ...args }: FlexBoxProps) => {
  return <FlexBox tag="ul" {...args} css={containerForStorybook} />;
};

const layoutList = getTypedObjectKeys(LAYOUT);
const SubTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #035d95;
`;

export const Layout = () => {
  return (
    <>
      <SubTitle>➡️&nbsp; Direction: Row</SubTitle>
      <FlexBox tag="section" gap="28px 12px" mb={23}>
        {layoutList.map((layout, index) => {
          return (
            <div key={index}>
              <Text tag="h3" weight="regular" mb={4}>
                {layout}
              </Text>
              <FlexBox layout={layout} minWidth={20} css={containerForStorybook}>
                <p>Box</p>
                <p>Box</p>
              </FlexBox>
            </div>
          );
        })}
      </FlexBox>

      <SubTitle>⬇️&nbsp; Direction: Column</SubTitle>
      <FlexBox tag="section" gap="28px 12px" wrap>
        {layoutList.map((layout, index) => {
          return (
            <div key={index}>
              <Text tag="h3" weight="regular" mb={4}>
                {layout}
              </Text>
              <FlexBox layout={layout} direction="column" minWidth={20} css={containerForStorybook}>
                <p>Box</p>
                <p>Box</p>
              </FlexBox>
            </div>
          );
        })}
      </FlexBox>
    </>
  );
};

export const ExampleHeader = () => {
  return (
    <FlexBox
      tag="header"
      layout="centerLeft"
      columnGap={3}
      px={4}
      nowrap
      css={containerForStorybook}
    >
      <Text weight="bold" fontSize={1.6}>
        로고
      </Text>
      {Array.from({ length: 4 }, (_, index) => (
        <p key={index}>메뉴{index + 1}</p>
      ))}
      <FlexBox tag="button" type="button" aria-label="로그인" ml="auto">
        로그인
      </FlexBox>
    </FlexBox>
  );
};
