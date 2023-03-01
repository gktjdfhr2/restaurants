import { ChangeEvent, useState, useCallback } from 'react';
import { SignIn } from './SignUp';
import ResetSortDiv from '@customer/UI/Form/ResetSortDiv';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import PageTitle from '@customer/UI/Form/PageTitle';
import SignUpButton from '@customer/UI/Form/SignUpButton';
import ResetButton from '@customer/UI/Form/ResetButton';

//FIXME: memberRole is string

const SignUpPart = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    memberRole: '0',
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberPhone: '',
    memberAddress: '',
  });
  const [passwordCheck, setCheckPassword] = useState('');

  // const userIdHandle = useCallback(
  //   (inputId: ChangeEvent) => {
  //     setSignUpInfo((prev) => ({
  //       ...prev,
  //       memberEmail: inputId.target.value,
  //     }));
  //   },
  //   [signUpInfo.memberEmail]
  // );
  const userIdHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo((prev) => ({
      ...prev,
      memberEmail: event.target.value,
    }));
  };
  const userPasswordHandle = useCallback(
    (inputPassword: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberPassword: inputPassword.target.value,
      }));
    },
    [signUpInfo.memberPassword]
  );

  const userPasswordCheckHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value);
  };

  const userNameHandle = useCallback(
    (inputName: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberName: inputName.target.value,
      }));
    },
    [signUpInfo.memberName]
  );

  const userPhoneHandle = useCallback(
    (inputPhone: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberPhone: inputPhone.target.value,
      }));
    },
    [signUpInfo.memberPhone]
  );

  const userAddressHandle = useCallback(
    (inputAddress: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberAddress: inputAddress.target.value,
      }));
    },
    [signUpInfo.memberAddress]
  );

  const userRoleHandle = useCallback(
    (inputRole: ChangeEvent<HTMLSelectElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberRole: inputRole.target.value,
      }));
    },
    [signUpInfo.memberRole]
  );

  const userIdReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberEmail: '' }));
  };
  const userNameReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberName: '' }));
  };
  const userPhoneReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberPhone: '' }));
  };
  const userAddressReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberAddress: '' }));
  };

  const signUp = () => {
    console.log(signUpInfo);
  };

  return (
    <>
      <PageTitle>회원가입</PageTitle>
      <SignIn.Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ResetSortDiv>
            <PlaceHolderText
              content="이메일 주소"
              type="text"
              value={signUpInfo.memberEmail}
              onChange={userIdHandle}
            />
            {signUpInfo.memberEmail.length > 0 && (
              <ResetButton onClick={userIdReset} />
            )}
          </ResetSortDiv>

          <SignIn.SortDiv>
            <PlaceHolderText
              content="비밀번호"
              type="password"
              value={signUpInfo.memberPassword}
              onChange={userPasswordHandle}
            />
            <PlaceHolderText
              content="비밀번호 확인"
              type="password"
              value={passwordCheck}
              onChange={userPasswordCheckHandle}
            />
          </SignIn.SortDiv>

          <ResetSortDiv>
            <PlaceHolderText
              content="이름"
              type="text"
              value={signUpInfo.memberName}
              onChange={userNameHandle}
            />
            {signUpInfo.memberName.length > 0 && (
              <ResetButton onClick={userNameReset} />
            )}
          </ResetSortDiv>

          <ResetSortDiv>
            <PlaceHolderText
              content="전화번호"
              type="text"
              value={signUpInfo.memberPhone}
              onChange={userPhoneHandle}
            />
            {signUpInfo.memberPhone.length > 0 && (
              <ResetButton onClick={userPhoneReset} />
            )}
          </ResetSortDiv>

          <ResetSortDiv>
            <PlaceHolderText
              content="주소"
              type="text"
              value={signUpInfo.memberAddress}
              onChange={userAddressHandle}
            />
            {signUpInfo.memberAddress.length > 0 && (
              <ResetButton onClick={userAddressReset} />
            )}
          </ResetSortDiv>

          <SignIn.SortDiv>
            <SignIn.Select defaultValue="0" onChange={userRoleHandle}>
              <option value="0">고객</option>
              <option value="1">사업자</option>
            </SignIn.Select>
          </SignIn.SortDiv>

          <SignIn.SortDiv>
            <SignUpButton onClick={signUp} />
          </SignIn.SortDiv>
        </div>
      </SignIn.Container>
    </>
  );
};

export default SignUpPart;
