import { ChangeEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import Button from '@customer/UI/Form/Button';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import PageTitle from '@customer/UI/Form/PageTitle';
import MemberType from './MemberType';

const ElementContainer = styled(ButtonSortDiv)`
  width: 70%;
  margin: 0 auto;
`;

const InputContainer = styled(ButtonSortDiv)`
  width: 100%;
  margin: 0 auto;
  height: 100px;
`;

const NextButton = styled(Button)`
  margin-top: 30px;
`;

const ValidationCheckDiv = styled.div`
  color: red;
  opacity: 0.7;
`;

const PageTitleDiv = styled(PageTitle)`
  margin: 0 0 20px 0;
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  color: gray;
`;

const PrivacyCheck = (props: {
  nameValue: string;
  memberNameHandle: ChangeEventHandler;
  nameCheckValidation: JSX.Element;
  phoneValue: string;
  memberPhoneHandle: ChangeEventHandler;
  phoneCheckValidation: JSX.Element;
  addressValue: string;
  memberAddressHandle: ChangeEventHandler;
  addressCheckValidation: JSX.Element;
  memberRoleHandle: ChangeEventHandler;
  onClick: MouseEventHandler;
}) => {
  return (
    <>
      <ElementContainer>
        <PageTitleDiv>
          맛집 지도는 개인 정보를 비공개로 안전하게 유지합니다.
          <br />
        </PageTitleDiv>
        <InputContainer>
          <PlaceHolderText
            content="이름"
            type="text"
            value={props.nameValue}
            onChange={props.memberNameHandle}
          />
          {props.nameCheckValidation}
        </InputContainer>
        <InputContainer>
          <PlaceHolderText
            content="핸드폰 번호"
            type="text"
            value={props.phoneValue}
            onChange={props.memberPhoneHandle}
          />
          {props.phoneCheckValidation}
        </InputContainer>
        <InputContainer>
          <PlaceHolderText
            content="주소"
            type="text"
            value={props.addressValue}
            onChange={props.memberAddressHandle}
          />
          {props.addressCheckValidation}
        </InputContainer>
        <MemberType defaultValue="0" onChange={props.memberRoleHandle}>
          <option value="0">고객</option>
          <option value="1">사업자</option>
        </MemberType>

        <NextButton type="button" title="가입하기" onClick={props.onClick} />
      </ElementContainer>
    </>
  );
};

export default PrivacyCheck;
