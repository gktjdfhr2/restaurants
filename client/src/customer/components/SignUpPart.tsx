import { ChangeEvent, useState } from 'react';
import { SignIn } from './SignUp';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import PageTitle from '@customer/UI/Form/PageTitle';
import SignUpButton from '@customer/UI/Form/SignUpButton';

const SignUpPart = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    memberRole: 0,
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberPhone: '',
    memberAddress: '',
  });

  const [passwordCheck, setCheckPassword] = useState('');

  const userIdHandle = (event: ChangeEvent) => {
    setSignUpInfo((prev) => ({ ...prev, memberEmail: event.target.value }));
  };
  const userIdReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberEmail: '' }));
  };

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
        <SignIn.Sort>
          <PlaceHolderText
            content="이메일 주소"
            type="text"
            reset={true}
            value={signUpInfo.memberEmail}
            onChange={userIdHandle}
            onReset={userIdReset}
          />
        </SignIn.Sort>
        {/* 
        <SignIn.Sort>
          <PlaceHolderText content="비밀번호" type="password" value="" />
          <PlaceHolderText content="비밀번호 확인" type="password" value="" />
        </SignIn.Sort>

        <SignIn.Sort>
          <PlaceHolderText content="이름" type="text" reset={true} value="" />
        </SignIn.Sort>

        <SignIn.Sort>
          <PlaceHolderText
            content="전화번호"
            type="text"
            reset={true}
            value=""
          />
        </SignIn.Sort>

        <SignIn.Sort>
          <PlaceHolderText content="주소" type="text" reset={true} value="" />
        </SignIn.Sort> */}

        <SignIn.Sort>
          <SignIn.Select defaultValue="0">
            <option value="0">고객</option>
            <option value="1">사업자</option>
          </SignIn.Select>
        </SignIn.Sort>

        <SignIn.Sort>
          <SignUpButton />
        </SignIn.Sort>
      </div>
    </>
  );
};

export default SignUpPart;
