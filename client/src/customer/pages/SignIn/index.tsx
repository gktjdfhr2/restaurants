import SignInLogo from './SignInLogo';
import Button from '@customer/UI/Form/Button';
import PlaceHolder from '@customer/UI/Form/PlaceHolder';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import ResetButton from '@customer/UI/Form/ResetButton';
import ResetSortDiv from '@customer/UI/Form/ResetSortDiv';
import styled from 'styled-components';

const SignInButton = styled(Button)`
  width: 300px;
`;

const SignIn = () => {
  const [idCheck, setIdCheck] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const idCheckHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdCheck(event.target.value);
    console.log(event.target.value.length);
  };
  const passwordCheckHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
  };

  const resetId = (event: React.MouseEvent) => {
    setIdCheck('');
  };

  const register = () => {
    axios
      .post('http://localhost:8080/login', {
        id: idCheck,
        password: passwordCheck,
      })
      .then((response) => {
        console.log(response);
        console.log('통:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form>
        <SignInLogo title="맛집지도" />
        <div
          style={{
            position: 'relative',
            width: '300px',
            margin: '10px auto',
          }}
        >
          <PlaceHolder
            content="아이디"
            type="text"
            value={idCheck}
            onChange={idCheckHandle}
          />
          {idCheck.length > 0 && <ResetButton onClick={resetId} />}
        </div>
        <div
          style={{
            position: 'relative',
            width: '300px',
            margin: '10px auto',
          }}
        >
          <PlaceHolder
            content="비밀번호"
            type="password"
            value={passwordCheck}
            onChange={passwordCheckHandle}
          />
        </div>
        <div
          style={{
            width: '400px',
            margin: '30px auto',
            paddingTop: '30px',
            borderTop: 'var(--inputBorder)',
            textAlign: 'center',
          }}
        >
          <SignInButton onClick={register} title="로그인" type="submit" />
          <div style={{ margin: '10px' }}>
            회원이 아신가요? &nbsp;
            <Link to="/customer/SignUp">
              <span
                style={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  color: 'black',
                }}
              >
                회원가입
              </span>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
