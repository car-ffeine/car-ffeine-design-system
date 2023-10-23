import Box from '@common/Box';
import Button from '@common/Button';
import FlexBox from '@common/FlexBox';
import type { FlexBoxProps } from '@common/FlexBox/FlexBox';
import Text from '@common/Text';

export interface ErrorProps extends Partial<FlexBoxProps> {
  /** 에러 컴포넌트의 전체적인 폰트 사이즈 조절 가능 */
  fontSize?: number | string;
  /** 에러 컴포넌트의 타이틀 */
  title: string;
  /** 에러 컴포넌트의 메시지
   * @example 예상하지 못한 오류가 발생했습니다
   */
  message: string;
  /** 에러 컴포넌트의 보조 메시지
   * @example 다시 시도해 주세요
   */
  subMessage?: string;
  handleRetry?: () => void;
}

const Error = ({ title, message, subMessage, handleRetry, fontSize, ...props }: ErrorProps) => {
  return (
    <FlexBox
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      {...props}
      css={{
        fontSize: typeof fontSize === 'string' ? fontSize : `${fontSize}rem`,
      }}
    >
      <Box css={{ wordBreak: 'keep-all' }}>
        <Text align="center" weight="bold" css={{ fontSize: '10em' }} mb={7}>
          {title}
        </Text>
        <Text align="center" mb={1}>
          {message}
        </Text>
        <Text align="center">{subMessage}</Text>
        <FlexBox justifyContent="center">
          <Button
            aria-label="다시 시도하기"
            onClick={handleRetry}
            variant="outlined"
            color="dark"
            size="xs"
            mt={6}
            mb={8}
            py={1}
          >
            다시 시도하기
          </Button>
        </FlexBox>
      </Box>
    </FlexBox>
  );
};

export default Error;
