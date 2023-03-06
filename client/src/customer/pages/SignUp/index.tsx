import { ChangeEvent, useState, useCallback } from 'react';
import PageTitle from '@customer/UI/Form/PageTitle';
import SignUpContainer from './SignUpContainer';
import axios from 'axios';
import AccountCheck from './AccountCheck';
import styled from 'styled-components';

const PasswordDiv = styled.div`
  opacity: 0.7;
`;

const ValidationCheckDiv = styled.div`
  color: red;
  opacity: 0.7;
`;

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

  const [memberInfoError, setMemberInfoError] = useState({
    memberEmail: false,
    memberPassword: false,
    memberPasswordCheck: false,
    memberPasswordCheckMessage: (
      <PasswordDiv>문자,숫자를 조합하여 8자 이상을 사용하세요.</PasswordDiv>
    ),
    memberName: false,
    memberPhone: false,
    memberAddress: false,
  });

  const [signUpStep, setSignUpStep] = useState(1);

  const memberEmailHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const memberEmailRegex =
      /^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$/;

    setSignUpInfo((prev) => ({
      ...prev,
      memberEmail: event.target.value,
    }));

    if (!memberEmailRegex.test(event.target.value)) {
      setMemberInfoError((prev) => ({
        ...prev,
        memberEmail: false,
      }));
    } else {
      setMemberInfoError((prev) => ({
        ...prev,
        memberEmail: true,
      }));
    }
  };

  const memberPasswordHandle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const memberPasswordRegex = /^[a-zA-Z0-9]{8,}$/;
      setSignUpInfo((prev) => ({
        ...prev,
        memberPassword: event.target.value,
      }));

      if (!memberPasswordRegex.test(event.target.value)) {
        setMemberInfoError((prev) => ({
          ...prev,
          memberPassword: false,
          memberPasswordCheckMessage: (
            <ValidationCheckDiv>
              비밀번호 양식을 확인해주세요. 영문 + 숫자 8자이상
            </ValidationCheckDiv>
          ),
        }));
      } else if (event.target.value !== passwordCheck) {
        setMemberInfoError((prev) => ({
          ...prev,
          memberPasswordCheck: false,
          memberPasswordCheckMessage: (
            <ValidationCheckDiv>
              비밀번호가 일치하지 않습니다.
            </ValidationCheckDiv>
          ),
        }));
      } else {
        setMemberInfoError((prev) => ({
          ...prev,
          memberPassword: true,
          memberPasswordCheckMessage: <ValidationCheckDiv></ValidationCheckDiv>,
        }));
      }
    },
    [signUpInfo.memberPassword]
  );

  const memberPasswordCheckHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value);

    if (event.target.value !== signUpInfo.memberPassword) {
      setMemberInfoError((prev) => ({
        ...prev,
        memberPassword: false,
        memberPasswordCheck: false,
        memberPasswordCheckMessage: (
          <ValidationCheckDiv>비밀번호가 일치하지 않습니다.</ValidationCheckDiv>
        ),
      }));
    } else {
      setMemberInfoError((prev) => ({
        ...prev,
        memberPassword: true,
        memberPasswordCheck: true,
        memberPasswordCheckMessage: <ValidationCheckDiv></ValidationCheckDiv>,
      }));
    }
  };

  const memberNameHandle = useCallback(
    (inputName: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberName: inputName.target.value,
      }));
    },
    [signUpInfo.memberName]
  );

  const memberPhoneHandle = useCallback(
    (inputPhone: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberPhone: inputPhone.target.value,
      }));
    },
    [signUpInfo.memberPhone]
  );

  const memberAddressHandle = useCallback(
    (inputAddress: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberAddress: inputAddress.target.value,
      }));
    },
    [signUpInfo.memberAddress]
  );

  const memberRoleHandle = useCallback(
    (inputRole: ChangeEvent<HTMLSelectElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberRole: inputRole.target.value,
      }));
    },
    [signUpInfo.memberRole]
  );

  const memberEmailReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberEmail: '' }));
    setMemberInfoError((prev) => ({
      ...prev,
      memberEmail: false,
    }));
  };
  const memberNameReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberName: '' }));
  };
  const memberPhoneReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberPhone: '' }));
  };
  const memberAddressReset = () => {
    setSignUpInfo((prev) => ({ ...prev, memberAddress: '' }));
  };

  const signUpRegister = () => {
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
    signUpRegister();
  };

  const accountNextStep = () => {
    if (memberInfoError.memberEmail && memberInfoError.memberPassword) {
      console.log(memberInfoError.memberEmail);
      setSignUpStep(signUpStep + 1);
    }
  };

  return (
    <>
      {/* <form>
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
                onChange={memberEmailHandle}
                pattern="^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$"
              />
              {signUpInfo.memberEmail.length > 0 && (
                <ResetButton onClick={memberEmailReset} />
              )}
            </ButtonSortDiv>

            <SortDiv>
              <PlaceHolderText
                content="비밀번호"
                type="password"
                value={signUpInfo.memberPassword}
                onChange={memberPasswordHandle}
                pattern="^[a-zA-Z0-9]{8,}$"
              />
              <PlaceHolderText
                content="비밀번호 확인"
                type="password"
                value={passwordCheck}
                onChange={memberPasswordCheckHandle}
              />
            </SortDiv>

            <ButtonSortDiv>
              <PlaceHolderText
                content="이름"
                type="text"
                value={signUpInfo.memberName}
                onChange={memberNameHandle}
                pattern="^[가-힣]{2,4}$"
              />
              {signUpInfo.memberName.length > 0 && (
                <ResetButton onClick={memberNameReset} />
              )}
            </ButtonSortDiv>

            <ButtonSortDiv>
              <PlaceHolderText
                content="전화번호"
                type="text"
                value={signUpInfo.memberPhone}
                onChange={memberPhoneHandle}
                pattern="^[0]+[1]+[0-9]{9}$"
              />
              {signUpInfo.memberPhone.length > 0 && (
                <ResetButton onClick={memberPhoneReset} />
              )}
            </ButtonSortDiv>

            <ButtonSortDiv>
              <PlaceHolderText
                content="주소"
                type="text"
                value={signUpInfo.memberAddress}
                onChange={memberAddressHandle}
                pattern="^[가-힣]{6,}$"
              />
              {signUpInfo.memberAddress.length > 0 && (
                <ResetButton onClick={memberAddressReset} />
              )}
            </ButtonSortDiv>

            <SortDiv>
              <MemberType defaultValue="0" onChange={memberRoleHandle}>
                <option value="0">고객</option>
                <option value="1">사업자</option>
              </MemberType>
            </SortDiv>

            <SortDiv>
              <Button onClick={signUp} title="회원가입" type="submit" />
            </SortDiv>
          </div>
        </SignUpContainer>
      </form> */}

      <SignUpContainer>
        <PageTitle>회원가입 {signUpStep}/3</PageTitle>
        {signUpStep === 1 && (
          <AccountCheck
            emailValue={signUpInfo.memberEmail}
            memberEmailHandle={memberEmailHandle}
            memberEmailReset={memberEmailReset}
            emailValidation={memberInfoError.memberEmail}
            passwordValue={signUpInfo.memberPassword}
            memberPasswordHandle={memberPasswordHandle}
            passwordValidation={memberInfoError.memberPassword}
            passwordCheckValue={passwordCheck}
            memberPasswordCheckHandle={memberPasswordCheckHandle}
            passwordCheckValidation={memberInfoError.memberPasswordCheckMessage}
            onClick={accountNextStep}
          />
        )}
      </SignUpContainer>
    </>
  );
};

export default SignUp;
