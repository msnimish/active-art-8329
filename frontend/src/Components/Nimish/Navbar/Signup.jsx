import { Button } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Login from './Login'
import axios from "axios"

const LoginWrapper = styled.div`

font-family: "Proxima Nova"

.SignUpBtn{
    border-left: 1px solid #c7c7c7;
    border-radius: 0px;
}
.SignUpBtn:hover{
    background-color: transparent;
    color: #FAA619
}
`

const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ signupStatus, setSignupStatus ] = useState("Already have an account?");

    const handleSubmit = (e) => {
      e.prevent.default();
      
    }

    useEffect(() => {
        axios.post("/signup", (req,res)=>{

        })
    }, []);

  return (
    <LoginWrapper>
        <Button onClick={ onOpen } fontFamily={"Proxima Nova"} bg={"none"} fontSize="1em" className="SignUpBtn">Sign Up / Sign In</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="0px">
          <ModalHeader>SIGN UP</ModalHeader>
          <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" gap="10px">
              <form onSubmit = {(e)=>handleSubmit(e)} id="signupForm">
              <FormControl>
                <Input fontFamily="Proxima Nova" placeholder='Full Name' borderRadius={"0"} value={name} onChange={(e)=> setName(e.target.value)}/>
                <Input fontFamily="Proxima Nova" placeholder='Email' borderRadius={"0"} value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                <Input fontFamily="Proxima Nova" placeholder='Password (More than 8 characters)' borderRadius={"0"} value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </FormControl>
            </form>
            </ModalBody>
          <ModalFooter>
            <Button type="submit" bg="#Faa619" mr={3} borderRadius="0" color="white" _hover={{bg:"#FAA619", color:"black", transition:"0.1s"}} form="signupForm" >
              SIGN UP
            </Button>
            <Login message={signupStatus} onClick={ onClose }/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LoginWrapper>
  )
}

export default Signup