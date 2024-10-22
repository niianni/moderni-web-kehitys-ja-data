import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Song, { loader as songLoader } from './Song'
import App from './App'
import ErrorPage from './ErrorPage'
import AddSong from './AddSong'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/song/:id",
        element: <Song />,
        errorElement: <ErrorPage />,
        loader: songLoader,
      },
      {
        path: "/add",
        element: <AddSong />,
        errorElement: <ErrorPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
