import { Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BeautyMenuItems } from './BeautyMenuItems'

const BeautyMenu = () => {
    const { isOpen , onOpen, onClose } = useDisclosure()
  return (
    <Menu isOpen={ isOpen } height={"100%"}>
            <li className="MenuButtonContainer">
            <MenuButton 
            height={"100%"}
            fontWeight={"800"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            > 
                Beauty
            </MenuButton>
            </li>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="13px">
                <BeautyMenuItems/>
            </MenuList>
        </Menu>
  )
}

export default BeautyMenu