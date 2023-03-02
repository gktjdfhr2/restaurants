import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './customer/pages/Restaurants';
import SearchPage from './customer/pages/SearchPage';
import ReservationPage from './customer/pages/ReservationPage';
import CustomerInformation from './customer/pages/CustomerInformation';
import RemoteLinePage from './customer/pages/RemoteLinePage';
import SignIn from './customer/pages/SignIn';
import SignUp from './customer/pages/SignUp';
import '@customer/styles/index.css';
import Layout from '@customer/UI/Layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Restaurants />} />
          <Route path="customer/SearchPage" element={<SearchPage />} />
          <Route path="customer/RemoteLinePage" element={<RemoteLinePage />} />
          <Route
            path="customer/ReservationPage"
            element={<ReservationPage />}
          />
          <Route
            path="customer/InformationPage"
            element={<CustomerInformation />}
          />
          <Route path="customer/SignIn" element={<SignIn />} />
          <Route path="customer/SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// TODO: import order

export default App;
