import type { Meta } from '@storybook/react';
import styled, { css } from 'styled-components';

import { getTypedObjectKeys } from '@utils/getTypedObjectKeys';

import Box from '@common/Box';
import { LAYOUT } from '@common/FlexBox/FlexBox.style';
import Text from '@common/Text';

import type { FlexBoxProps } from './FlexBox';
import FlexBox from './FlexBox';
import { boxStyleArgTypes } from '@common/Box/Box.style';

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
    tag: {
      description: '태그명(ex. ul, section)을 입력해 플렉스 박스의 태그를 바꿀 수 있습니다.',
    },
    width: {
      description:
        '숫자를 입력하면 `입력한 숫자`rem 만큼 플렉스 박스 너비가 늘어납니다.<br> 단위를 포함해 문자(ex. "100%")로 입력하면 원하는 만큼 플렉스 박스 너비가 늘어납니다.',
    },
    height: {
      description:
        '숫자를 입력하면 `입력한 숫자`rem 만큼 플렉스 박스 높이가 늘어납니다.<br> 단위를 포함해 문자(ex. "100%")로 입력하면 원하는 만큼 플렉스 박스 높이가 늘어납니다.',
    },
    justifyContent: {
      options: Object.keys({ ...LAYOUT, none: undefined }),
      control: {
        type: 'select',
      },
      description:
        '플렉스 박스 안에 있는 아이템의 위치를 조절할 수 있습니다.<br>- direction이 row일 경우: 수평을 기준으로 아이템이 이동합니다.<br>- direction이 column일 경우: 수직을 기준으로 아이템이 이동합니다.',
    },
    alignContent: {
      options: Object.keys({ ...LAYOUT, none: undefined }),
      control: {
        type: 'select',
      },
      description:
        '플렉스 박스 안에 있는 아이템의 위치를 조절할 수 있습니다.<br>- direction이 row일 경우: 수직을 기준으로 아이템이 이동합니다.<br>- direction이 column일 경우: 수평을 기준으로 아이템이 이동합니다.<br> ❗`wrap`(noWrap이 false)일 때만 사용 가능합니다.',
    },
    alignItems: {
      options: Object.keys({ ...LAYOUT, none: undefined }),
      control: {
        type: 'select',
      },
      description:
        '플렉스 박스 안에 있는 아이템의 위치를 조절할 수 있습니다.<br>- direction이 row일 경우: 수직을 기준으로 아이템이 이동합니다.<br>- direction이 column일 경우: 수평을 기준으로 아이템이 이동합니다.',
    },
    noRadius: {
      options: { none: false, all: 'all', top: 'top', bottom: 'bottom' },
      control: {
        type: 'select',
      },
      description: '특정 방향의 radius 속성을 제거할 수 있습니다.',
    },
    border: {
      control: {
        type: 'boolean',
      },
      description: 'true: 플렉스 박스에 검은색 테두리가 생깁니다.',
    },
    background: {
      control: {
        type: 'color',
      },
      description: '선택한 색상에 따라 플렉스 박스의 배경색이 변합니다.',
    },
    direction: {
      description: `row: 플렉스 박스 안 아이템이 수직 방향으로 정렬됩니다. 기본값입니다.<br>column: 플렉스 박스 안 아이템이 수직 방향으로 정렬됩니다.`,
    },
    nowrap: {
      description:
        'true: 플렉스 박스, 아이템 크기에 상관없이 무조건 한 줄로 정렬합니다. 아이템의 width, height가 정해져 있지 않다면 플렉스 박스의 크기만큼 늘어납니다.',
    },
    gap: {
      control: {
        type: 'text',
      },
      description:
        '숫자를 입력해 플렉스 박스 안 아이템 간의 간격을 조절할 수 있습니다. `입력한 숫자 x 4px` 만큼 간격이 늘어납니다.',
    },
    rowGap: {
      control: {
        type: 'text',
      },
      description:
        '숫자를 입력해 플렉스 박스 안 아이템 간의 행 높이를 조절할 수 있습니다. `입력한 숫자 x 4px` 만큼 간격이 늘어납니다.<br>❗gap이 적용되어 있으면(undefined가 아니면) row gap은 적용되지 않습니다.',
    },
    columnGap: {
      control: {
        type: 'text',
      },
      description:
        '숫자를 입력해 플렉스 박스 안 아이템 간의 열 너비를 조절할 수 있습니다. `입력한 숫자 x 4px` 만큼 간격이 늘어납니다.<br>❗gap이 적용되어 있으면(undefined가 아니면) column gap은 적용되지 않습니다.',
    },
    children: {
      table: {
        disable: true,
      },
    },
    css: {
      description: '원하는 css를 적용할 수 있습니다.',
    },
    ...boxStyleArgTypes,
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
