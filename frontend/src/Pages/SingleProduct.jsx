import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Heading, Text, Image, Button} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { TbHeartPlus } from "react-icons/tb"
import { BsFillShareFill } from "react-icons/bs"
import Alert from '../Components/Rohit/Alert';


import Overview from '../Components/Rohit/Single/Overview';
import StaticDetails from '../Components/Rohit/Single/StaticDetails';
import { addToCart} from "../Redux/CartReducer/action"
import { getSingleProduct } from "../Redux/SingleProductReducer/action"
import { getProducts } from '../Redux/ProductsReducer/action';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/Nimish/Navbar/Navbar';
import Footer from '../Components/Nimish/Footer/Footer';
import SimilarProducts from '../Components/Rohit/SimilarProducts';



const SingleProduct = () => {
  const [size, setSize] = useState("Select a Size")
  const dispatch = useDispatch();
  const {productID} = useParams()

  const product = useSelector((reduxStore) => reduxStore.SingleProductReducer.product);

  const toCart = ()=>{
    if(product[0].price != 750){
      
      dispatch(addToCart(product[0]));
    }else{
      alert ("Select a size")
    }
  }


  useEffect(()=>{
dispatch(getSingleProduct(productID))
dispatch(getProducts())
  },[productID])

  return (
    <>
    <Navbar/>
    {
      product ?   
       <Container minW={"80%"}>
      <Text mt={"10px"} mb={"10px"}>{product[0].title}</Text>
      <Flex pb="20px">
        <Box width={"35%"}>
          <Image objectFit={"cover"} width={"100%"} src={product[0].image} alt='Dan Abramov' />
        </Box>

        <Spacer />

        <Box width="60%" display="flex" flexDirection="column" gap="20px">
          <Box display="flex" flexDirection="column">
            <Box display={"flex"} alignItems="center">
              <Heading mt="0px" fontSize="xl" color="red.400">₹</Heading>
              <Heading fontSize="3xl" color="red.600">{product[0].price}</Heading>
              <Box display="flex" alignItems="baseline"><Text fontSize="md" color="gray.500" ml="10px" >Inclusive of all taxes</Text></Box>
            </Box>
            <Box display="flex" gap="10px">
              <Text>{product[0].price}</Text> | <Text>Save ₹ 200 (20.02%)</Text>
            </Box>
            <Text color="orange">Free shipping on all orders</Text>
          </Box>
          <Flex direction="column" gap="10px">
            <Image src={product[0].image} width="50px" height="50px" p="3px" ring="1px" ringOffset="2px" rounded="5px" ringColor="orange" />
            <Box display="flex" gap="5px"><Text color="gray">Color :</Text>{"Select a color"}</Box>
          </Flex>
          <Flex direction="column" gap="15px">
            <Flex justifyContent="space-between" maxW="400px">
              <Flex gap="3px" ><Text>Size:</Text><Text>{size}</Text></Flex>
              <Text><a href="#">Size Guide</a></Text></Flex>
            <Flex gap="10px" >
              {
                ["SM", "MD", "LG", "XL", "XXL"].map((el, i) => <Flex key={i} onClick={()=>setSize(el)} width="50px" height="40px" ring="1px" ringColor="gray.400" rounded="1px" gap="10px" alignItems="center" fontSize="16px" justifyContent="center" transition=".3s" _active={{ fontSize: "13px" }}><Text fontWeight="400">{el}</Text></Flex>)
              }
            </Flex>
            <Button onClick={toCart} colorScheme='orange' rounded="0px" maxW="400px" width="100%" >ADD TO CART</Button>
          </Flex>
          <Flex justifyContent="space-between" maxW="400px">
            <Flex alignItems="center" gap="5px"><TbHeartPlus size={25} />Add to Favourites</Flex>
            <Flex alignItems="center" gap="5px"><BsFillShareFill size={20} />Share</Flex>
          </Flex>
          <StaticDetails />
          <Overview prod={product[0]}/>
        </Box>
      </Flex>
     
      <SimilarProducts prod={product[0]}/>
    </Container>
     : null
    }
    <Footer/>
    </>
  )
}

export default SingleProduct