import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './customer/pages/TestPage';
import SearchPage from './customer/pages/SearchPage';
import ReservationPage from './customer/pages/ReservationPage';
import CustomerInformationPage from './customer/pages/CustomerInformationPage';
import RemoteLinePage from './customer/pages/RemoteLinePage';
import SignInPage from './customer/pages/SignInPage';
import SignUpPage from './customer/pages/SignUpPage';
import '@customer/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/customer/SearchPage" element={<SearchPage />} />
        <Route path="/customer/RemoteLinePage" element={<RemoteLinePage />} />
        <Route path="/customer/ReservationPage" element={<ReservationPage />} />
        <Route
          path="/customer/CustomerInformationPage"
          element={<CustomerInformationPage />}
        />
        <Route path="/customer/SignInPage" element={<SignInPage />} />
        <Route path="/customer/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// TODO: import order

export default App;
