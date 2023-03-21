import styled from 'styled-components';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import ReviewItem from '@customer/UI/Form/ReviewItem';

const StoreReviewContainer = styled.div`
  width: 100%;
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

const StoreReviews = () => {
  return (
    <StoreReviewContainer>
      <TitleContainer>
        <StoreInformationTitle>리뷰 22</StoreInformationTitle>
        <MoreReviewButton>더보기</MoreReviewButton>
      </TitleContainer>
      <ReviewItem
        reviewScore={3.7}
        writer="하성록"
        timeStamp="10분전"
        reviewContent="내용"
        reviewPicture={['1', '2', '3', '4']}
      />
      <ReviewItem
        reviewScore={3.7}
        writer="하성록"
        timeStamp="10분전"
        reviewContent="내용"
        reviewPicture={['1', '2', '3']}
      />
      <ReviewItem
        reviewScore={3.7}
        writer="하성록"
        timeStamp="10분전"
        reviewContent="내용"
        reviewPicture={[]}
      />
      <ReviewItem
        reviewScore={3.7}
        writer="하성록"
        timeStamp="10분전"
        reviewContent="내용"
        reviewPicture={['1']}
      />
    </StoreReviewContainer>
  );
};

export default StoreReviews;
