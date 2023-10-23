import styled from 'styled-components';

import { useState } from 'react';

import Text from '@common/Text';

import SelectBox from './SelectBox';

const meta = {
  title: 'Components/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

const Container = styled.div`
  width: 300px;
  height: 1000px;
  margin: 20px auto;
`;

const options = [
  { value: '첫 번째', label: '사과' },
  { value: '두 번째', label: '포도' },
  { value: '세 번째', label: '바나나' },
];

export const Default = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <Container>
      <Text>selectedValue: {selectedValue}</Text>
      <SelectBox options={options} onChange={handleSelectChange} value={selectedValue} />
    </Container>
  );
};
