import styled from 'styled-components';

/** props password를 주면 password type으로 사용 가능 */
const TextInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
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

export default TextInput;
