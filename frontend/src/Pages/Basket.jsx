import React from 'react'
import { Text,Box } from "@chakra-ui/react"
import MybagSec from '../Components/Anu/MybagSec'
import { Divider } from '@chakra-ui/react'
const Basket = () => {
  return (
    <div>
      <Text fontSize={"40px"} backgroundColor="teal">.</Text>
      <Text fontSize={"40px"} backgroundColor="teal">Basket</Text>
      <Divider />
      <MybagSec />

    </div>
  )
}

export default Basket