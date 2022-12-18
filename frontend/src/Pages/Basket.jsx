import React from 'react'
import { Text, Box } from "@chakra-ui/react"
import MybagSec from '../Components/Anu/MybagSec'
import { Divider } from '@chakra-ui/react'
import MyShipping from '../Components/Anu/MyShipping'
import MyPaymentSec from '../Components/Anu/MyPaymentSec'

const Basket = () => {
  return (
    <div>
      {/* <Text fontSize={"40px"} backgroundColor="teal">.</Text>
      <Text fontSize={"40px"} backgroundColor="teal">Basket</Text> */}
      <Divider />
      <MybagSec />
      <MyShipping/>
      <MyPaymentSec />


    </div>
  )
}

export default Basket