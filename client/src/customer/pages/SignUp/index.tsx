import { ChangeEvent, useState, useCallback } from 'react';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import PageTitle from '@customer/UI/Form/PageTitle';
import Button from '@customer/UI/Form/Button';
import ResetButton from '@customer/UI/Form/ResetButton';
import MemberType from './MemberType';
import SignUpContainer from './SignUpContainer';
import SortDiv from './SortDiv';
import axios from 'axios';

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    memberRole: '0',
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberPhone: '',
    memberAddress: '',
  });
  const [passwordCheck, setCheckPassword] = useState('');

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

  const register = () => {
    console.log(signUpInfo);
    axios
      .post('http://localhost:8080/api/signUp', signUpInfo)
      .then((response) => {
        console.log(response);
        console.log('data:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = () => {
    console.log(signUpInfo);
    register();
  };
  //TODO: add validation & step information
  return (
    <>
      <form>
        <PageTitle>회원가입</PageTitle>
        <SignUpContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ButtonSortDiv>
              <PlaceHolderText
                content="이메일 주소"
                type="text"
                value={signUpInfo.memberEmail}
                onChange={userIdHandle}
                pattern="^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$"
              />
              {signUpInfo.memberEmail.length > 0 && (
                <ResetButton onClick={userIdReset} />
              )}
            </ButtonSortDiv>

            <SortDiv>
              <PlaceHolderText
                content="비밀번호"
                type="password"
                value={signUpInfo.memberPassword}
                onChange={userPasswordHandle}
                pattern="^[a-zA-Z0-9]{8,}$"
              />
              <PlaceHolderText
                content="비밀번호 확인"
                type="password"
                value={passwordCheck}
                onChange={userPasswordCheckHandle}
              />
            </SortDiv>

            <ButtonSortDiv>
              <PlaceHolderText
                content="이름"
                type="text"
                value={signUpInfo.memberName}
                onChange={userNameHandle}
                pattern="^[가-힣]{2,4}$"
              />
              {signUpInfo.memberName.length > 0 && (
                <ResetButton onClick={userNameReset} />
              )}
            </ButtonSortDiv>

            <ButtonSortDiv>
              <PlaceHolderText
                content="전화번호"
                type="text"
                value={signUpInfo.memberPhone}
                onChange={userPhoneHandle}
                pattern="^[0]+[1]+[0-9]{9}$"
              />
              {signUpInfo.memberPhone.length > 0 && (
                <ResetButton onClick={userPhoneReset} />
              )}
            </ButtonSortDiv>

            <ButtonSortDiv>
              <PlaceHolderText
                content="주소"
                type="text"
                value={signUpInfo.memberAddress}
                onChange={userAddressHandle}
                pattern="^[가-힣]{6,}$"
              />
              {signUpInfo.memberAddress.length > 0 && (
                <ResetButton onClick={userAddressReset} />
              )}
            </ButtonSortDiv>

            <SortDiv>
              <MemberType defaultValue="0" onChange={userRoleHandle}>
                <option value="0">고객</option>
                <option value="1">사업자</option>
              </MemberType>
            </SortDiv>

            <SortDiv>
              <Button onClick={signUp} title="회원가입" type="submit" />
            </SortDiv>
          </div>
        </SignUpContainer>
      </form>
    </>
  );
};

export default SignUp;
