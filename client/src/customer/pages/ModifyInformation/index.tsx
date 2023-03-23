import styled, { css } from 'styled-components';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import PageTitle from '@customer/UI/Form/PageTitle';

const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

const InformationContentContainer = styled.div`
  display: flex;
  height: 64px;
  flex-direction: column;
  justify-content: space-between;
`;

const InformationTitle = styled.div`
  color: gray;
  font-size: 25px;
`;
const InformationContent = styled.div`
  font-size: 25px;
`;

const ModifyButton = styled.button`
  height: 50px;
  width: 100px;
  margin: auto 0;
  background-color: white;
  border: 1px solid gainsboro;
  border-radius: 25px;
  font-weight: bold;

  &:before {
    content: '수정';
  }
`;
const BottomButtonContainer = styled.div`
  width: inherit;
  position: fixed;
  bottom: 0;
`;

const BottomButton = styled.button`
  width: 50%;
  height: 64px;
  border-radius: 0;
  border: none;
  border-top: 1px solid gainsboro;
  background-color: white;

  ${(props) =>
    props.title === '회원탈퇴'
      ? css`
          border-left: 1px solid gainsboro;
          color: red;
        `
      : css``}

  &:before {
    content: ${(props) => `'${props.title}'` || ''};
    font-size: 25px;
  }
`;
const ModifyInformation = () => {
  return (
    <>
      <MediumContainer>
        <PageTitle>개인정보</PageTitle>
        <InformationContainer>
          <InformationContentContainer>
            <InformationTitle>이름</InformationTitle>
            <InformationContent>하성록</InformationContent>
          </InformationContentContainer>
        </InformationContainer>
        <InformationContainer>
          <InformationContentContainer>
            <InformationTitle>이메일 주소</InformationTitle>
            <InformationContent>sowoo@naver.com</InformationContent>
          </InformationContentContainer>
          <ModifyButton />
        </InformationContainer>
        <InformationContainer>
          <InformationContentContainer>
            <InformationTitle>휴대폰 번호</InformationTitle>
            <InformationContent>01012345678</InformationContent>
          </InformationContentContainer>
          <ModifyButton />
        </InformationContainer>
        <InformationContainer>
          <InformationContentContainer>
            <InformationTitle>비밀번호</InformationTitle>
            <InformationContent>********</InformationContent>
          </InformationContentContainer>
          <ModifyButton />
        </InformationContainer>
      </MediumContainer>
      <BottomButtonContainer>
        <BottomButton title="로그아웃" />
        <BottomButton title="회원탈퇴" />
      </BottomButtonContainer>
    </>
  );
};

export default ModifyInformation;
