import React from 'react'
import { useDispatch, useSelector } from "react-redux";



const Products = () => {
  const dispatch = useDispatch();

const productList = useSelector((reduxStore) => reduxStore.ProductsReducer.products);
  
console.log(productList)



  return (
    <div>Products</div>
    
  )
}

export default Products