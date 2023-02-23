import styled from 'styled-components';

const HeaderReservation = styled.button.attrs({ type: 'button' })`
  width: 100px;
  height: 72px;
  border: none;
  background: none;

  &:after {
    content: '즉시 예약';
    font-size: 16px;
    color: white;
  }
`;

export default HeaderReservation;
