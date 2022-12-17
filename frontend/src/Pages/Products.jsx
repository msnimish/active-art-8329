import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"


import ProductCard from '../Components/Rohit/ProductCard';
import SubCatCard from '../Components/Rohit/SubCatCard';
import SelectFilter from '../Components/Rohit/SelectFilter';
import SliderFilter from '../Components/Rohit/SliderFilter';
import { getProducts } from '../Redux/ProductsReducer/action';



const Products = () => {
  const dispatch = useDispatch();
  const [searchPrams, setSearchParams] = useSearchParams()


 

  const productList = useSelector((reduxStore) => reduxStore.ProductsReducer.products);

  const query = {"brand" : searchPrams.getAll("brand")}
 

  useEffect(()=>{
    dispatch(getProducts({params: query}))
    setSearchParams(query)
  },[])


  if(!productList.length > 0){
    return <h1>Loading...</h1>
  }

  return (
    <>
<SubCatCard/>

<SelectFilter/>
<SliderFilter/>
      


      <SimpleGrid minChildWidth={"250px"} spacing='40px'>
        {
          productList && productList.map((el, i) => <Box height='500px' key={i}> <ProductCard {...el} /> </Box>)
        }
      </SimpleGrid>

    </>
  )
}

export default Products