import styled, { css } from 'styled-components';

import { addUnit } from '@utils/addUnit';

import { StyledBox, boxStyleArgTypes } from '@common/Box/Box.style';
import type { FlexBoxProps } from '@common/FlexBox/FlexBox';

import { spacing } from '@style/spacing';
import { borderRadius } from '@style/style';

import type { BorderRadiusDirectionType } from '@type/style';

export const FLEX_BOX_ITEM_POSITION = {
  start: 'start',
  center: 'center',
  end: 'end',
  between: 'space-between',
} as const;

export type StyledFlexBoxType = Omit<
  FlexBoxProps,
  'noRadius' | 'rowGap' | 'columnGap' | 'justifyContent' | 'alignItems' | 'alignContent'
> & {
  $noRadius?: BorderRadiusDirectionType;
  $rowGap?: number;
  $columnGap?: number;
  $justifyContent?: keyof typeof FLEX_BOX_ITEM_POSITION;
  $alignItems?: keyof typeof FLEX_BOX_ITEM_POSITION;
  $alignContent?: keyof typeof FLEX_BOX_ITEM_POSITION;
};

const getGap = ({ gap, rowGap, columnGap }: Pick<FlexBoxProps, 'gap' | 'rowGap' | 'columnGap'>) => {
  if (gap !== undefined) {
    return addUnit(gap, 4);
  }

  const row = rowGap !== undefined ? addUnit(rowGap, 4) : '0.4rem';
  const column = columnGap !== undefined ? addUnit(columnGap, 4) : '0.4rem';

  return `${row} ${column}`;
};

export const LAYOUT = {
  topLeft: {
    justify: 'start',
    align: 'start',
  },
  topCenter: {
    justify: 'center',
    align: 'start',
  },
  topRight: {
    justify: 'end',
    align: 'start',
  },
  centerLeft: {
    justify: 'start',
    align: 'center',
  },
  center: {
    justify: 'center',
    align: 'center',
  },
  centerRight: {
    justify: 'end',
    align: 'center',
  },
  bottomLeft: {
    justify: 'start',
    align: 'end',
  },
  bottomCenter: {
    justify: 'center',
    align: 'end',
  },
  bottomRight: {
    justify: 'end',
    align: 'end',
  },
} as const;
export type Layout = keyof typeof LAYOUT;

export const layoutStyle = ({
  direction,
  layout,
}: Required<Pick<FlexBoxProps, 'direction' | 'layout'>>) => css`
  ${layout &&
  `justify-content: ${direction === 'row' ? LAYOUT[layout].justify : LAYOUT[layout].align}`};
  ${layout &&
  `align-items: ${direction === 'row' ? LAYOUT[layout].align : LAYOUT[layout].justify}`};
`;

export const StyledFlexBox = styled(StyledBox)<StyledFlexBoxType>`
  ${spacing};

  flex-wrap: ${({ nowrap }) => (nowrap ? 'nowrap' : 'wrap')};
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  justify-content: ${({ $justifyContent }) => FLEX_BOX_ITEM_POSITION[$justifyContent]};
  align-items: ${({ $alignItems }) => FLEX_BOX_ITEM_POSITION[$alignItems]};
  align-content: ${({ $alignContent }) => FLEX_BOX_ITEM_POSITION[$alignContent]};
  gap: ${({ gap, $rowGap, $columnGap }) => getGap({ gap, rowGap: $rowGap, columnGap: $columnGap })};

  display: flex;
  font-size: 1.5rem;

  ${({ $noRadius }) => $noRadius && borderRadius($noRadius)};
  ${({ direction, layout }) => layoutStyle({ direction, layout })};

  ${({ css }) => css};
`;

// for Storybook
export const flexBoxStyleArgTypes = {
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
};
