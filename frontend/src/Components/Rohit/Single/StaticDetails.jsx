import React from 'react'
import { Box, Text, Button, Badge, Input } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { MdOutlineStoreMallDirectory } from "react-icons/md"
import { TbArrowBigLeft } from "react-icons/tb"
import { FaCarSide } from "react-icons/fa"

const StaticDetails = () => {
    return (
        <Box>
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
                    <Flex direction="column" gap="7px">
                        <Text fontWeight="500" >When will I receive my order?</Text>
                        <Flex alignItems="center" gap="10px">
                            <Input placeholder='Enter Pin Code' size='lg' height="40px" rounded="2px" />
                            <Button colorScheme='orange' rounded="2px" height="40px">Orange</Button>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Box>
    )
}

export default StaticDetails
