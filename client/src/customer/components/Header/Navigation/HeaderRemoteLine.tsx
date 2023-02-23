import styled from 'styled-components';

const HeaderRemoteLine = styled.button.attrs({ type: 'button' })`
  width: 100px;
  height: 72px;
  border: none;
  background: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
  &:after {
    content: '원격 줄서기';
    font-size: 16px;
    color: white;
  }
`;

export default HeaderRemoteLine;
