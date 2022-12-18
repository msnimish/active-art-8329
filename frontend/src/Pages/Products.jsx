import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"
import { useLocation } from 'react-router-dom';

import ProductCard from '../Components/Rohit/ProductCard';
import { getProducts } from '../Redux/ProductsReducer/action';
import SortFilter from '../Components/Rohit/Filter';
import Loading from '../Components/Rohit/Loading';



const Products = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()

  const productList = useSelector((reduxStore) => reduxStore.ProductsReducer.products);
  // console.log(productList)
  


  useEffect(()=>{
const brand = searchParams.getAll("brand",)
const type = searchParams.getAll("type")
const fit = searchParams.getAll("fit")
const design = searchParams.getAll("design")
const size = searchParams.getAll("size")
const sleeveLength = searchParams.getAll("sleeveLength")


const queryParams = {
  params : { brand, type, fit, design, size, sleeveLength }
 
}

console.log(queryParams)
    dispatch(getProducts(queryParams))
   
  },[location.search])


  if(!productList.length > 0){
    return <Loading/>
  }

  return (
    <>

    <SortFilter/>

      <SimpleGrid minChildWidth={"250px"} spacing='40px'>
        {
          productList && productList.map((el, i) => <Box height='500px' key={i}> <ProductCard {...el} /> </Box>)
        }
      </SimpleGrid>

    </>
  )
}

export default Products