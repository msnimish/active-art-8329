import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Heading, Text, Image, Button} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { TbHeartPlus } from "react-icons/tb"
import { BsFillShareFill } from "react-icons/bs"


import SimilarProduct from '../Components/Rohit/SimilarProduct';
import Overview from '../Components/Rohit/Single/Overview';
import StaticDetails from '../Components/Rohit/Single/StaticDetails';
import { addToCart} from "../Redux/CartReducer/action"
import { getSingleProd } from "../Redux/SingleProductReducer/action"
import { useParams } from 'react-router-dom';



const SingleProduct = () => {
  const [size, setSize] = useState("Select a Size")
  const dispatch = useDispatch();
  const {id} = useParams()
  const product = useSelector((reduxStore) => reduxStore.SingleProductReducer.product);
 


  let arr = new Array(7).fill(product)



  const toCart = ()=>{
dispatch(addToCart(product))
  }


  useEffect(()=>{
dispatch(getSingleProd(id))
  })



  return (
    <Container minW={"100%"}>
      <Text mt={"10px"} mb={"10px"}>{product.title}</Text>
      <Flex pb="20px">
        <Box width={"35%"}>
          <Image objectFit={"cover"} width={"100%"} src={product.image} alt='Dan Abramov' />
        </Box>

        <Spacer />

        <Box width="60%" display="flex" flexDirection="column" gap="20px">
          <Box display="flex" flexDirection="column">
            <Box display={"flex"} alignItems="center">
              <Heading mt="0px" fontSize="xl" color="red.400">₹</Heading>
              <Heading fontSize="3xl" color="red.600">{product.price}</Heading>
              <Box display="flex" alignItems="baseline"><Text fontSize="md" color="gray.500" ml="10px" >Inclusive of all taxes</Text></Box>
            </Box>
            <Box display="flex" gap="10px">
              <Text>{product.price}</Text> | <Text>Save ₹ 200 (20.02%)</Text>
            </Box>
            <Text color="orange">Free shipping on all orders</Text>
          </Box>
          <Flex direction="column" gap="10px">
            <Image src={product.image} width="50px" height="50px" p="3px" ring="1px" ringOffset="2px" rounded="5px" ringColor="orange" />
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
          <Overview />
        </Box>
      </Flex>
      <Box>
        <Heading size="xl" mt="10px" mb="10px">You may also like</Heading>
        <SimilarProduct arr={arr} />
      </Box>
      <Box>
        <Heading size="xl" mt="10px" mb="10px">Customers Also Viewed</Heading>
        <SimilarProduct arr={arr} />
      </Box>
    </Container>
  )
}

export default SingleProduct