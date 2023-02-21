import ReactDom from 'react-dom/client';
import App from './App';
import '@assets/styles/index.css';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(<App />);
