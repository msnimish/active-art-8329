import { Button, Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { WomenMenuItems } from './WomenMenuItems'

const WomenMenu = () => {
    const { isOpen , onOpen, onClose } = useDisclosure()
  return (
    <Menu isOpen={ isOpen } height={"100%"}>
            <li className="MenuButtonContainer">
            <MenuButton 
            height={"100%"}
            fontSize="1rem"
            fontWeight={"800"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            // onClick={handleClick}
            > 
            Women
            </MenuButton>
            </li>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="13px">
                <WomenMenuItems/>
            </MenuList>
        </Menu>
  )
}

export default WomenMenu