import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';
import SearchPage from './pages/SearchPage';
import ReservationPage from './pages/ReservationPage';
import CustomerInformationPage from './pages/CustomerInformationPage';
import RemoteLinePage from './pages/RemoteLinePage';
import '@customer/assets/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/Customer/SearchPage" element={<SearchPage />} />
        <Route path="/Customer/RemoteLinePage" element={<RemoteLinePage />} />
        <Route path="/Customer/ReservationPage" element={<ReservationPage />} />
        <Route
          path="/Customer/CustomerInformationPage"
          element={<CustomerInformationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// TODO: import order

export default App;
