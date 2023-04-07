import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter, useLoaderData } from 'react-router-dom'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import NotFoundPage from './components/NotFoundPage'
import Contact from './Contact/Contact'
import OrderReview from './components/OrderReview/OrderReview'
import About from './About/About'
const router = createBrowserRouter([
  {
    path:"/",
    element : <Main/>,
    children : [
      {
        path:"/",
        element : <Home />,
        loader : () => fetch('t-shirts.json')
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "review",
        element : <OrderReview/>
      },
      {
        path : "about",
        element : <About/>
      }
    ]
  },
  {
    path : "*",
    element:<NotFoundPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
