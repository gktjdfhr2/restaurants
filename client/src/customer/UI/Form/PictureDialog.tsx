import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import ResetButton from './ResetButton';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);

  div {
    opacity: 1;
  }
`;

const DialogBlock = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  padding: 1.5rem;
  border-radius: 10px;
  background: url(/src/assets/images/placeholder.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px;
  opacity: 1;
  border: 1px solid gainsboro;
`;

const CloseButton = styled(ResetButton)`
  top: 18px;
`;

const PictureDialog = (props: { onClick: MouseEventHandler }) => {
  //TODO: 이미지도 props로 받아서 background url에 지정
  return (
    <DarkBackground>
      <DialogBlock>
        <CloseButton onClick={props.onClick} />
      </DialogBlock>
    </DarkBackground>
  );
};

export default PictureDialog;
