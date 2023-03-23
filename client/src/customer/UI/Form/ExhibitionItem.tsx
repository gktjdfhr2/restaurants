import styled from 'styled-components';
import Button from '@customer/UI/Form/Button';
import GrayDIv from './GrayDIv';
import React from 'react';

const ResultItem = styled.div`
  display: flex;
  width: 100%;
  height: 124px;   
  justify-content: space-between;
  align-items: center;
  margin :20px 0;
}
`;

const StorePicture = styled.div`
  width: 124px;
  height: 124px;
  background: url(/src/assets/images/placeholder.png) no-repeat;
  background-size: contain;
`;

const StoreInformationContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;
const StoreTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
const StoreReviewContainer = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  margin: 5px 0;
`;

const ReviewScore = styled.span`
  height: 20px;
  width: 100%;
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

const CurrentScore = styled.span`
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  color: black;
`;

const ReservationButton = styled(Button)`
  width: 80px;
  height: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 180px;
  height: 40px;
  justify-content: space-between;
`;

const ExhibitionItem = (props: {
  title: string;
  score: number;
  countReview: number;
  condition: string;
  address: string;
  distance: number;
  reservation?: boolean;
  line?: boolean;
}) => {
  return (
    <ResultItem>
      <StorePicture />
      <StoreInformationContainer>
        <StoreTitle>{props.title}</StoreTitle>
        <StoreReviewContainer>
          <ReviewScore>
            <ScoreBackground>
              <CurrentScoreIcon score={props.score} />
            </ScoreBackground>
            <CurrentScore>
              {props.score} (
              {props.countReview > 300 ? `300 +` : props.countReview})
            </CurrentScore>
          </ReviewScore>
        </StoreReviewContainer>
        <GrayDIv>
          {props.condition} · {props.address} · {props.distance}km
        </GrayDIv>
        <ButtonContainer>
          {props.reservation && (
            <ReservationButton>예약 하기</ReservationButton>
          )}
          {props.line && <ReservationButton>줄서기</ReservationButton>}
        </ButtonContainer>
      </StoreInformationContainer>
    </ResultItem>
  );
};
export default React.memo(ExhibitionItem);
