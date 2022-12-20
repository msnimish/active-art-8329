import { Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BagMenuItems } from './BagMenuItems'

const BagsMenu = () => {
    const { isOpen , onOpen, onClose } = useDisclosure()
  return (
    <Menu isOpen={ isOpen } height={"100%"}>
            <li className="MenuButtonContainer">
            <MenuButton 
            height={"100%"}
            fontWeight={"800"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            // onClick={handleClick}
            > 
              Shoes & Bags
            </MenuButton>
            </li>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="13px">
                <BagMenuItems/>
            </MenuList>
        </Menu>
  )
}

export default BagsMenu