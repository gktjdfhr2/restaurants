import styled from 'styled-components';

const HeaderSearch = styled.button.attrs({ type: 'button' })`
  width: 50px;
  height: 72px;
  background: url(/src/assets/images/magnifying-glass.png) no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 20px;
  border: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export default HeaderSearch;
