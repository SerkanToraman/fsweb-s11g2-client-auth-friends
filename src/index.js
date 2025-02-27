import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
//import './reset.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import "./reset.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </AuthContextProvider>
 
);
