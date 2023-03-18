import styled from 'styled-components';

const InformationContainer = styled.div`
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

const Distance = styled.div`
  margin: 2px 0;
  color: gray;
`;

const StoreMoreInformation = (props: {
  storeName: string;
  storeAddress: string;
  reviewScore: number;
}) => {
  return (
    <InformationContainer>
      <StoreTitle>{props.storeName}</StoreTitle>
      <Distance>{props.storeAddress}</Distance>
      <StoreReviewContainer>
        <ReviewScore>
          <ScoreBackground>
            <CurrentScoreIcon score={props.reviewScore} />
          </ScoreBackground>
          <CurrentScore>{props.reviewScore}</CurrentScore>
        </ReviewScore>
      </StoreReviewContainer>
    </InformationContainer>
  );
};

export default StoreMoreInformation;
