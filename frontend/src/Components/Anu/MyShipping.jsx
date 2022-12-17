
import {
    FormControl, FormLabel, GridItem, Heading, SimpleGrid,
    Input, Box, Divider, Img, Stack, Text,
    Flex, chakra, Select, Checkbox, RadioGroup, Radio, Button,

} from '@chakra-ui/react'

import React from 'react'

const MyShipping = () => {
    return (
        <>
            <Box>

                <Box p={"10px"}>
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
            {/* main box..................................................... */}

            <Box w={ "74%"} m={"auto"}>
                <Box p="16px" >
                    <Text fontSize={{ base: "12px", lg: "20px", md: "16px" }} fontFamily={"sans-serif"} fontWeight={"medium"}>
                        Shipping & Payment
                    </Text>
                </Box>

                <Divider w={"85%"} />
                

                <Stack direction={{ base: "column", md: "column", lg: "row" }} mt={"10px"}>
                    <Box w={["100%", "100%","65%"]} border={"1px "} borderColor={"#EFEFEF"} >

                        <Box p={"15px"} >
                            <Text mt={"5%"} fontSize={{ base: "14px", md: "16px", lg: "20px" }}>
                                Shipping method
                            </Text>
                            <Box display={"flex"} justifyContent={"space-around"} mt={"7%"}>
                                <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }} fontWeight={"medium"}>Home Delivery</Text>
                                <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }} fontWeight={"medium"}>Pick from nearby store</Text>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"} w={"90%"} m={"auto"}>
                                <Text fontSize={{ base: "10px", md: "12px", lg: "14px" }}>(Get your product delivered to your home)</Text>
                                <Text fontSize={{ base: "10px", md: "12px", lg: "14px" }}>(Collect your order from a store of your choice)</Text>
                            </Box>

                        </Box>

                        <Divider/>
                        <Box border={"2px"} w={"50%"} bg={"#FAA619"} borderColor={"#FAA619"}></Box>
                        <Box p={"15px"}>
                            <Text fontWeight={"medium"}>Add new address</Text>
                        </Box>
                        {/* form */}
                        <Box   >
                            <Stack 
                                px={4}
                                py={5}
                                p={[null, 6]}

                                bg="white"
                                _dark={{
                                    bg: "#141517",
                                }}
                                spacing={6}
                            >
                                <SimpleGrid columns={6} spacing={6} >

                                    <FormControl as={GridItem} colSpan={[6, 3]} >
                                        <FormLabel
                                            htmlFor="first_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "#929391",
                                            }}
                                        >
                                            Full Name
                                        </FormLabel>

                                        <Input

                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            mt={1}
                                            focusBorderColor="#929391"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}
                                            placeholder='Enter your name'
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3]} >
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}
                                        >
                                            Mobile Number
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}
                                            placeholder={"+91 Enter  mobile number"}

                                        />
                                    </FormControl>



                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"20px"}>
                                        <FormLabel
                                            htmlFor="first_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "#929391",
                                            }}
                                        >
                                            Pincode
                                        </FormLabel>

                                        <Input

                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            mt={1}
                                            focusBorderColor="#929391"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}
                                            placeholder='Enter your pincode'
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"20px"}>
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}
                                        >
                                            City
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}
                                            placeholder='Enter your city or town'
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"20px"}>
                                        <FormLabel
                                            htmlFor="first_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "#929391",
                                            }}
                                        >
                                            State
                                        </FormLabel>

                                        <Input

                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            mt={1}
                                            focusBorderColor="#929391"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}
                                            placeholder='Enter your state'
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"20px"}>
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}
                                        >
                                            Building name or number
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}
                                            placeholder='Enter building details'
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"20px"}>
                                        <FormLabel
                                            htmlFor="first_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "#929391",
                                            }}
                                        >
                                            Street name or number
                                        </FormLabel>

                                        <Input

                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            mt={1}
                                            focusBorderColor="#929391"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}
                                            placeholder='Enter your street details'
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3]} mt={"20px"}>
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}

                                        >
                                            Landmark
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            h={"80%"}



                                            placeholder='Enter landmark details'
                                        />
                                    </FormControl>





                                </SimpleGrid>

                                <Box  >
                                    <Text mt={"10px"}>Address Type</Text>
                                </Box>
                                <RadioGroup defaultValue='2'>
                                    <Stack spacing={5} direction='row'>
                                        <Radio colorScheme='orange' value='1'>
                                            Home
                                        </Radio>
                                        <Radio colorScheme='orange' value='2'>
                                            Office
                                        </Radio>
                                    </Stack>
                                </RadioGroup>

                                <Box display={"flex"} >
                                    <Checkbox colorScheme={"orange"}></Checkbox>
                                    <Text ml={"10px"}>Use this as my default shipping address</Text>
                                </Box>
                                <Divider />
                                <Box>
                                    <Button color={"white"} bg={"#FAA619"}
                                    w={["100%","100%","100%"]}
                                    fontSize={{ base: '9px', md: '14px', lg: '16px' }}
                                    >ADD ADDRESS & CONTINUE</Button>
                                </Box>



                            </Stack>
                        </Box>

                    </Box>

                    {/* sec.......#46B275 green... #929391 gray......part */}
                    <Box  w={[220, 300, 330]}  ml={"10x"}  >

                        <Box border={"1px"} borderColor={"#EFEFEF"} p={"15px"}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Text fontSize={{ base: '14px', md: '12px', lg: '14px' }}>Total MRP</Text>
                                <Text fontSize={{ base: '14px', md: '12px', lg: '14px' }} fontWeight={"medium"}>₹3999</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"}>Offer discount</Text>
                                <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"}color={"#46B275"}fontWeight={"medium"}> -₹1200</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"} >Standared Ground Shipping</Text>
                                <Text fontSize={{ base: '14px', md: '14px', lg: '14px' }} mt={"10px"} color={"#46B275"} fontWeight={"medium"}>Free</Text>
                            </Box>
                            <Divider  mt={"10px"}/>
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
                        <Box  mt={"15px"} p={"15px"} >
                            <Img src="https://i1.lmsin.net/website_images/in/checkout/comodo-secure-icon.svg"alt="img3"></Img>
                            <Text fontSize={{ base: '12px', md: '12px', lg: '12px' }} mt={"10px"} color={"#929391"}>Your credit card details are securely encrypted and passed directly to our PCI DSS compliant Payment Gateway for processing. We only store your credit card's last 4 digits and the expiration date. Your traffic to this page is secured using either a 256-bit or 128-bit SSL certificate depending on your browser version.</Text>
                            <Text mt={"10px"} fontSize={{ base: '12px', md: '12px', lg: '12px' }} color={"#929391"}>© 2021 RNA Intellectual Property Limited.</Text>
                            <Text mt={"10px"} fontSize={{ base: '12px', md: '12px', lg: '12px' }} color={"#929391"}>Privacy Policy
                                -
                                Terms of Use
                                -
                                Terms & Conditions</Text>
                        </Box>
                    </Box>



                </Stack>



            </Box>




        </>
    )
}

export default MyShipping