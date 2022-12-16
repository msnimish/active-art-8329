import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, SimpleGrid } from '@chakra-ui/react'

import ProductCard from '../Components/Rohit/ProductCard';
import { useState } from 'react';
import SubCatCard from '../Components/Rohit/SubCatCard';
import SelectFilter from '../Components/Rohit/SelectFilter';
import SliderFilter from '../Components/Rohit/SliderFilter';



const Products = () => {
  const dispatch = useDispatch();

  // const list = useSelector((reduxStore) => reduxStore.ProductsReducer.products);

  // let productList = []
  // for (let i = 0; i < 20; i++) {
  //   productList.push(list[i])
  // }





  return (
    <>


<SubCatCard/>

<SelectFilter/>
<SliderFilter/>
      


      {/* <SimpleGrid minChildWidth={"250px"} spacing='40px'>
        {
          productList && productList.map((el, i) => <Box height='500px'> <ProductCard {...el} /> </Box>)
        }
      </SimpleGrid> */}

    </>
  )
}

export default Products