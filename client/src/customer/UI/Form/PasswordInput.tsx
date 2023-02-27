import styled from 'styled-components';

//TODO: textInput상속으로 변경

const PasswordInput = styled.input.attrs({
  type: 'password',
})`
  width: 300px;
  height: 46px;
  border: var(--inputBorder);
  border-radius: var(--inputBorderRadius);
  padding: var(--inputPadding);
  font-size: 14px;
  color: var(--inputColor);
  outline: none;

  position: relative;

  &:focus {
    border-color: var(--inputFocusColor);
  }
`;

export default PasswordInput;
