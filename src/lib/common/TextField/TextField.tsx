import type { CSSProp } from 'styled-components';

import type { ChangeEvent, HTMLAttributes } from 'react';

import { StyledGroup, StyledHelperText, StyledInput, StyledLabel } from './TextField.style';

export interface TextFieldProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  width?: number;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  supportingText?: string;
  fullWidth?: boolean;
  cssForLabel?: CSSProp;
  cssForInput?: CSSProp;
}

const TextField = ({
  label,
  value,
  onChange,
  supportingText,
  fullWidth,
  ...props
}: TextFieldProps) => {
  return (
    <StyledGroup>
      <StyledInput
        type="text"
        required
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        {...props}
      />
      <StyledLabel {...props}>{label}</StyledLabel>
      {supportingText && <StyledHelperText>{supportingText}</StyledHelperText>}
    </StyledGroup>
  );
};

export default TextField;
