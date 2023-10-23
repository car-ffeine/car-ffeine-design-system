import type { CSSProp } from 'styled-components';

import type { ComponentPropsWithoutRef, MouseEventHandler, PropsWithChildren } from 'react';

import type { CommonStyleProps } from '@style/common';
import type { SpacingProps } from '@style/spacing';

import type { BorderRadiusDirectionType } from '@type/style';

import type { BUTTON_PADDING_SIZE } from './Button.style';
import { StyledButton } from './Button.style';

export type VariantType = 'pill' | 'label' | 'contained' | 'outlined';

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    PropsWithChildren,
    SpacingProps,
    CommonStyleProps {
  variant?: VariantType;
  noRadius?: BorderRadiusDirectionType;
  shadow?: boolean;
  size?: keyof typeof BUTTON_PADDING_SIZE;
  outlined?: boolean;
  background?: string;
  hover?: boolean;
  css?: CSSProp;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, noRadius, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" $noRadius={noRadius} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
