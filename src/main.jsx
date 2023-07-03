import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Servicios from './Pages/Servicios.jsx'
import Clientes from './Pages/Clientes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,  
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: '/clientes',
        element: <Clientes/>  
      }, 
      {
        path: "/servicios",
        element: <Servicios />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
