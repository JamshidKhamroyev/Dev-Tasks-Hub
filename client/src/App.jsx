import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
// layouts
import MainLayouts from './layouts/MainLayouts'
// Pages
import HomePage from './pages/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App