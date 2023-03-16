import styled from 'styled-components';
import PageTitle from '@customer/UI/Form/PageTitle';
import ExhibitionItems from '@customer/UI/Form/ExhibitionItems';

const RecommendContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const Title = styled(PageTitle)`
  margin: 40px 0;
  text-align: left;
`;

const RecommendType = styled.select`
  width: 80px;
  height: 40px;
  padding: 0 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const RecommendRestaurants = () => {
  return (
    <RecommendContainer>
      <TitleContainer>
        <Title>맛집지도 추천 맛집!</Title>
        <RecommendType defaultValue="recommend">
          <option value="recommend">추천순</option>
          <option value="distance">거리순</option>
        </RecommendType>
      </TitleContainer>
      <ExhibitionItems
        title="소우데스"
        score={3.9}
        countReview={303}
        condition="일식"
        address="사직동"
        distance={0.98}
        reservation={true}
        line={true}
      />
    </RecommendContainer>
  );
};

export default RecommendRestaurants;
