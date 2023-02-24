import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';
import SignIn from '@customer/components/SignInPart';

const SignInPage = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>
        <SignIn />
      </DefaultLayout>
    </>
  );
};

export default SignInPage;
