import { ChangeEvent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PageTitle from '@customer/UI/Form/PageTitle';
import SignUpContainer from './SignUpContainer';
import AccountCheck from './AccountCheck';
import PrivacyCheck from './PrivacyCheck';

const PasswordDiv = styled.div`
  opacity: 0.7;
`;

const ValidationErrorDiv = styled.div`
  color: red;
  opacity: 0.7;
`;
const ValidationDiv = styled.div`
  opacity: 0.7;
`;
const PrevButton = styled.button`
  background-color: white ;
  border none;
  font-size:30px;
  position:absolute;
`;

const SignUp = () => {
  /** 입력값을 저장하는 State */
  const [signUpInfo, setSignUpInfo] = useState({
    memberRole: '0',
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberPhone: '',
    memberAddress: '',
  });

  const [passwordCheck, setCheckPassword] = useState('');

  /** 입력값의 정합성을 체크하는 State */
  const [memberInfoError, setMemberInfoError] = useState({
    memberEmail: false,
    memberEmailCheckMessage: (
      <PasswordDiv>이메일 양식 ex&#41;example@example.com</PasswordDiv>
    ),
    memberPassword: false,
    memberPasswordCheck: false,
    memberPasswordCheckMessage: (
      <PasswordDiv>문자,숫자를 조합하여 8자 이상을 사용하세요.</PasswordDiv>
    ),
    memberName: false,
    memberNameCheck: <ValidationDiv>ex&#41; 홍길동</ValidationDiv>,
    memberPhone: false,
    memberPhoneCheck: (
      <ValidationDiv>
        '-'을 제외하고 입력해주세요 ex&#41; 01012345678
      </ValidationDiv>
    ),

    memberAddress: false,
    memberAddressCheck: <ValidationDiv></ValidationDiv>,
  });

  /** 회원가입 단계 State */
  const [signUpStep, setSignUpStep] = useState(1);

  const navigate = useNavigate();

  const memberEmailHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const memberEmailRegex =
      /^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$/;
    const isEmailValid = memberEmailRegex.test(event.target.value);

    setSignUpInfo((prev) => ({
      ...prev,
      memberEmail: event.target.value,
    }));

    setMemberInfoError((prev) => ({
      ...prev,
      memberEmail: isEmailValid,
      memberEmailCheckMessage: isEmailValid ? (
        <PasswordDiv>사용 가능한 아이디 입니다.</PasswordDiv>
      ) : (
        <ValidationErrorDiv>
          이메일 양식에 맞게 작성해주세요.
          <br /> ex &#41; example@example.com
        </ValidationErrorDiv>
      ),
    }));
  };

  const memberPasswordHandle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const memberPasswordRegex = /^[a-zA-Z0-9]{8,}$/;
      const isPasswordValid = memberPasswordRegex.test(event.target.value);

      setSignUpInfo((prev) => ({
        ...prev,
        memberPassword: event.target.value,
      }));
      console.log('function valid', isPasswordValid);

      setMemberInfoError((prev) => ({
        ...prev,
        memberPassword: isPasswordValid,
        memberPasswordCheckMessage: isPasswordValid ? (
          event.target.value === passwordCheck ? (
            <PasswordDiv>사용 가능한 비밀번호 입니다.</PasswordDiv>
          ) : (
            <ValidationErrorDiv>
              일치하지 않는 비밀번호 입니다.
            </ValidationErrorDiv>
          )
        ) : (
          <ValidationErrorDiv>
            비밀번호 양식에 맞게 작성해주세요.
          </ValidationErrorDiv>
        ),
      }));
    },
    [signUpInfo.memberPassword, passwordCheck]
  );

  const memberPasswordCheckHandle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log('pwc', memberInfoError);
      const memberPasswordRegex = /^[a-zA-Z0-9]{8,}$/;
      const isPasswordCheckValid = memberPasswordRegex.test(event.target.value);
      const isPasswordCheckSame =
        event.target.value === signUpInfo.memberPassword;

      setCheckPassword(() => event.target.value);
      isPasswordCheckValid &&
        setMemberInfoError((prev) => ({
          ...prev,
          memberPasswordCheck: isPasswordCheckSame,
          memberPasswordCheckMessage: isPasswordCheckSame ? (
            <PasswordDiv>사용 가능한 비밀번호 입니다.</PasswordDiv>
          ) : (
            <ValidationErrorDiv>
              비밀번호가 일치하지 않습니다.
            </ValidationErrorDiv>
          ),
        }));
    },
    [signUpInfo.memberPassword, passwordCheck]
  );

  const memberNameHandle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const memberNameRegex = /^[가-힣]{2,4}$/;
      const isNameValid = memberNameRegex.test(event.target.value);
      setSignUpInfo((prev) => ({
        ...prev,
        memberName: event.target.value,
      }));
      setMemberInfoError((prev) => ({
        ...prev,
        memberName: isNameValid,
      }));
    },
    [signUpInfo.memberName]
  );

  const memberPhoneHandle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const memberPhoneRegex = /^[0]+[1]+[0-9]{9}$/;
      const isMemberPhoneValid = memberPhoneRegex.test(event.target.value);

      setSignUpInfo((prev) => ({
        ...prev,
        memberPhone: event.target.value,
      }));
      setMemberInfoError((prev) => ({
        ...prev,
        memberPhone: isMemberPhoneValid,
      }));
    },
    [signUpInfo.memberPhone]
  );

  const memberAddressHandle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const memberAddressRegex = /[가-힣]{6,}$/;
      const isMemberAddressValid = memberAddressRegex.test(event.target.value);

      setSignUpInfo((prev) => ({
        ...prev,
        memberAddress: event.target.value,
      }));

      setMemberInfoError((prev) => ({
        ...prev,
        memberAddress: isMemberAddressValid,
      }));
    },
    [signUpInfo.memberAddress]
  );

  const memberRoleHandle = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberRole: event.target.value,
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

  const accountNextStep = () => {
    if (
      memberInfoError.memberEmail &&
      memberInfoError.memberPassword &&
      memberInfoError.memberPasswordCheck
    ) {
      setSignUpStep(signUpStep + 1);
    }
  };

  const signUpRegister = () => {
    console.log(signUpInfo);
    axios
      .post('http://localhost:8080/api/signUp', signUpInfo)
      .then((response) => {
        console.log('data:', response);
        alert('가입완료! 로그인 페이지로 이동합니다.');
        navigate('../../customer/SignIn');
        // response.headers.authorization
      })
      .catch((error) => {
        console.log(error);
        setSignUpStep(1);
        alert('가입실패! 회원가입 페이지로 돌아갑니다.');
        navigate('./');
      });
  };

  const privacyNextStep = () => {
    setMemberInfoError((prev) => ({
      ...prev,
      memberNameCheck: memberInfoError.memberName ? (
        <ValidationDiv>ex&#41; 홍길동</ValidationDiv>
      ) : (
        <ValidationErrorDiv>
          이름을 확인해주세요 ex&#41; 홍길동
        </ValidationErrorDiv>
      ),
      memberPhoneCheck: memberInfoError.memberPhone ? (
        <ValidationDiv>사용 가능한 번호입니다.</ValidationDiv>
      ) : (
        <ValidationErrorDiv>
          핸드폰 번호를 확인해주세요 ex&#41; 01012345678
        </ValidationErrorDiv>
      ),
      memberAddressCheck: memberInfoError.memberAddress ? (
        <ValidationDiv>사용 가능한 주소입니다.</ValidationDiv>
      ) : (
        <ValidationErrorDiv>주소를 확인해주세요</ValidationErrorDiv>
      ),
    }));

    if (
      memberInfoError.memberPhone &&
      memberInfoError.memberName &&
      memberInfoError.memberAddress &&
      memberInfoError.memberEmail &&
      memberInfoError.memberPassword
    ) {
      signUpRegister();
    }
  };

  return (
    <>
      <SignUpContainer>
        {signUpStep > 1 && (
          <PrevButton onClick={() => setSignUpStep(signUpStep - 1)}>
            &#60;
          </PrevButton>
        )}
        <PageTitle>회원가입 {signUpStep} /2</PageTitle>
        {signUpStep === 1 && (
          <AccountCheck
            emailValue={signUpInfo.memberEmail}
            memberEmailHandle={memberEmailHandle}
            memberEmailReset={memberEmailReset}
            emailValidation={memberInfoError.memberEmailCheckMessage}
            passwordValue={signUpInfo.memberPassword}
            memberPasswordHandle={memberPasswordHandle}
            passwordValidation={memberInfoError.memberPassword}
            passwordCheckValue={passwordCheck}
            memberPasswordCheckHandle={memberPasswordCheckHandle}
            passwordCheckValidation={memberInfoError.memberPasswordCheckMessage}
            onClick={accountNextStep}
          />
        )}
        {signUpStep === 2 && (
          <PrivacyCheck
            nameValue={signUpInfo.memberName}
            memberNameHandle={memberNameHandle}
            nameCheckValidation={memberInfoError.memberNameCheck}
            phoneValue={signUpInfo.memberPhone}
            memberPhoneHandle={memberPhoneHandle}
            phoneCheckValidation={memberInfoError.memberPhoneCheck}
            addressValue={signUpInfo.memberAddress}
            memberAddressHandle={memberAddressHandle}
            addressCheckValidation={memberInfoError.memberAddressCheck}
            memberRoleHandle={memberRoleHandle}
            onClick={privacyNextStep}
          />
        )}
      </SignUpContainer>
    </>
  );
};

export default SignUp;
