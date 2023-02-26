import styled from 'styled-components';

const PasswordInput = styled.input.attrs({
  type: 'password',
})`
  width: 300px;
  height: 36px;
  border: var(--inputBorder);
  border-radius: var(--inputBorderRadius);
  padding: var(--inputPadding);
  font-size: 14px;
  color: var(--inputColor);
  outline: none;
  text-align: center;

  position: relative;

  &:focus {
    border-color: var(--inputFocusColor);
  }
`;

export default PasswordInput;
