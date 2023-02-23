import styled from 'styled-components';

const HeaderReservation = styled.button.attrs({ type: 'button' })`
  width: 100px;
  height: 72px;
  border: none;
  background: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &:after {
    content: '즉시 예약';
    font-size: 16px;
    color: white;
  }
`;

export default HeaderReservation;
