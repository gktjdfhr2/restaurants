import { ChangeEvent, useState, useCallback } from 'react';
import PageTitle from '@customer/UI/Form/PageTitle';
import SignUpContainer from './SignUpContainer';
import axios from 'axios';
import AccountCheck from './AccountCheck';
import styled from 'styled-components';
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

  const [signUpStep, setSignUpStep] = useState(1);

  const memberEmailHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const memberEmailRegex =
      /^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$/;

    console.log(signUpInfo);
    console.log(passwordCheck);
    console.log(memberInfoError);
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
      console.log('test', event.target.value);
      console.log('pw', memberInfoError);
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
            <ValidationErrorDiv>
              비밀번호 양식을 확인해주세요. 영문 + 숫자 8자이상
            </ValidationErrorDiv>
          ),
        }));
      } else if (
        memberPasswordRegex.test(event.target.value) &&
        event.target.value !== passwordCheck
      ) {
        console.log('value', event.target.value);
        console.log('pwc', passwordCheck);
        setMemberInfoError((prev) => ({
          ...prev,
          memberPassword: true,
          memberPasswordCheck: false,
          memberPasswordCheckMessage: (
            <ValidationErrorDiv>
              비밀번호가 일치하지 않습니다.
            </ValidationErrorDiv>
          ),
        }));
      } else if (
        event.target.value === passwordCheck &&
        memberPasswordRegex.test(event.target.value)
      ) {
        setMemberInfoError((prev) => ({
          ...prev,
          memberPassword: true,
          memberPasswordCheckMessage: <ValidationErrorDiv></ValidationErrorDiv>,
        }));
      }
    },
    [signUpInfo.memberPassword, passwordCheck]
  );

  const memberPasswordCheckHandle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log('pwc', memberInfoError);
      const memberPasswordRegex = /^[a-zA-Z0-9]{8,}$/;
      setCheckPassword(() => event.target.value);

      if (event.target.value !== signUpInfo.memberPassword) {
        setMemberInfoError((prev) => ({
          ...prev,
          memberPasswordCheck: false,
          memberPasswordCheckMessage: (
            <ValidationErrorDiv>
              비밀번호가 일치하지 않습니다.
            </ValidationErrorDiv>
          ),
        }));
      } else if (
        memberPasswordRegex.test(event.target.value) &&
        event.target.value === signUpInfo.memberPassword
      ) {
        setMemberInfoError((prev) => ({
          ...prev,

          memberPasswordCheck: true,
          memberPasswordCheckMessage: <ValidationErrorDiv></ValidationErrorDiv>,
        }));
      }
    },
    [signUpInfo.memberPassword, passwordCheck]
  );

  const memberNameHandle = useCallback(
    (inputName: ChangeEvent<HTMLInputElement>) => {
      const memberNameRegex = /^[가-힣]{2,4}$/;
      setSignUpInfo((prev) => ({
        ...prev,
        memberName: inputName.target.value,
      }));

      if (memberNameRegex.test(inputName.target.value)) {
        setMemberInfoError((prev) => ({
          ...prev,
          memberName: true,
        }));
      } else {
        setMemberInfoError((prev) => ({
          ...prev,
          memberName: false,
        }));
      }
    },
    [signUpInfo.memberName]
  );

  const memberPhoneHandle = useCallback(
    (inputPhone: ChangeEvent<HTMLInputElement>) => {
      const memberPhoneRegex = /^[0]+[1]+[0-9]{9}$/;

      setSignUpInfo((prev) => ({
        ...prev,
        memberPhone: inputPhone.target.value,
      }));

      if (memberPhoneRegex.test(inputPhone.target.value)) {
        setMemberInfoError((prev) => ({
          ...prev,
          memberPhone: true,
        }));
      } else {
        setMemberInfoError((prev) => ({
          ...prev,
          memberPhone: false,
        }));
      }
    },
    [signUpInfo.memberPhone]
  );

  const memberAddressHandle = useCallback(
    (inputAddress: ChangeEvent<HTMLInputElement>) => {
      setSignUpInfo((prev) => ({
        ...prev,
        memberAddress: inputAddress.target.value,
      }));

      const memberAddressRegex = /[가-힣]{6,}$/;

      if (memberAddressRegex.test(inputAddress.target.value)) {
        setMemberInfoError((prev) => ({
          ...prev,
          memberAddress: true,
        }));
      } else {
        setMemberInfoError((prev) => ({
          ...prev,
          memberAddress: false,
        }));
      }
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

  // const signUp = () => {
  //   console.log(signUpInfo);
  //   signUpRegister();
  // };

  const accountNextStep = () => {
    console.log('suv', memberInfoError);
    if (
      memberInfoError.memberEmail &&
      memberInfoError.memberPassword &&
      memberInfoError.memberPasswordCheck
    ) {
      console.log(memberInfoError.memberEmail);
      setSignUpStep(signUpStep + 1);
    }
  };
  const privacyNextStep = () => {
    if (!memberInfoError.memberName) {
      setMemberInfoError((prev) => ({
        ...prev,
        memberNameCheck: (
          <ValidationErrorDiv>
            이름을 확인해주세요 ex&#41; 홍길동
          </ValidationErrorDiv>
        ),
      }));
    } else {
      setMemberInfoError((prev) => ({
        ...prev,
        memberNameCheck: <ValidationErrorDiv></ValidationErrorDiv>,
      }));
    }

    if (!memberInfoError.memberPhone) {
      setMemberInfoError((prev) => ({
        ...prev,
        memberPhoneCheck: (
          <ValidationErrorDiv>
            핸드폰 번호를 확인해주세요 ex&#41; 01012345678
          </ValidationErrorDiv>
        ),
      }));
    } else {
      setMemberInfoError((prev) => ({
        ...prev,
        memberPhoneCheck: <ValidationErrorDiv></ValidationErrorDiv>,
      }));
    }

    if (!memberInfoError.memberAddress) {
      setMemberInfoError((prev) => ({
        ...prev,
        memberAddressCheck: (
          <ValidationErrorDiv>주소를 확인해주세요</ValidationErrorDiv>
        ),
      }));
    } else {
      setMemberInfoError((prev) => ({
        ...prev,
        memberAddressCheck: <ValidationErrorDiv></ValidationErrorDiv>,
      }));
    }

    if (
      memberInfoError.memberPhone &&
      memberInfoError.memberName &&
      memberInfoError.memberAddress
    ) {
      setSignUpStep(signUpStep + 1);
      signUpRegister();
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
        <PageTitle>
          {signUpStep > 2 ? '가입 완료' : `회원가입 ${signUpStep} /2`}
        </PageTitle>
        {/* {signUpStep === 1 && (
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
        )} */}
        {/* {signUpStep === 2 && <PrivacyCheck />} */}
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
      </SignUpContainer>
    </>
  );
};

export default SignUp;
