import React from 'react';
import ReactDOM from 'react-dom/client';
import Ap from './Ap';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Ap /> */}
  </React.StrictMode>
);

reportWebVitals();
