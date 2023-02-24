import styled from 'styled-components';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  width: 300px;
  height: 36px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  outline: none;
  text-align: center;

  &:focus {
    border-color: #333;
  }
`;

export default TextInput;
