import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {

const dispatch = useDispatch();

const product = useSelector((reduxStore) => reduxStore.SingleProductReducer.product);
  
console.log(product)
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct