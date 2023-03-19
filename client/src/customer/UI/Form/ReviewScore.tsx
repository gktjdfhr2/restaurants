import styled from 'styled-components';

const StoreReviewContainer = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  margin: 5px 0;
`;

const ReviewScoreContainer = styled.span`
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

const ReviewScore = (props: { reviewScore: number }) => {
  return (
    <StoreReviewContainer>
      <ReviewScoreContainer>
        <ScoreBackground>
          <CurrentScoreIcon score={props.reviewScore} />
        </ScoreBackground>
        <CurrentScore>{props.reviewScore}</CurrentScore>
      </ReviewScoreContainer>
    </StoreReviewContainer>
  );
};

export default ReviewScore;
