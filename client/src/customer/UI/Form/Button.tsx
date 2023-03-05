import styled from 'styled-components';

/** title 지정 필요 */
const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
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
    content: ${(props) => `'${props.title || ''}'`};
  }

  &:hover {
    opacity: 1;
  }
`;

export default Button;
