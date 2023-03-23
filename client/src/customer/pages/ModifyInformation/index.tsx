import styled, { css } from 'styled-components';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import PageTitle from '@customer/UI/Form/PageTitle';
import TextInput from '@customer/UI/Form/TextInput';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const InformationModifyContent = styled(TextInput)`
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
  const [modify, setModify] = useState({
    address: false,
    phone: false,
    password: false,
  });
  const navigation = useNavigate();

  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  let address = 'sowoo@naver.com';
  let phone = '01012345678';
  let password = '12341234';

  const modifyEvent = (target: string) => {
    target === '이메일 주소' &&
      setModify((prev) => ({ ...prev, address: !modify.address }));

    target === '휴대폰 번호' &&
      setModify((prev) => ({ ...prev, phone: !modify.phone }));

    target === '비밀번호' &&
      setModify((prev) => ({ ...prev, password: !modify.password }));

    return console.log(modify);
  };

  const modifyAxios = (target: string) => {
    //TODO: axios로 서버랑 통신해서 정보 수정

    target === '이메일 주소' &&
      setModify((prev) => ({ ...prev, address: !modify.address })),
      console.log(addressRef.current?.value);

    target === '휴대폰 번호' &&
      setModify((prev) => ({ ...prev, phone: !modify.phone })),
      console.log(phoneRef.current?.value);

    target === '비밀번호' &&
      setModify((prev) => ({ ...prev, password: !modify.password })),
      console.log(passwordRef.current?.value);

    return navigation('.'), alert('수정되었습니다.');
  };
  //TODO: 주소 수정 추가

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
            {modify.address ? (
              <InformationModifyContent
                ref={addressRef}
                defaultValue={address}
              />
            ) : (
              <InformationContent>{address}</InformationContent>
            )}
          </InformationContentContainer>
          <ModifyButton
            onClick={
              modify.address
                ? () => modifyAxios('이메일 주소')
                : () => modifyEvent('이메일 주소')
            }
          />
        </InformationContainer>

        <InformationContainer>
          <InformationContentContainer>
            <InformationTitle>휴대폰 번호</InformationTitle>
            {modify.phone ? (
              <InformationModifyContent ref={phoneRef} defaultValue={phone} />
            ) : (
              <InformationContent>{phone}</InformationContent>
            )}
          </InformationContentContainer>
          <ModifyButton
            onClick={
              modify.address
                ? () => modifyAxios('휴대폰 번호')
                : () => modifyEvent('휴대폰 번호')
            }
          />
        </InformationContainer>
        <InformationContainer>
          <InformationContentContainer>
            <InformationTitle>비밀번호</InformationTitle>
            {modify.password ? (
              <InformationModifyContent
                ref={passwordRef}
                defaultValue={password}
                type="password"
              />
            ) : (
              <InformationContent>
                {'*'.repeat(password.length)}
              </InformationContent>
            )}
          </InformationContentContainer>
          <ModifyButton
            onClick={
              modify.address
                ? () => modifyAxios('비밀번호')
                : () => modifyEvent('비밀번호')
            }
          />
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
