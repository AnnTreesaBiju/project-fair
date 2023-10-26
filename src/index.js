import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// bootstrap theme
import './bootstrap.min.css';
// redirection
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*redirection */}
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>
);


