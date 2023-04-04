import styled from 'styled-components';
import MenuItem from '@customer/UI/Form/MenuItem';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import StorePrevButton from '@customer/UI/Form/StorePrevButton';
import { useNavigate } from 'react-router-dom';
import ReviewItem from '@customer/UI/Form/ReviewItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StoreReviewContainer = styled.div`
  width: 100%;
`;

const ReviewScoreContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 10px solid gainsboro;
  padding-bottom: 10px;
`;

const TitleContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PictureReview = styled.input`
  font-size: 20px;
`;
const ShowSelect = styled.select`
  border: none;
  font-size: 16px;
`;
const ScoreBackground = styled.span`
  display: inline-block;
  height: 20px;
  width: 100px;
  background: url(/src/assets/images/rating_0.png) no-repeat;
  background-size: contain;
`;
const CurrentScoreIcon = styled.span<{ score: number }>`
  display: inline-block;
  height: 20px;
  width: ${(props) => props.score * 20}%;

  background: url(/src/assets/images/rating_1.png) no-repeat;
  background-size: 100px 20px;
`;
const CurrentScore = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
interface Reviews {
  reivewBusinessId: number;
  reviewDetail: string;
  reviewId: number;
  reviewMemberEmail: string;
  reviewScore: number;
}

const MoreReview = () => {
  const navigation = useNavigate();
  const storeInformation = useParams();
  const [reviews, setReviews] = useState<Array<Reviews>>([]);

  useEffect(() => {
    console.log('id:', storeInformation.storeId);
    axios
      .get(`http://localhost:8080/api/member/store/${storeInformation.storeId}`)
      .then((response) => {
        console.log('response:', response);
        setReviews(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('review', storeInformation);
  return (
    <MediumContainer>
      <StorePrevButton onClick={() => navigation(-1)}>
        &lt; 리뷰 22
      </StorePrevButton>
      <ReviewScoreContainer>
        <div>전체 평점</div>
        <CurrentScore>3.6</CurrentScore>
        <ScoreBackground>
          <CurrentScoreIcon score={3.6} />
        </ScoreBackground>
      </ReviewScoreContainer>
      <TitleContainer>
        <StoreInformationTitle>리뷰 22</StoreInformationTitle>
        <ButtonContainer>
          <PictureReview type="checkbox" />
          <span>사진 리뷰만 보기</span>&nbsp;&nbsp; | &nbsp;&nbsp;
          <ShowSelect defaultValue="recommend">
            <option value="recommend">추천순</option>
            <option value="distance">거리순</option>
          </ShowSelect>
        </ButtonContainer>
      </TitleContainer>
      <StoreReviewContainer>
        {/* {reviews.map((value, index) => {
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
        })} */}

        {/* <ReviewItem
          reviewScore={3.0}
          writer="하성록"
          timeStamp="10분전"
          reviewContent="내용"
          reviewPicture={['1', '2', '3', '4']}
        />
        <ReviewItem
          reviewScore={4.5}
          writer="하성록"
          timeStamp="10분전"
          reviewContent="내용"
          reviewPicture={['1', '2', '3']}
        />
        <ReviewItem
          reviewScore={3.0}
          writer="하성록"
          timeStamp="10분전"
          reviewContent="내용"
          reviewPicture={[]}
        />
        <ReviewItem
          reviewScore={3.5}
          writer="하성록"
          timeStamp="10분전"
          reviewContent="내용"
          reviewPicture={['1']}
        /> */}
      </StoreReviewContainer>
    </MediumContainer>
  );
};

export default MoreReview;
