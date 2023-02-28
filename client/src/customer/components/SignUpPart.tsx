import { SignIn } from './SignUp';
import styled from 'styled-components';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import PageTitle from '@customer/UI/Form/PageTitle';
import SignUpButton from '@customer/UI/Form/SignUpButton';

const SortDiv = styled.div`
  width: 70%;
  height: 100%;
  margin-bottom: 30px;
`;
const MemberType = styled.select`
  width: 100%;
  height: 46px;
  padding: 0 5px;
`;

const SignUpPart = () => {
  return (
    <>
      <PageTitle>회원가입</PageTitle>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SortDiv>
          <PlaceHolderText content="이메일 주소" type="text" reset={true} />
        </SortDiv>
        <SortDiv>
          <PlaceHolderText content="비밀번호" type="password" />
          <PlaceHolderText content="비밀번호 확인" type="password" />
        </SortDiv>
        <SortDiv>
          <PlaceHolderText content="이름" type="text" reset={true} />
        </SortDiv>
        <SortDiv>
          <PlaceHolderText content="전화번호" type="text" reset={true} />
        </SortDiv>
        <SortDiv>
          <PlaceHolderText content="주소" type="text" reset={true} />
        </SortDiv>
        <SortDiv>
          <MemberType defaultValue="0">
            <option value="0">고객</option>
            <option value="1">사업자</option>
          </MemberType>
        </SortDiv>
        <SortDiv>
          <SignUpButton />
        </SortDiv>
      </div>
    </>
  );
};

export default SignUpPart;
