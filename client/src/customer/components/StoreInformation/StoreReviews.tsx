import styled from 'styled-components';

const StoreReviewContainer = styled.div`
  width: 100%;
  height: 600px;
  border-bottom: 10px solid gainsboro;
`;

const TitleContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
`;

const PageTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const MoreMenuButton = styled.button`
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
        <PageTitle>리뷰 22</PageTitle>
        <MoreMenuButton>더보기</MoreMenuButton>
      </TitleContainer>
    </StoreReviewContainer>
  );
};

export default StoreReviews;
