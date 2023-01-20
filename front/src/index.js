import React from 'react';
import ReactDOM from 'react-dom/client';
import Restaurants from './components/Restaurants.js';
import './styles/style.css';

const root =
  ReactDOM.createRoot(
    document.getElementById(
      'restaurants',
    ),
  );

root.render(
  <Restaurants />,
);
console.log(
  'a',
);
