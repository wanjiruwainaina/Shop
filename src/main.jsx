// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Productprofile from './components/Products-container/productprofile.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/productprofile',
//     element: <Productprofile/>
//   }
// ])
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProductProfile from './components/Products-container/productprofile.jsx';
import ProductsContainer from './components/Products-container/index.jsx';
import Image from './components/image.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<ProductsContainer/>,
    },
    {
      path:'/catalogue',
      element:<ProductsContainer/>,
      },
      {
        path:'/productprofile',
        element:<ProductProfile/>,
        },
        {
          path:"/image",
          element:<Image/>,
        }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
