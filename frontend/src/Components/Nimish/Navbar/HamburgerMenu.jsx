import { Button, ButtonGroup } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import React, { useRef } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import styled from 'styled-components';

const HamburgerContainer = styled.div`

    display: none;

    Button{
        background-color: transparent;
    }
    Button:hover{
        background-color: transparent;
    }

    .buttonGroup{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    @media all and (max-width: 992px){
        display: flex;
    }
`

const HamburgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
  return (
    <HamburgerContainer>
      <Button ref={btnRef} onClick={onOpen}>
        <AiOutlineMenu/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody display={"flex"} flexDirection={"column"}  mt={"30px"}>
            {/* <div className='buttonGroup'> */}
            <Button rightIcon={<BsChevronRight/>} justifyContent={"space-between"} bg={"transparent"}>Women</Button>
            <Button rightIcon={<BsChevronRight/>} justifyContent={"space-between"} bg={"transparent"}>Men</Button>
            <Button rightIcon={<BsChevronRight/>} justifyContent={"space-between"} bg={"transparent"}>Kids</Button>
            <Button rightIcon={<BsChevronRight/>} justifyContent={"space-between"} bg={"transparent"}>Shoes & Bags</Button>
            <Button rightIcon={<BsChevronRight/>} justifyContent={"space-between"} bg={"transparent"}>Beauty</Button>
             {/* </div>    */}
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HamburgerContainer>
  )
}

export default HamburgerMenu