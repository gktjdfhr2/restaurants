import styled from 'styled-components';
import ReviewScore from '@customer/UI/Form/ReviewScore';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';

const StoreReviewContainer = styled.div`
  width: 100%;
  height: 600px;
  border-bottom: 10px solid gainsboro;
`;

const TitleContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const MoreReviewButton = styled.button`
  font-size: 20px;
  border: none;
  opacity: 0.7;
  background-color: white;
  color: gray;
  &:hover {
    opacity: 1;
  }
`;
const ReviewContainer = styled.div`
  // border-top: 1px solid gainsboro;
  display:flex
  width: 100%;
  height: 520px;
  padding: 10px;
`;

const StoreReviews = () => {
  return (
    <StoreReviewContainer>
      <TitleContainer>
        <StoreInformationTitle>리뷰 22</StoreInformationTitle>
        <MoreReviewButton>더보기</MoreReviewButton>
      </TitleContainer>

      <ReviewContainer>
        //height 140px
        {/* <ReviewScore reviewScore={3.8} />
        왼쪽 오른쪽 나눠서 묶기
        <ReviewInformation>하성록 · 10분전</ReviewInformation> */}
        {/* <MenuPicture />
      TODO:reviewContainer flex로 만들어서 오른쪽에 4개까지 보여주기
      */}
      </ReviewContainer>
    </StoreReviewContainer>
  );
};

export default StoreReviews;
