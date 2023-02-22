import styled from 'styled-components';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  outline: none;

  &:focus {
    border-color: #333;
  }
`;

export default TextInput;
