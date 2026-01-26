import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Layout from './Layout.jsx'
import Landing from './Components/Landing/Landing.jsx'
import Products from './Components/Products/Products.jsx'
import Cart from './Components/Cart/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='Developing-Front-End-Apps-with-React-IBM' element={<Landing />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<div className="text-center mt-20 text-xl">Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)