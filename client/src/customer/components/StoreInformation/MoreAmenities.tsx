import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import StorePrevButton from '@customer/UI/Form/StorePrevButton';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';

const StoreAmenitiesContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const AmenityItem = styled.div<{ AmenityItem: number }>`
  //TODO: 이미지 타이틀에 맞게 지정
  width: 200px;
  height: 200px;
  ${(props) => {
    switch (props.AmenityItem) {
      case 1:
        return css`
          background: url(/src/assets/images/free-icon-sofa-333493.png);
        `;

      case 2:
        return css`
          background: url(/src/assets/images/free-icon-wifi-signal-640708.png);
        `;

      case 3:
        return css`
          background: url(/src/assets/images/parked-car.png);
        `;

      case 4:
        return css`
          background: url(/src/assets/images/dog.png);
        `;

      case 5:
        return css`
          background: url(/src/assets/images/playtime.png);
        `;

      case 6:
        return css`
          background: url(/src/assets/images/toilet.png);
        `;

      case 7:
        return css`
          background: url(/src/assets/images/chairs.png);
        `;
    }
  }}

  background-repeat: no-repeat;
  background-position: top;
  background-size: 150px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  margin: 0 10px;

  &:after {
    ${(props) => {
      switch (props.AmenityItem) {
        case 1:
          return css`
            content: '단체석 구비';
          `;
        case 2:
          return css`
            content: '무선 인터넷';
          `;
        case 3:
          return css`
            content: '주차 이용가능';
          `;
        case 4:
          return css`
            content: '반려동물 입장가능';
          `;
        case 5:
          return css`
            content: '유아 놀이방';
          `;
        case 6:
          return css`
            content: '남녀 화장실 구분';
          `;
        case 7:
          return css`
            content: '테라스 테이블 제공';
          `;
      }
    }};

    display: block;
    width: 200px;
    font-weight: bold;
    color: black;

    text-align: center;

    transform: translate(0, 160px);
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
          <AmenityItem AmenityItem={1} />
          <AmenityItem AmenityItem={2} />
          <AmenityItem AmenityItem={3} />
          <AmenityItem AmenityItem={4} />
        </AmenitiesContainer>
        <AmenitiesContainer>
          <StoreInformationTitle>매장에 없는 시설</StoreInformationTitle>
          <AmenityItem AmenityItem={5} />
          <AmenityItem AmenityItem={6} />
          <AmenityItem AmenityItem={7} />
        </AmenitiesContainer>
      </StoreAmenitiesContainer>
    </MediumContainer>
  );
};

export default MoreAmenities;
