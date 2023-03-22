import styled from 'styled-components';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import ReviewItem from '@customer/UI/Form/ReviewItem';
import { Link } from 'react-router-dom';
import React from 'react';

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

const StoreReviews = React.forwardRef((props, reviewRef: any) => {
  //TODO: 정보 props로 받아와서 뿌려주기
  console.log('StoreReviews');
  return (
    <StoreReviewContainer ref={reviewRef}>
      <TitleContainer>
        <StoreInformationTitle>리뷰 22</StoreInformationTitle>
        <Link to="MoreReview">
          <MoreReviewButton>더보기</MoreReviewButton>
        </Link>
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
});

export default StoreReviews;
