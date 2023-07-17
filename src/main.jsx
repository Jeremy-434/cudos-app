import React from 'react'
import ReactDOM from 'react-dom/client'
import { CudosApp } from './CudosApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CudosApp />
    </BrowserRouter>
  </React.StrictMode>,
)
