import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';
import CustomerInformation from '@customer/components/CustomerInformationSection';

const CustomerInformationPage = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>
        <CustomerInformation />
      </DefaultLayout>
    </>
  );
};

export default CustomerInformationPage;
