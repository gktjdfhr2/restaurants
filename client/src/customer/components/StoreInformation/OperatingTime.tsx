import styled from 'styled-components';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import GrayDIv from '@customer/UI/Form/GrayDIv';

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

const OperatingTime = () => {
  //TODO: 정보 props로 받아와서 뿌려주기
  return (
    <OperatingTimeContainer>
      <StoreInformationTitle>영업정보</StoreInformationTitle>
      <AlignDiv>
        <GraySpan>운영시간</GraySpan>
        <AlignSpan>10:00 ~ 21:00</AlignSpan>
      </AlignDiv>
      <AlignDiv>
        <GraySpan>휴식시간</GraySpan>
        <AlignSpan>-</AlignSpan>
      </AlignDiv>
      <AlignDiv>
        <GraySpan>휴무일</GraySpan>
        <AlignSpan>매주 월요일</AlignSpan>
      </AlignDiv>
      <AlignDiv>
        <GraySpan>전화번호</GraySpan>
        <AlignSpan style={{ textDecoration: 'underline' }}>
          01012345678
        </AlignSpan>
      </AlignDiv>

      <StoreInformationTitle style={{ marginTop: '40px' }}>
        매장소개
      </StoreInformationTitle>
      <StoreIntroductions>
        소우데스는 주인장이 일본 오사카에서 풍부한 경험의 노하우를 밑바탕으로
        본토의 맛을 재현해내기 위해 모든 소스 종류를 수작업으로 만들고
        있습니다^^
      </StoreIntroductions>
    </OperatingTimeContainer>
  );
};

export default OperatingTime;
