import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import Layout from './Layout.jsx'
import Landing from './Components/Landing/Landing.jsx'
import Products from './Components/Products/Products.jsx'
import Cart from './Components/Cart/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Edgecase from './Edgecase.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 1. This route is ALONE (No Header/Footer) */}
      <Route path="/" element={<Landing />} />
      {/* 2. These routes are INSIDE the Layout (Header + Outlet + Footer) */}
      <Route element={<Layout />}>
        <Route path="home" element={<Landing />} /> 
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path='*' element={<Edgecase />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)