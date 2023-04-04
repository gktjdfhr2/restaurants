import styled from 'styled-components';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import GrayDIv from '@customer/UI/Form/GrayDIv';
import React from 'react';

const OperatingTimeContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const GraySpan = styled.span`
  color: gray;
`;

const AlignDiv = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  width: 240px;
  font-size: 20px;
  margin: 20px 0;
`;

const AlignSpan = styled.span`
  width: 140px;
  text-align: center;
`;

const StoreIntroductions = styled.div`
  padding: 20px 0;
  white-space: pre-line;
`;
interface Operating {
  businessOpenTime: string;
  businessClosedTime: string;
  businessBreakTime: string;
}
const OperatingTime = React.forwardRef((props: Operating, infoRef: any) => {
  //TODO: 정보 props로 받아와서 뿌려주기
  return (
    <OperatingTimeContainer ref={infoRef}>
      <StoreInformationTitle>영업정보</StoreInformationTitle>
      <AlignDiv>
        <GraySpan>운영시간</GraySpan>
        <AlignSpan>
          {props.businessOpenTime} ~ {props.businessClosedTime}
        </AlignSpan>
      </AlignDiv>
      <AlignDiv>
        <GraySpan>휴식시간</GraySpan>
        <AlignSpan>
          {props.businessBreakTime === '' ? props.businessBreakTime : '-'}
        </AlignSpan>
      </AlignDiv>
      <AlignDiv>
        <GraySpan>휴무일</GraySpan>
        <AlignSpan>TODO</AlignSpan>
      </AlignDiv>
      <AlignDiv>
        <GraySpan>전화번호</GraySpan>
        <AlignSpan style={{ textDecoration: 'underline' }}>TODO</AlignSpan>
      </AlignDiv>

      <StoreInformationTitle style={{ marginTop: '40px' }}>
        매장소개
      </StoreInformationTitle>
      <StoreIntroductions>TODO</StoreIntroductions>
    </OperatingTimeContainer>
  );
});

export default OperatingTime;
