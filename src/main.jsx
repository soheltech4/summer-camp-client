import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';
import AuthProvider from '../Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='  bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
    <div className='container mx-auto'>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    </div>
  </div>
)
