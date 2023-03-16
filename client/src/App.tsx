import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './customer/pages/Restaurants';
import Search from './customer/pages/Search';
import CustomerInformation from './customer/pages/CustomerInformation';
import SignIn from './customer/pages/SignIn';
import SignUp from './customer/pages/SignUp';
import ReservationHistory from '@customer/pages/CustomerInformation/ReservationHistory';
import '@customer/styles/index.css';
import Layout from '@customer/UI/Layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Restaurants />} />
          <Route path="customer/Search" element={<Search />} />
          <Route
            path="customer/InformationPage"
            element={<CustomerInformation />}
          />
          <Route
            path="customer/InformationPage/ReservationHistory"
            element={<ReservationHistory />}
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
