import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';
import TextInput from '@customer/UI/Form/TextInput';
import ResetButton from '@customer/UI/Form/ResetButton';

const CustomerInformationPage = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>
        CustomerInformationPage!
        {/* csstest */}
        <div style={{ position: 'relative', width: '200px' }}>
          <TextInput />
          <ResetButton />
        </div>
      </DefaultLayout>
    </>
  );
};

export default CustomerInformationPage;
