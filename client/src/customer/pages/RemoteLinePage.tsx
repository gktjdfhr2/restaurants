import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';

const RemoteLinePage = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>RemoteLinePage!</DefaultLayout>
    </>
  );
};

export default RemoteLinePage;
