import styled from 'styled-components';

const HeaderNavigationButton = styled.button.attrs({ type: 'button' })`
  width: 80px;
  height: 72px;
  border: none;
  background: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &:after {
    content: ${(props) => `'${props.title || ''}'`};
    font-size: 16px;
    color: white;
  }
`;

export default HeaderNavigationButton;
