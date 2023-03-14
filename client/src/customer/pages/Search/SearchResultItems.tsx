import styled from 'styled-components';
import Button from '@customer/UI/Form/Button';

const ResultItems = styled.div`
  display: flex;
  width: 100%;
  height: 124px;   
  justify-content: space-between;
  align-items: center;
  margin :20px 0;
}
`;

const StorePicture = styled.div`
  flex-grow: 0.3;
  width: initial;
  height: inherit;
  background: url(/src/assets/images/placeholder.png) no-repeat;
  background-size: contain;
`;

const StoreInformation = styled.div`
  flex-grow: 0.7;
`;
const StoreTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
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
const CurrentScoreIcon = styled.span`
  display: inline-block;
  height: 20px;
  width: 100%;
  //TODO:props로 점수 받아서 width % 결정
  background: url(/src/assets/images/rating_1.png) no-repeat;
  background-size: 100px 20px;
`;

const CurrentScore = styled.span`
  height: 20px;
  display: inline-block;
  vertical-align: middle;
`;

const ReservationButton = styled(Button)`
  width: 80px;
  height: 40px;
  margin-right: 20px;
`;

const Distance = styled.div`
  margin: 2px 0;
  color: gray;
`;

const SearchResultItems = () => {
  return (
    <ResultItems>
      <StorePicture />
      <StoreInformation>
        <StoreTitle>소우데스</StoreTitle>
        <StoreReviewContainer>
          <ReviewScore>
            <ScoreBackground>
              <CurrentScoreIcon />
            </ScoreBackground>
            <CurrentScore>4.9(300 +)</CurrentScore>
          </ReviewScore>
        </StoreReviewContainer>
        <Distance>일식 · 사직동 · 0.82km</Distance>
        <ReservationButton>예약 하기</ReservationButton>
        <ReservationButton>줄서기</ReservationButton>
      </StoreInformation>
    </ResultItems>
  );
};
export default SearchResultItems;
