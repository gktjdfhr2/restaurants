import SignInLogo from './SignInLogo';

import SignInButton from '@customer/UI/Form/SignInButton';
import PlaceHolder from '@customer/UI/Form/PlaceHolder';
import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import { Link } from 'react-router-dom';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';

const SignIn = () => {
  return (
    <>
      <SignInLogo title="맛집지도" />
      <div
        style={{
          position: 'relative',
          width: '300px',
          margin: '10px auto',
        }}
      >
        <PlaceHolder content="아이디" type="text" value="" onChange="" />
      </div>
      <div
        style={{
          position: 'relative',
          width: '300px',
          margin: '10px auto',
        }}
      >
        <PlaceHolder content="비밀번호" type="password" value="" onChange="" />
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
        <SignInButton />
        <div style={{ margin: '10px' }}>
          회원이 아신가요? &nbsp;
          <Link to="/customer/SignUpPage">
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
    </>
  );
};

export default SignIn;
