import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from './MainPage'
import ContactPage, { loader as contactLoader } from './ContactPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/contact/:id",
    element: <ContactPage />,
    loader: contactLoader
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
