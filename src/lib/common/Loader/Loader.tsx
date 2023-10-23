import type { CSSProp } from 'styled-components';

import type { Size } from '@type/style';

import { StyledLoader } from './Loader.style';

export interface LoaderProps {
  /** 로더 크기 변경 가능 */
  size?: Size | string;
  /** 로더 두께 변경 가능 */
  border?: number;
  /** 로더 색깔 변경 가능 */
  color?: string;
  css?: CSSProp;
}

const Loader = ({ size, border, color, css }: LoaderProps) => {
  return <StyledLoader size={size} border={border} color={color} css={css} />;
};

export default Loader;
