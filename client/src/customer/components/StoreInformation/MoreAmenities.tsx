import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import StorePrevButton from '@customer/UI/Form/StorePrevButton';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';

const StoreAmenitiesContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const Amenity = styled.div`
  width: 200px;
  height: 100px;

  background: url(/src/assets/images/free-icon-sofa-333493.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: 100px;

  &:after {
    content: ${(props) => `'${props.title}'`};
    width: 200px;
    height: 100px;
    font-weight: bold;
    color: black;
    text-align: right;
    transform: translate(0, 0);
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const AmenitiesContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
`;

const MoreAmenities = () => {
  const navigation = useNavigate();
  return (
    <MediumContainer>
      <StorePrevButton onClick={() => navigation(-1)}>
        &lt; 전체 편의시설
      </StorePrevButton>
      <StoreAmenitiesContainer>
        <AmenitiesContainer>
          <StoreInformationTitle>제공되는 편의시설</StoreInformationTitle>
          <Amenity title="단체석 구비" />
          <Amenity title="단체석 구비" />
          <Amenity title="단체석 구비" />
          <Amenity title="단체석 구비" />
        </AmenitiesContainer>
        <AmenitiesContainer>
          <StoreInformationTitle>매장에 없는 시설</StoreInformationTitle>
          <Amenity title="단체석 구비" />
          <Amenity title="단체석 구비" />
          <Amenity title="단체석 구비" />
          <Amenity title="단체석 구비" />
          <Amenity title="단체석 구비" />
        </AmenitiesContainer>
      </StoreAmenitiesContainer>
    </MediumContainer>
  );
};

export default MoreAmenities;
