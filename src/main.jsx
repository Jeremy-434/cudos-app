import React from 'react';
import ReactDOM from 'react-dom/client';
import { CudosApp } from './CudosApp.jsx';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/GlobalStyles.css';
import '@fontsource/lexend';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CudosApp />
    </BrowserRouter>
  </React.StrictMode>,
)
