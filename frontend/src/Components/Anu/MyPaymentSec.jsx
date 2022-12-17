import React from 'react'
import { Box, Img, Stack, Text, Divider, Button, HStack, VStack, FormControl, FormLabel, Input, GridItem, Checkbox } from "@chakra-ui/react"
const MyPaymentSec = () => {
    return (
        <div>
            <Box>

                <Box p={"10px"} >
                    <Box>
                        <Img src="https://i1.lmsin.net/website_images/in/logos/logo-lifestyle.svg" alt="img1" w={[100, 100, 100]} ml={"10%"}></Img>
                    </Box>
                    <Box display={"flex"} gap={"10px"} w={"17% "} ml={"80%"} mt={"-30px"}>
                        <Img src="https://cdn-icons-png.flaticon.com/512/1151/1151429.png" alt="img2" w={["12px", "12px", "25px"]}></Img>
                        <Text fontSize={{ base: "8px", lg: "12px", md: "10px" }} color={"#929391"}> Call 1800-123-1555</Text>
                    </Box>
                    <Box>
                        <Text fontSize={{ base: "8px", lg: "12px", md: "10px" }} w={"25%"} ml={"75%"} color={"#929391"}>Monday - Saturday, 09:00 AM - 07:00 PM</Text>
                    </Box>
                </Box>
                <Divider />


            </Box>
            {/* nav end................................. */}


            <Box w={"80%"} m={"auto"} mt={"10px"}>
                <Stack direction={{ base: 'column', md: "row", lg: "row" }} gap={"20px"}>
                    <Box w="65%" border={"1px"} borderColor={"#EFEFEF"}>
                        <Box borderBottom={"1px"} p={"20px"} borderColor={"#EFEFEF"}>
                            <Text fontSize={"20px"}>
                                Payment method
                            </Text>
                        </Box>

                        <HStack   >

                            <VStack w={"27%"}  >

                                {/* left */}
                                <Box bg={"#EFEFEF"} w={"100%"}>
                                    <Box display={"flex"} p={"15px"}  >
                                        <Img src="https://cdn-icons-png.flaticon.com/128/4108/4108841.png" alt="img" w={"20px"} />
                                        <Text fontSize={"14px"} ml={"10px"}>UPI</Text>
                                    </Box>
                                    <Text p={"15px"} fontSize={"10px"} >pay with your prederred UPI Id.</Text>
                                </Box>

                                {/*  */}

                                <Box bg={"white"} borderLeft={"3px solid orange"} w={"100%"}>
                                    <Box display={"flex"} p={"15px"}>
                                        <Img src="https://cdn-icons-png.flaticon.com/128/918/918649.png" alt="img" w={"20px"} />
                                        <Text fontSize={"14px"} ml={"10px"}>Credit/ debit card</Text>
                                    </Box>
                                    <Text p={"15px"} fontSize={"10px"} mt={"-14px"}>Use your Creadit or Debit card.</Text>
                                </Box>



                                <Box bg={"#EFEFEF"} w={"100%"}>
                                    <Box display={"flex"} p={"10px"}  >
                                        <Img src="https://cdn-icons-png.flaticon.com/128/2655/2655004.png" alt="img" w={"20px"} />
                                        <Text fontSize={"14px"} ml={"10px"}>Net Banking</Text>
                                    </Box>
                                    <Text p={"15px"} fontSize={"10px"} mt={"-14px"}>pay by your preferred bank.</Text>
                                </Box>

                                <Box bg={"#EFEFEF"} w={"100%"}>
                                    <Box display={"flex"} p={"15px"}  >
                                        <Img src="https://cdn-icons-png.flaticon.com/128/2527/2527857.png" alt="img" w={"20px"} />
                                        <Text fontSize={"14px"} ml={"10px"}>Wallets</Text>
                                    </Box>
                                    <Text p={"15px"} fontSize={"10px"} mt={"-14px"}>pay with your prederred wallet.</Text>
                                </Box>

                                <Box bg={"#EFEFEF"} w={"100%"}>
                                    <Box display={"flex"} p={"15px"}  >
                                        <Img src="https://cdn-icons-png.flaticon.com/128/2413/2413035.png" alt="img" w={"20px"} />
                                        <Text fontSize={"14px"} ml={"10px"}>EMI</Text>
                                    </Box>
                                    <Text p={"15px"} fontSize={"10px"} mt={"-14px"}>Available on orders above ₹3000.</Text>
                                </Box>

                                <Box bg={"#EFEFEF"} w={"100%"} >
                                    <Box display={"flex"} p={"15px"}  >
                                        <Img src="https://cdn-icons-png.flaticon.com/128/4323/4323966.png" alt="img" w={"20px"} />
                                        <Text fontSize={"14px"} ml={"10px"}>Cash On Delivery</Text>
                                    </Box>
                                    <Text p={"15px"} fontSize={"10px"} mt={"-14px"}>pay after delivery.</Text>
                                </Box>







                            </VStack>





                            <VStack w={"60%"} h={"auto"} >
                                {/* right */}
                                <Box p="15px" w={"100%"} >
                                    <Box >
                                        <Text fontFamily={"sans-serif"} fontWeight={"medium"}>Add a new card</Text>
                                    </Box>

                                </Box>
                                <Divider />

                                <Box w="100% " >
                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"10px"} p={"10px"}>
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}

                                        >
                                            Card Number
                                        </FormLabel>
                                        <Input

                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="m"
                                            size="sm"
                                            w="full"
                                            h={"50px"}



                                            placeholder='Enter Card Number'
                                        />
                                    </FormControl>
                                </Box>
                                <Box w="100% " >
                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"10px"} p={"10px"}>
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}

                                        >
                                            Name on Card
                                        </FormLabel>
                                        <Input

                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="m"
                                            size="sm"
                                            w="full"
                                            h={"50px"}



                                            placeholder='Enter Name on card'
                                        />
                                    </FormControl>
                                </Box>

                                <Box w={"100%"} display={"flex"}>
                                    <Box w="40%"  >
                                        <FormControl as={GridItem} colSpan={[6, 3]} mt={"10px"} p={"10px"}>
                                            <FormLabel
                                                htmlFor="last_name"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{
                                                    color: "gray.50",
                                                }}

                                            >
                                                Expiry MM/YY
                                            </FormLabel>
                                            <Input

                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                autoComplete="family-name"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="m"
                                                size="sm"
                                                w="full"
                                                h={"50px"}



                                                placeholder='MM/YY'
                                            />
                                        </FormControl>
                                    </Box>

                                    <Box w="40%"  >
                                        <FormControl as={GridItem} colSpan={[6, 3]} mt={"10px"} p={"10px"}>
                                            <FormLabel
                                                htmlFor="last_name"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{
                                                    color: "gray.50",
                                                }}

                                            >
                                                CVV
                                            </FormLabel>
                                            <Input

                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                autoComplete="family-name"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="m"
                                                size="sm"
                                                w="full"
                                                h={"50px"}



                                                placeholder='Enter cvv Number'
                                            />
                                        </FormControl>
                                    </Box>



                                </Box>

                                <Box w={"100%"}>
                                    <Checkbox colorScheme='green' defaultChecked>
                                         Save this card for future transactions
                                    </Checkbox>
                                </Box>
                                <Box w={"100%"}>
                                    <Button w={"100%"} bg={"#FAA619"} color={"white"} p={"10px"}>PAY NOW</Button>
                                </Box>
                                <Box display={"flex"} w={"100%"}>
                                <Text fontSize={"12px"}>By clicking this button, you agree to our</Text>
                                <Text fontSize={"12px"} color={"#FAA619"}>Terms and Conditions</Text>
                                </Box>
                               
                            </VStack>


                        </HStack>

                        <Box display={"flex"}  alignItems={"center"} justifyContent={"space-between"}>
                            <Box display={"flex"}  alignItems={"center"}>
                                <Img src={"https://cdn-icons-png.flaticon.com/128/1692/1692277.png"} alt=""
                                w={"20px"}
                                ></Img>
                                <Text ml={"10px"}> Have a Gift Card ?</Text>
                            </Box>
                            <Box>
                              <Button bg={"white"}>+</Button>
                            </Box>
                        </Box>

                    </Box>



                    {/* 




*/}












                    {/* sec part */}
                    <Box >
                        <Box w={[220, 300, 330]} ml={"10x"}  >

                            <Box border={"1px"} borderColor={"#EFEFEF"} p={"15px"}>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text fontSize={{ base: '14px', md: '12px', lg: '14px' }}>Total MRP</Text>
                                    <Text fontSize={{ base: '14px', md: '12px', lg: '14px' }} fontWeight={"medium"}>₹3999</Text>
                                </Box>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"}>Offer discount</Text>
                                    <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"} color={"#46B275"} fontWeight={"medium"}> -₹1200</Text>
                                </Box>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"} >Standared Ground Shipping</Text>
                                    <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"} color={"#46B275"} fontWeight={"medium"}>Free</Text>
                                </Box>
                                <Divider mt={"10px"} />
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text fontSize={{ base: '18px', md: '18px', lg: '18px' }} mt={"10px"}>Total</Text>
                                    <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"} fontWeight={"medium"}>₹2799</Text>
                                </Box>
                            </Box>

                            <Box border={"1px "} borderColor={"#EFEFEF"}
                                display={"flex"} justifyContent={"space-between"}
                                alignItems={"center"} mt={"15px"} p={"15px"}>
                                <Text fontSize={{ base: '16px', md: '16px', lg: '16px' }}>Order summary</Text>
                                <Button bg={"#FAA619"} color={"white"}>Details</Button>
                            </Box>
                            <Box mt={"15px"} p={"15px"} >
                                <Img src="https://i1.lmsin.net/website_images/in/checkout/comodo-secure-icon.svg" alt="img3"></Img>
                                <Text fontSize={{ base: '12px', md: '12px', lg: '12px' }} mt={"10px"} color={"#929391"}>Your credit card details are securely encrypted and passed directly to our PCI DSS compliant Payment Gateway for processing. We only store your credit card's last 4 digits and the expiration date. Your traffic to this page is secured using either a 256-bit or 128-bit SSL certificate depending on your browser version.</Text>
                                <Text mt={"10px"} fontSize={{ base: '12px', md: '12px', lg: '12px' }} color={"#929391"}>© 2021 RNA Intellectual Property Limited.</Text>
                                <Text mt={"10px"} fontSize={{ base: '12px', md: '12px', lg: '12px' }} color={"#929391"}>Privacy Policy
                                    -
                                    Terms of Use
                                    -
                                    Terms & Conditions</Text>
                            </Box>
                        </Box>

                    </Box>
                </Stack>
            </Box>
        </div>
    )
}

export default MyPaymentSec