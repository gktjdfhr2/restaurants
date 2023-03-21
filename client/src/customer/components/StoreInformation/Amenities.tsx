import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import styled from 'styled-components';

const AmenitiesContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const AmenityItemContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
`;

const AmenityItem = styled.div`
//TODO: 이미지 타이틀에 맞게 지정
  width: 200px;
  height: 200px;
  background: url(/src/assets/images/free-icon-sofa-333493.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 150px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  margin: 0 10px ;

  &:after {
    content: ${(props) => `'${props.title}'`};
    position: absolute;
    // top: 50%;
    // right: -30px;
    width: 200px;
    font-weight: bold;
    color: black;
    // right: 50%;
    text-align:center;

    transform: translate(0, 150px);
`;

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
  background-color: white;
  color: gray;
  &:hover {
    opacity: 1;
  }
`;
const Amenities = () => {
  return (
    <AmenitiesContainer>
      <TitleContainer>
        <StoreInformationTitle>편의시설</StoreInformationTitle>
        <MoreReviewButton>전체보기</MoreReviewButton>
      </TitleContainer>
      <AmenityItemContainer>
        <AmenityItem title="단체석 구비" />
        <AmenityItem title="테라스 테이블 제공" />
        <AmenityItem title="주차 이용 가능" />
      </AmenityItemContainer>
    </AmenitiesContainer>
  );
};

export default Amenities;
