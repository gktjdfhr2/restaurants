import styled from 'styled-components';

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
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
  flex-grow: 0.2;
  width: initial;
  height: inherit;
  background: url(/src/assets/images/placeholder.png) no-repeat;
  background-size: contain;
`;

const StoreInformation = styled.div`
  flex-grow: 0.8;
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
  background-color: gray;
`;

const ReviewScore = styled.div`
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
const CurrentScore = styled.span`
  display: inline-block;
  height: 20px;
  width: 100%;
  //TODO:props로 점수 받아서 width % 결정
  background: url(/src/assets/images/rating_1.png) no-repeat;
  background-size: 100px 20px;
`;

const TotalScore = styled.span`
  height: 20px;
  display: inline-block;
`;

const SearchResult = () => {
  return (
    <ResultContainer>
      <ResultItems>
        <StorePicture />
        <StoreInformation>
          <StoreTitle>소우데스</StoreTitle>
          <StoreReviewContainer>
            <ReviewScore>
              <ScoreBackground>
                <CurrentScore />
              </ScoreBackground>
              <TotalScore>123</TotalScore>
            </ReviewScore>
          </StoreReviewContainer>
        </StoreInformation>
      </ResultItems>
    </ResultContainer>
  );
};
export default SearchResult;
