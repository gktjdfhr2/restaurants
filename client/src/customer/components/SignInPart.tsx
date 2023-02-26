import { SignIn } from '@customer/components/SignIn';
import TextInput from '@customer/UI/Form/TextInput';
import ResetButton from '@customer/UI/Form/ResetButton';
import { Link } from 'react-router-dom';

const SignInPart = () => {
  return (
    <>
      <SignIn.Logo title="맛집지도" />
      <div style={{ position: 'relative', width: '300px', margin: '0 auto' }}>
        <TextInput></TextInput>
        <ResetButton />
      </div>
    </>
  );
};

export default SignInPart;
