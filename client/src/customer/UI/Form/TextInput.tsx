import styled from 'styled-components';

const TextInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  width: 100%;
  height: 46px;
  border: none;
  border: 1px solid black;
  border-radius: var(--inputBorderRadius);
  padding: var(--inputPadding);
  font-size: 14px;
  color: var(--inputColor);
  outline: none;

  position: relative;

  &:focus {
    border: 2px solid var(--signature);
    transition: all 0.1s ease-in-out;
  }
`;

export default TextInput;
