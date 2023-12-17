import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './site';
import "flag-icon-css/css/flag-icons.min.css";
import "./i18n"; 

const main_root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
