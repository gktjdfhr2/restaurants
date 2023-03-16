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
  width: 124px;
  height: 124px;
  background: url(/src/assets/images/placeholder.png) no-repeat;
  background-size: contain;
`;

const StoreInformation = styled.div`
  margin-left: 20px;
  flex-grow: 1;
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

const ExhibitionItems = (props: {
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
    <ResultItems>
      <StorePicture />
      <StoreInformation>
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
        <Distance>
          {props.condition} · {props.address} · {props.distance}km
        </Distance>
        {props.reservation && <ReservationButton>예약 하기</ReservationButton>}
        {props.line && <ReservationButton>줄서기</ReservationButton>}
      </StoreInformation>
    </ResultItems>
  );
};
export default ExhibitionItems;
