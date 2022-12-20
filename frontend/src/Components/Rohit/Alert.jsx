import React from 'react'

import { Box, Container, Heading, Text, Image, Button, Flex, AlertIcon} from '@chakra-ui/react'


const Alert = () => {
  return (
    <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
  )
}

export default Alert
