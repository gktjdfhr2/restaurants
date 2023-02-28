import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';
import SSETestPage from './SSETestPage';

const SearchPage = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>
        search!
        <SSETestPage />
      </DefaultLayout>
    </>
  );
};

export default SearchPage;
