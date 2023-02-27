import { SignIn } from '@customer/components/SignIn';
import ResetButton from '@customer/UI/Form/ResetButton';
import PasswordInput from '@customer/UI/Form/PasswordInput';
import SignInButton from '@customer/UI/Form/SignInButton';
import PlaceHolder from '@customer/UI/Form/PlaceHolder';
import { Link } from 'react-router-dom';

const SignInPart = () => {
  return (
    <>
      <SignIn.Logo title="맛집지도" />
      <div
        style={{ position: 'relative', width: '300px', margin: '10px auto' }}
      >
        <PlaceHolder content="아이디" type="password" />
        <ResetButton />
      </div>
      <div style={{ width: '300px', margin: '10px auto' }}>
        <PasswordInput placeholder="비밀번호" />
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
          <Link to="/">
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

export default SignInPart;
