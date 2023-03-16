import SignInLogo from './SignInLogo';
import Button from '@customer/UI/Form/Button';
import PlaceHolder from '@customer/UI/Form/PlaceHolder';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResetButton from '@customer/UI/Form/ResetButton';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

const SignInButton = styled(Button)`
  width: 300px;
`;

const SignIn = () => {
  const [idCheck, setIdCheck] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();
  useEffect(() => (cookies.token ? navigate('/') : console.log('false')), []);

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

  const register = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('memberEmail :', idCheck);
    console.log('memberPassword :', passwordCheck);
    await axios
      .post('http://localhost:8080/login', {
        memberEmail: idCheck,
        memberPassword: passwordCheck,
      })
      .then((response) => {
        console.log('data :', response);
        console.log('headers :', response.headers);
        setCookie('token', response.headers.authorization);
        navigate('/');
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
