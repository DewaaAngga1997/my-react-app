import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'


const router = createBrowserRouter([
   { path : "/",
    element : <div>Hello World</div>,
   },
   { path : "/login",
    element : <LoginPage/>,
   },
   
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
