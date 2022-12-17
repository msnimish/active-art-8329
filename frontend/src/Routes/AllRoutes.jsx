import React from 'react'
import {Route, Routes} from "react-router-dom"

import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'
import Home from "../Pages/Home"


const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home/>}>Home</Route> */}
      <Route path='/p' element={<Products/>}>Products</Route>
      <Route path='/s' element={<SingleProduct/>}>SingleProduct</Route>
    </Routes>
  )
}

export default AllRoutes