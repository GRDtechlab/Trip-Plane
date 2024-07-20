import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'

// Router Step 1
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Router Step 2 */}
    <RouterProvider router={router}>
    </RouterProvider >
  </React.StrictMode>,
)