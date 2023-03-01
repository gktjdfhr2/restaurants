import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './customer/pages/Restaurants';
import SearchPage from './customer/pages/SearchPage';
import ReservationPage from './customer/pages/ReservationPage';
import CustomerInformationPage from './customer/pages/CustomerInformationPage';
import RemoteLinePage from './customer/pages/RemoteLinePage';
import SignIn from './customer/pages/SignIn';
import SignUpPage from './customer/pages/SignUpPage';
import '@customer/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restaurants />}>
          {/* <Route path="customer" element={<KakaoMap />} /> */}
          <Route path="customer/SearchPage" element={<SearchPage />} />
          <Route path="customer/RemoteLinePage" element={<RemoteLinePage />} />
          <Route
            path="customer/ReservationPage"
            element={<ReservationPage />}
          />
          <Route
            path="customer/InformationPage"
            element={<CustomerInformationPage />}
          />
          <Route path="customer/SignIn" element={<SignIn />} />
          <Route path="customer/SignUpPage" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// TODO: import order

export default App;
