import React from 'react'
import {Route, Routes} from "react-router-dom"
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'
import Home from "../Pages/Home"

import Basket from '../Pages/Basket'


import Admin from '../Pages/Admin'



const AllRoutes = () => {
  return (
    <Routes>



      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/products' element={<Products/>}>Products</Route>
      <Route path='/single' element={<SingleProduct/>}>SingleProduct</Route>
      <Route path='/basket' element={<Basket/>}>Basket</Route>
      <Route path="/admin" element={<Admin/>}/>

      

     
    </Routes>
  )
}

export default AllRoutes