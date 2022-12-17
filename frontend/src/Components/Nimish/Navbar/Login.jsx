import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react'
import styled from 'styled-components'

const LoginWrapper = styled.div`

font-family: "Proxima Nova"

`

const Login = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    

  return (
    <LoginWrapper>
        <Button variant='ghost' _hover={ {color:"#FAA619"}} onClick={ onOpen } fontFamily={"Proxima Nova"}>{props.status?"LOGIN":"Already have an account?"}</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="0px">
          <ModalHeader>LOG IN</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="10px">
            <Input fontFamily="Proxima Nova" placeholder='Email' borderRadius={"0"}/>
            <Input fontFamily="Proxima Nova" placeholder='Password (More than 8 characters)' borderRadius={"0"}/>
          </ModalBody>

          <ModalFooter>
            <Button bg="#Faa619" mr={3} onClick={handleClick} borderRadius="0" color="white" _hover={{bg:"#FAA619", color:"black", transition:"0.1s"}}>
              LOG IN
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LoginWrapper>
  )
}

export default Login