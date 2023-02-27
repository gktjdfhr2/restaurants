import styled from 'styled-components';

const SignInButton = styled.button.attrs({
  type: 'button',
})`
  width: 300px;
  height: 46px;
  border: none;
  border-radius: var(--inputBorderRadius);
  padding: var(--inputPadding);
  font-size: 14px;
  color: white;
  outline: none;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  background-color: var(--signature);
  opacity: 0.8;

  &:before {
    content: '로그인';
  }

  &:hover {
    opacity: 1;
  }
`;

export default SignInButton;
