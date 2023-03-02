import styled from 'styled-components';

const HistoryInformation = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  opacity: 0.5;
  color: black;

  &:before {
    content: ${(props) => `'${props.title || ''}'`};
    display: flex;
    align-items: center;
    width: max-content;
    height: 100%;
    font-size: 30px;
    color: black;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default HistoryInformation;
