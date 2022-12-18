
import React, { useEffect, useState } from "react";
import { getCart, removeCart } from "../../Redux/CartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Img,
  Stack,
  Table,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { BagModalSec } from "./BagModalSec";

import React from 'react'
import { Box, Button, Container, Flex, HStack, Img, Stack, Table, Text, VStack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { BagModalSec } from "./BagModalSec"









function MybagSec() {
    const data = useSelector((reduxStote) => reduxStote.CartReducer.products);
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch()
 
    console.log(data)

  let mrp = 0;
  let stp = 0;

  if (data) {
    for (let i = 0; i < data.length; i++) {
      mrp = mrp + data[i].price;
      stp = stp + data[i].strikedPrice;
    }
  }


  const handleDelete = (id)=>{
dispatch(removeCart(id))
  }
 





  useEffect(() => {
    dispatch(getCart);
  }, []);

  return (
    <div>
      <Box w={"85%"} m="auto" h={"auto"}>
        <Text
          fontSize={{
            base: "16px",
            md: "24px",
            lg: "24px",
          }}
          textAlign={{
            base: "center",
            md: "left",
            lg: "left",
          }}
          p="10px"
        >
          Your Shopping Basket
        </Text>
        {/* <Box border={"1px"} color="gray.300"></Box> */}
        <Divider />
        {/* ................................................................... */}

        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          gap={"20px"}
          p={"10px"}
        >
          <Box w={[300, 400, 900]} p="20px">
            {data &&
              data.map((item) => {
                return (
                  <Box
                    gap="20px"
                    border={"1px solid gray"}
                    mt={"20px"}
                    p="10px"

                    borderColor={"#EFEFEF"}
                  >
                    <HStack>
                      <Box>
                        {" "}
                        <Img h="130px" w="120px" src={item.image} alt=""></Img>
                      </Box>
                      <VStack alignItems={"start"}>
                        <Text> {item.title}</Text>

                        <Text display={"flex"} gap={"6px"}>
                          <Text color={"gray.400"}>
                            ₹ <strike>{item.strikedPrice}</strike>
                          </Text>
                          <Text>₹{item.price}</Text>
                          <Text color={"green"}>
                            ₹{item.strikedPrice - item.price}{" "}
                          </Text>
                          <Text color={"green"}>Saved</Text>
                        </Text>

                        <Text display={"flex"} gap={"6px"}>
                          {" "}
                          <Text color={"gray.400"}>Colour:</Text>{" "}
                          <Text>{item.colour}</Text>
                        </Text>
                        <Text display={"flex"} gap={"6px"}>
                          {" "}
                          <Text color={"gray.400"}>Size:</Text>{" "}
                          <Text>{item.size}</Text>
                        </Text>
                      </VStack>
                    </HStack>
                    {/* ...................... */}
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box>
                        <Img
                          src="https://cdn-icons-png.flaticon.com/128/747/747310.png"
                          width={"10px"}
                          mt={"10px"}
                          ml={"3px"}
                          h="15px"
                        ></Img>
                        <Box display={"flex"} ml={"20px"} mt={"-20px"}>
                          <Text color={"gray.400"}>Delivery in </Text>
                          <Text ml={"10px"}>5-7 days</Text>

             
                        </Box>
                      </Box>

                      {/* .......................... modal.invoke.......................................... */}

                      <BagModalSec item={item} />
                      {/* ............................................................................................ */}
                    </Box>

                    <Divider mt={"10px"} />

                    <Box
                      p={"10px"}
                      justifyContent={"space-around"}
                      display={["block", "flex"]}
                    >
                      <Button onClick={()=>handleDelete(item._id)} backgroundColor={"white"} color={"#FAA619"}>
                        Remove
                      </Button>
                      <Button backgroundColor={"white"} color={"#FAA619"}>
                        Move To Favourites
                      </Button>
                    </Box>
                  </Box>
                );
              })}
          </Box>

          {/* sec Sec.................................................................................................. */}

          <Box w={[300, 400, 400]}>
            <Box
              fontSize={"14px"}
              mt={"10%"}
              display={"flex"}
              border="1px solid gray"
              borderColor={"#EFEFEF"}
              alignItems={"center"}
              p="10px"
              justifyContent={"space-between"}
            >
              <Text>Deliver to </Text>
              <Text mr="30%">800001</Text>

              <Button backgroundColor={"white"} color={"#FAA619"}>
                Change
              </Button>
            </Box>

            <HStack
              mt={"5px"}
              border="1px solid gray"
              p="10px"
              justifyContent={"space-between"}
              alignItems={"normal"}
              borderColor={"#EFEFEF"}
            >
              <Img
                src="https://www.lifestylestores.com/static/icons/gift-box.png"
                w="26%"
              ></Img>
              <VStack>
                <Text fontSize={"16px"} mt={"10px"} mr={"40%"}>
                  Offers for You!
                </Text>
                <Text fontSize={"14px"}>
                  Choose and apply voucher in 2 simple steps
                </Text>
              </VStack>

              <Button backgroundColor={"white"} color={"#FAA619"}>
                Select
              </Button>
            </HStack>

            <Box mt={"10px"} border={"1px"} borderColor={"#EFEFEF"}>
              <Box
                fontSize={[14, 14, 16]}
                mt={"3%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p="10px"
              >
                <Text>Total MRP</Text>
                <Text>₹{stp}</Text>
              </Box>
              <Box
                fontSize={[14, 14, 16]}
                mt={"3%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p="10px"
              >
                <Text>Offer discount</Text>
                <Text color={"green"}>- ₹{stp - mrp}</Text>
              </Box>
              <Box
                fontSize={[14, 14, 16]}
                mt={"3%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p="10px"
              >
                <Text>Shipping charge</Text>
                <Text>- Free</Text>
              </Box>
              <Divider />
              <Box
                fontSize={"16px"}
                mt={"3%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p="10px"
              >
                <Text>Total </Text>
                <Text>₹{mrp}</Text>
              </Box>

              <Button
                w={[270, 300, 355]}
                p={"15px"}
                ml={"15px"}
                border={"1px"}
                color={"white"}
                mb={"10px"}
                borderColor={"#EFEFEF"}
                backgroundColor={"#FAA619"}
              >
                Checkout now
              </Button>
              <Text w={[270, 270, 350]} backgroundColor={"#EFEFEF"} m={"auto"}>
                Shipping charges might vary based on pincode delivery location
              </Text>
            </Box>

            <Box mt={"10px"} p={"10px"} border={"1px "} borderColor={"#EFEFEF"}>
              <Box w={"90%"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Img
                    src="https://cdn-icons-png.flaticon.com/128/1139/1139982.png"
                    alt="img"
                    w={"30px"}
                  ></Img>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    fontFamily={"sans-serif"}
                    ml={"20px"}
                  >
                    Landmark Reward points
                  </Text>
                </Box>
                <Text fontSize={"14px"} textAlign={"left"} p={"4px"}>
                  Get 7 points with this purchase and redeem on the payment page
                  in next eligible purchase(s)
                </Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default MybagSec;
