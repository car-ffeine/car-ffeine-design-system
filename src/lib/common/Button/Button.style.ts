import styled, { css } from 'styled-components';

import type { ButtonProps } from '@common/Button/Button';

import { commonStyle } from '@style/common';
import { spacing } from '@style/spacing';
import { borderRadius, pillStyle } from '@style/style';

import type { BorderRadiusDirectionType } from '@type/style';

export const BUTTON_PADDING_SIZE = {
  xs: '0.3rem 0.8rem 0.4rem',
  sm: '0.7rem 1.2rem 0.8rem',
  md: '1.1rem 3.2rem 1.2rem',
  lg: '1.7rem 4rem 1.8rem',
  xl: '2.1rem 4.8rem 2.2rem',
} as const;

export const BUTTON_FONT_SIZE = {
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.2rem',
} as const;

export type StyledButtonType = Omit<ButtonProps, 'noRadius'> & {
  $noRadius: BorderRadiusDirectionType;
};

export const StyledButton = styled.button<StyledButtonType>`
  ${({ width, height, maxWidth, minWidth, maxHeight, minHeight, bgColor, color }) =>
    commonStyle({ width, height, maxWidth, minWidth, maxHeight, minHeight, bgColor, color })}

  padding: ${({ size }) => BUTTON_PADDING_SIZE[size] || 0};
  background: ${({ background }) => background || '#fff'};
  border: ${({ outlined }) => (outlined ? '0.15rem solid #000' : 'none')};
  ${({ size }) => `font-size: ${BUTTON_FONT_SIZE[size]}`};
  box-shadow: ${({ shadow }) => `${shadow ? '0 0.3rem 0.8rem 0 gray' : 'none'}`};

  cursor: pointer;
  border-radius: 1.2rem;
  text-align: center;

  ${spacing}

  ${({ $noRadius }) => $noRadius && borderRadius($noRadius)};
  ${({ variant }) => {
    switch (variant) {
      case 'pill':
        return pillStyle;
      case 'label':
        return labelButtonStyle;
      case 'contained':
        return containedButtonStyle;
      case 'outlined':
        return outlinedButtonStyle;
      default:
        return;
    }
  }};

  &:hover {
    ${({ hover }) => hover && 'font-weight: 500'};
  }

  ${({ css }) => css};
`;

const labelButtonStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.2rem;
  right: -3.68rem;
  height: 7.6rem;
  padding: 0 0.6rem 0 0.4rem;
  background: #fcfcfc;
  border: 2.2px solid #e1e4eb;
  border-left: 0.2px solid #e1e4eb;

  ${borderRadius('left')}
`;

const containedButtonStyle = css`
  width: 100%;
  padding: 0.4rem 0;
  text-align: center;
  color: #fff;
  background: #3e5ab6;
  font-size: 1.4rem;
  border: 1.4px solid #3e5ab6;
  border-radius: 4px;
`;

const outlinedButtonStyle = css`
  ${containedButtonStyle}

  background: #fff;
  color: #3e5ab6;
`;
