import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import KakaoMap from '@customer/components/KakaoMap';
import HeaderBar from '@customer/components/HeaderBar';

const TestPage = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>
        <KakaoMap />
      </DefaultLayout>
    </>
  );
};

export default TestPage;
