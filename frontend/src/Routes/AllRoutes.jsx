import React from 'react'
import {Route, Routes} from "react-router-dom"
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'
import Home from "../Pages/Home"

import Basket from '../Pages/Basket'


import Admin from '../Pages/Admin'
import MyShipping from '../Components/Anu/MyShipping'
import MyPaymentSec from '../Components/Anu/MyPaymentSec'



const AllRoutes = () => {
  return (
    <Routes>



      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/products' element={<Products/>}>Products</Route>
      <Route path='/single/:productID' element={<SingleProduct/>}>SingleProduct</Route>
      <Route path='/basket' element={<Basket/>}>Basket</Route>
      <Route path="/admin" element={<Admin/>}>Admin</Route>
      <Route path="/shipping" element={<MyShipping/>}>Shipping</Route>
      <Route path="/payment" element={<MyPaymentSec/>}>Payment</Route>

      

     
    </Routes>
  )
}

export default AllRoutes