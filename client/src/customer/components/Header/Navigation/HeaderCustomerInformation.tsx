import styled from 'styled-components';

const HeaderCustomerInformation = styled.button.attrs({ type: 'button' })`
  width: 100px;
  height: 72px;
  border: none;
  background: none;

  &:after {
    content: '내정보';
    font-size: 16px;
    color: white;
  }
`;

export default HeaderCustomerInformation;
