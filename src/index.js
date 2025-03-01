import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './i18n'
import App from './App';
import './Styles/bootstrap-grid.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);