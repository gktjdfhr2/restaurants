import styled, { css } from 'styled-components';
import Button from '@customer/UI/Form/Button';

/** selectFilter로 선택 유무 확인 */
const ToggleMenuButton = styled(Button)<{ selectFilter: boolean }>`
  width: auto;
  height: 40px;
  background-color: white;

  border-radius: 0;
  color: black;
  padding: 0 20px;
  font-weight: normal;
  ${(props) =>
    props.selectFilter &&
    css`
      border-bottom: 1px solid black;
      font-weight: bold;
    `};
`;
export default ToggleMenuButton;
