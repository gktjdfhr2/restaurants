import styled from 'styled-components';
import ReviewScore from '@customer/UI/Form/ReviewScore';
import GrayDIv from '@customer/UI/Form/GrayDIv';

const ReviewContainer = styled.div`
  // border-top: 1px solid gainsboro;

  display: flex;
  justify-content: space-between
  width: 100%;
  height: 520px;
  padding: 10px;
`;

const ReviewInformationContainer = styled.div`
  width: 300px;
  height: 140px;
`;

const ReviewContent = styled.div`
  word-break: break-word;
`;
const ReviewPicture = styled.div<{ pictureCount: number }>`
  flex-grow: ${(props) => 1 / props.pictureCount};
  height: 100px;
  //TODO: 이미지 서버에서 받고 props로 설정해서 뿌려주기
  background: url(/src/assets/images/placeholder.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid gainsboro;
  // TODO: border 제거
  border-radius: 10px;
  margin: 0 2px;
`;

const ReviewPictureContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
`;
const ReviewItem = (props: {
  reviewScore: number;
  writer: string;
  timeStamp: string;
  reviewContent: string;
  reviewPicture?: [];
}) => {
  const testArray = [1, 2, 3, 4];
  //TODO: 서버에서 이미지 받아오기
  return (
    <ReviewContainer>
      <ReviewInformationContainer>
        <ReviewScore reviewScore={props.reviewScore} />
        <GrayDIv>
          {props.writer} · {props.timeStamp}
        </GrayDIv>
        <ReviewContent>{props.reviewContent}</ReviewContent>
      </ReviewInformationContainer>
      <ReviewPictureContainer>
        {/* {testArray.slice(0, 4).map((value, index) => (
          
        ))} 
        TODO: value로 서버에서 받은 이미지 값 넣기 
        */}
        <ReviewPicture pictureCount={4} />
        <ReviewPicture pictureCount={4} />
        <ReviewPicture pictureCount={4} />
        <ReviewPicture pictureCount={4} />
      </ReviewPictureContainer>
    </ReviewContainer>
  );
};

export default ReviewItem;
