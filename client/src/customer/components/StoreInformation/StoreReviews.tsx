import styled from 'styled-components';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import ReviewItem from '@customer/UI/Form/ReviewItem';
import { Link } from 'react-router-dom';
import React from 'react';

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
  background: none;
  color: gray;
  &:hover {
    opacity: 1;
  }
`;
interface Reviews {
  reivewBusinessId: number;
  reviewDetail: string;
  reviewId: number;
  reviewMemberEmail: string;
  reviewScore: number;
}
const StoreReviews = (props: { reviews: Reviews[] }) => {
  console.log('StoreReviews');
  return (
    <>
      <TitleContainer>
        <StoreInformationTitle>리뷰 22</StoreInformationTitle>
        <Link to="MoreReview">
          <MoreReviewButton>더보기</MoreReviewButton>
        </Link>
      </TitleContainer>
      {props.reviews.map((value: Reviews, index) => {
        return (
          <ReviewItem
            key={index}
            reviewScore={value.reviewScore}
            writer="하성록"
            timeStamp="10분전"
            reviewContent={value.reviewDetail}
            reviewPicture={[]}
          />
        );
      })}
    </>
  );
};

export default StoreReviews;
