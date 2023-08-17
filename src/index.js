  import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { ActiveProvider } from './context/Active';
import { StoregProvider } from './context/Storeg';
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StoregProvider>
      <ActiveProvider>
        <App />
      </ActiveProvider>
    </StoregProvider>
  </BrowserRouter>
);


