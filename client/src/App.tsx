import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './customer/pages/Restaurants';
import Search from './customer/pages/Search';
import CustomerInformation from './customer/pages/CustomerInformation';
import SignIn from './customer/pages/SignIn';
import SignUp from './customer/pages/SignUp';
import ReservationHistory from '@customer/pages/CustomerInformation/ReservationHistory';
import '@customer/styles/index.css';
import Layout from '@customer/UI/Layouts/Layout';
import RecentViewHistory from '@customer/pages/CustomerInformation/RecentViewHistory';
import LineHistory from '@customer/pages/CustomerInformation/LineHistory';
import StoreInformation from './customer/components/StoreInformation';
import MoreMenu from '@customer/components/StoreInformation/MoreMenu';
import MoreReview from '@customer/components/StoreInformation/MoreReview';
import MoreAmenities from '@customer/components/StoreInformation/MoreAmenities';
import ModifyInformation from '@customer/pages/ModifyInformation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Restaurants />} />
          <Route path="customer/Search" element={<Search />} />
          <Route
            path="customer/InformationPage/"
            element={<CustomerInformation />}
          />
          <Route
            path="customer/InformationPage/ModifyInformation"
            element={<ModifyInformation />}
          />
          <Route
            path="customer/ReservationHistory"
            element={<ReservationHistory />}
          />
          <Route path="customer/LineHistory" element={<LineHistory />} />
          <Route
            path="customer/RecentViewHistory"
            element={<RecentViewHistory />}
          />
          <Route path="customer/SignIn" element={<SignIn />} />
          <Route path="customer/SignUp" element={<SignUp />} />
          <Route
            path="customer/StoreInformation/:storeId"
            element={<StoreInformation />}
          />
          <Route
            path="customer/StoreInformation/:storeId/MoreMenu"
            element={<MoreMenu />}
          />
          <Route
            path="customer/StoreInformation/:storeId/MoreReview"
            element={<MoreReview />}
          />
          <Route
            path="customer/StoreInformation/:storeId/MoreAmenities"
            element={<MoreAmenities />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// TODO: import order

export default App;
