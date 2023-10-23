import styled, { css } from 'styled-components';

import { addUnit } from '@utils/addUnit';

import type { BoxProps } from '@common/Box/Box';

import { commonStyle, sizeArgTypes } from '@style/common';
import { spacing, spacingArgTypes } from '@style/spacing';

const addUnitForBorder = (borderProp: number | string) => {
  return typeof borderProp === 'number' ? `${borderProp}px` : borderProp;
};
const borderStyle = ({
  border,
  borderColor,
  borderWidth,
  borderRadius,
}: Pick<BoxProps, 'border' | 'borderColor' | 'borderWidth' | 'borderRadius'>) => css`
  ${border === true && `border: 0.1px solid #66666666; border-radius: 4px;`}

  ${typeof border !== 'boolean' && `border-${border}: 0.1px solid #66666666`};
  ${border === 'x' && `border-right: 0.1px solid #66666666; border-left: 0.1px solid #66666666;`}
  ${border === 'y' && `border-top: 0.1px solid #66666666; border-bottom: 0.1px solid #66666666;`}

  ${borderColor !== undefined && `border-color: ${borderColor}`};
  ${borderWidth !== undefined && `border-width: ${addUnitForBorder(borderWidth)}`};

  ${borderRadius !== undefined && `border-radius:  ${addUnitForBorder(borderRadius)}`};
`;

// for Storybook
export const borderArgTypes = {
  borderWidth: {
    control: {
      type: 'text',
    },
    description: `border 두께 변경 가능
    <br />- [string] 단위까지 적어줘야 함 (ex. 8px, 10px 20px)
    <br />  🔷 스토리북에서는 string 🔷
    <br />- [number] 숫자만 적을 경우 px로 자동 변환
    `,
  },
  borderRadius: {
    control: {
      type: 'text',
    },
    description: `border 곡률 변경 가능
    <br />- [string] 단위까지 적어줘야 함 (ex. 8px, 10px 20px)
    <br />  🔷 스토리북에서는 string 🔷
    <br />- [number] 숫자만 적을 경우 px로 자동 변환
    `,
  },
} as const;

export const boxStyleArgTypes = {
  position: {
    options: {
      none: false,
      static: 'static',
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
    },
    control: {
      type: 'select',
    },
    description: 'position을 설정합니다.',
  },
  top: {
    control: {
      type: 'text',
    },
    description: 'position과 함께 쓸 수 있습니다. 정수 * 0.4 rem 만큼의 길이가 설정됩니다.',
  },
  left: {
    control: {
      type: 'text',
    },
    description: 'position과 함께 쓸 수 있습니다. 정수 * 0.4 rem 만큼의 길이가 설정됩니다.',
  },
  bottom: {
    control: {
      type: 'text',
    },
    description: 'position과 함께 쓸 수 있습니다. 정수 * 0.4 rem 만큼의 길이가 설정됩니다.',
  },
  right: {
    control: {
      type: 'text',
    },
    description: 'position과 함께 쓸 수 있습니다. 정수 * 0.4 rem 만큼의 길이가 설정됩니다.',
  },
  tag: {
    control: {
      type: 'text',
    },
  },
  ...spacingArgTypes,
  ...sizeArgTypes,
  ...borderArgTypes,
};

export const StyledBox = styled.div<BoxProps>`
  ${spacing}

  ${({ border, borderColor, borderWidth, borderRadius }) =>
    borderStyle({ border, borderColor, borderWidth, borderRadius })}

    ${({ width, height, maxWidth, minWidth, maxHeight, minHeight, bgColor, color }) =>
    commonStyle({ width, height, maxWidth, minWidth, maxHeight, minHeight, bgColor, color })}

  ${({ position }) => position && `position: ${position}`};
  ${({ top }) => top !== undefined && `top: ${addUnit(top)}`};
  ${({ right }) => right !== undefined && `right: ${addUnit(right)}`};
  ${({ bottom }) => bottom !== undefined && `bottom: ${addUnit(bottom)}`};
  ${({ left }) => left !== undefined && `left: ${addUnit(left)}`};

  ${({ css }) => css};
`;

export const ALIGNMENT = {
  left: '0',
  center: '0 auto',
  right: '0 0 0 auto',
};
export type Alignment = keyof typeof ALIGNMENT;
