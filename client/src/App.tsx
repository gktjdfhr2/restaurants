import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from '@customer/pages/TestPage';
import '@customer/assets/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// TODO: import order

export default App;
