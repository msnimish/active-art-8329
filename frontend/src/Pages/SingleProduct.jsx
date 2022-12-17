import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Heading, Text, Image, Button, Badge, UnorderedList, ListItem, Input } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { TbHeartPlus } from "react-icons/tb"
import { BsFillShareFill } from "react-icons/bs"
import { MdOutlineStoreMallDirectory } from "react-icons/md"
import { TbArrowBigLeft } from "react-icons/tb"
import { BiCalendar } from "react-icons/bi"
import { FaCarSide } from "react-icons/fa"

import SimilarProduct from '../Components/Rohit/SimilarProduct';



const SingleProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((reduxStore) => reduxStore.SingleProductReducer.product);
  let arr = new Array(7).fill(product)

  console.log(arr)
  return (
    <Container minW={"100%"}>
      <Text mt={"10px"} mb={"10px"}>{product.title}</Text>
      <Flex>
        <Box width={"35%"}>
          <Image objectFit={"cover"} width={"100%"} src={product.image} alt='Dan Abramov' />
        </Box>

        <Spacer />


        <Box width="60%"
        display="flex"
        flexDirection="column"
        gap="20px"
        >

          <Box 
          display="flex" 
          flexDirection="column"
          >
            <Box display={"flex"} alignItems="center">
              <Heading mt="0px" fontSize="xl" color="red.400">₹</Heading>
              <Heading fontSize="3xl" color="red.600">{product.price}</Heading>
              <Box display="flex" alignItems="baseline"><Text fontSize="md" color="gray.500" ml="10px" >Inclusive of all taxes</Text>
              </Box>

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

          <Flex direction="column"  gap="15px">
            <Flex justifyContent="space-between" maxW="400px">
              <Flex gap="3px" ><Text>Size:</Text><Text>Select a Size</Text></Flex> 
              <Text><a href="#">Size Guide</a></Text>
            </Flex>
            <Flex  gap="10px" >
              {
                ["SM", "MD", "LG", "XL", "XXL"].map((el, i) => <Flex key={i} width="50px" height="40px" ring="1px" ringColor="gray.400" rounded="1px"  gap="10px" alignItems="center" fontSize="16px" justifyContent="center" transition=".3s" _active={{ fontSize: "13px" }}><Text fontWeight="400">{el}</Text></Flex>)
              }
            </Flex>
            <Button colorScheme='orange' rounded="0px" maxW="400px" width="100%" >Orange</Button>
          </Flex>

          <Flex justifyContent="space-between" maxW="400px">
            <Flex alignItems="center" gap="5px"><TbHeartPlus size={25} />Add to Favourites</Flex>
            <Flex alignItems="center" gap="5px"><BsFillShareFill size={20} />Share</Flex>
          </Flex>

          <Flex direction="column" gap="10px">
            <Badge colorScheme='red' maxW="120px">PROMOTION OFFER</Badge>
            <Flex gap="4px"><Text>Shop for Rs. 2,999 & Get 10% Off. Code - EOSS10</Text><Text textDecoration="underline"><a href="#">Browse promotion</a></Text>
            </Flex>
          </Flex>


          <Flex direction="column" gap="10px">

            <Flex gap="10px">
              <Box ><MdOutlineStoreMallDirectory size={25} /></Box>
              <Flex direction="column">
                <Text fontWeight="500" >Click & Collect</Text>
                <Flex direction="column">
                  <Text>Order this product now and collect it from a store of your choice.</Text>
                  <Text textDecoration="underline" color="orange"><a href="#">Learn more</a></Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex gap="10px">
              <Box ><TbArrowBigLeft size={25} /></Box>
              <Flex direction="column" >
                <Text fontWeight="500" >10 days easy return policy.</Text>
                <Text textDecoration="underline" color="orange"><a href="#">Learn more</a></Text>
              </Flex>
            </Flex>


            <Flex gap="10px">
              <Box ><MdOutlineStoreMallDirectory size={25} /></Box>
              <Flex direction="column">
                <Text fontWeight="500" >Pay in installments</Text>
                <Flex direction="column">
                  <Text>Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks.</Text>
                  <Text textDecoration="underline" color="orange"><a href="#">Learn more</a></Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex gap="10px">
              <Box><FaCarSide size={25} /></Box>
              <Box>
                <Text fontWeight="500" >When will I receive my order?</Text>
                <Flex alignItems="center" gap="10px">
                  <Input placeholder='large size' size='lg' height="40px" rounded="2px" />
                  <Button colorScheme='orange' rounded="2px" height="40px">Orange</Button>
                </Flex>
              </Box>
            </Flex>

          </Flex>

          <Box>

            <Text fontWeight={500}>Overview</Text>
            <Text>Upgrade your basic collection with this slim-fit T-shirt features a crew neckline, short sleeves, and floral prints.</Text>

            <UnorderedList>
              <ListItem>Type : Crew Neck</ListItem>
              <ListItem>Design : Floral Print</ListItem>
              <ListItem>Neckline : Crew-Neck</ListItem>
              <ListItem>Length : Regular</ListItem>
              <ListItem>Sleeve Length : Half Sleeves</ListItem>
              <ListItem>Fabric : Cotton</ListItem>
              <ListItem>Fit : Slim</ListItem>
              <ListItem>Care Instructions : Machine Wash</ListItem>
              <ListItem>Model Wears : Size M, has Height 6'0" and Chest 38"</ListItem>
              <ListItem>Occasion : Casual</ListItem>
              <ListItem>Product : T-shirt</ListItem>
              <ListItem>Country of Origin : India</ListItem>
              <ListItem>Manufactured By : Aditya Birla Fashion and Retail Limited</ListItem>
              For Consumer Complaints Contact : Manager Commercial, Lifestyle International Pvt. Ltd. 1800-123-1555
              <ListItem>Net Quantity : 1 N</ListItem>
            </UnorderedList>

          </Box>




        </Box>
      </Flex>


      <Box>
        <Heading>You may also like</Heading>
        <SimilarProduct arr={arr} />
      </Box>

      <Box>
        <Heading>Customers Also Viewed</Heading>
        <SimilarProduct arr={arr} />
      </Box>

    </Container>
  )
}

export default SingleProduct