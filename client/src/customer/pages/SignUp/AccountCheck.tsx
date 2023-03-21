import { ChangeEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import ResetButton from '@customer/UI/Form/ResetButton';
import { SignUp } from '@customer/components/SignUp';

const PasswordInputContainer = styled(ButtonSortDiv)`
  width: 100%;
  margin: 0 auto;
  height: 150px;
`;
const ButtonContainer = styled(ButtonSortDiv)`
  margin: 0 auto 10px auto;
`;

const AccountCheck = (props: {
  emailValue: string;
  memberEmailHandle: ChangeEventHandler;
  memberEmailReset: MouseEventHandler;
  emailValidation: JSX.Element;
  passwordValue: string;
  memberPasswordHandle: ChangeEventHandler;
  passwordValidation: boolean;
  passwordCheckValue: string;
  memberPasswordCheckHandle: ChangeEventHandler;
  passwordCheckValidation: JSX.Element;
  onClick: MouseEventHandler;
}) => {
  return (
    <>
      <SignUp.ElementContainer>
        <SignUp.PageTitleDiv>
          하나의 계정으로
          <br />
          모든 맛집지도 서비스를 이용하실 수 있습니다.
        </SignUp.PageTitleDiv>
        <SignUp.InputContainer>
          <ButtonContainer>
            <PlaceHolderText
              content="이메일 주소"
              type="text"
              value={props.emailValue}
              onChange={props.memberEmailHandle}
            />
            {props.emailValue.length > 0 && (
              <ResetButton onClick={props.memberEmailReset} />
            )}
          </ButtonContainer>

          {props.emailValidation}
        </SignUp.InputContainer>

        <PasswordInputContainer>
          <PlaceHolderText
            content="비밀번호"
            type="password"
            value={props.passwordValue}
            onChange={props.memberPasswordHandle}
          />
          <PlaceHolderText
            content="비밀번호 확인"
            type="password"
            value={props.passwordCheckValue}
            onChange={props.memberPasswordCheckHandle}
          />
          {props.passwordCheckValidation}
        </PasswordInputContainer>

        <SignUp.NextButton type="button" title="다음" onClick={props.onClick} />
      </SignUp.ElementContainer>
    </>
  );
};

export default AccountCheck;
