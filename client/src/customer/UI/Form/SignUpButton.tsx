import styled from 'styled-components';

const SignUpButton = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
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
    content: '회원가입';
  }

  &:hover {
    opacity: 1;
  }
`;

export default SignUpButton;
