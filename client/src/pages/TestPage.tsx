import DefaultLayout from '@UI/Layouts/DefaultLayout';
import HeaderLayout from '@UI/Layouts/HeaderLayout';
import KakaoMap from '@UI/Form/KakaoMap';
import Header from '@UI/components/Header';

const TestPage = () => {
  return (
    <>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <DefaultLayout>
        <KakaoMap />
      </DefaultLayout>
    </>
  );
};

export default TestPage;
