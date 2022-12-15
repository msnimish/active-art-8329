import { Box, Divider, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const MyShipping = () => {
    return (
        <div>
            <Box border={"1px solid red"} p={"10px"}  direction={{ base: "column", md: "row", lg: "row" }} gap={"10px"} >
                <Box  >
                    <Img src="https://i1.lmsin.net/website_images/in/logos/logo-lifestyle.svg" 
                        alt=""></Img>
                </Box>
                <Box display={"flex"} w={"20%"} ml={"920px"} mt={"-45px"}  gap={"20px"}>
                    <Img src={"https://cdn-icons-png.flaticon.com/128/1509/1509974.png"} alt=""
                        w={"20px"}
                    ></Img>
                    <Text fontSize={"12px"}>Call 1800-123-1555</Text>
                </Box>
                <Text w={"30%"} ml={"845px"} fontSize={"12px"}>Monday - Saturday, 09:00 AM - 07:00 PM</Text>



            </Box>
            <Divider mt={"10px"} />


        </div>
    )
}

export default MyShipping