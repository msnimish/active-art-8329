import { Menu, MenuButton, MenuList, useDisclosure, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenMenuItems } from './MenMenuItems'

const MenMenu = () => {
    const { isOpen , onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    const handleClick = () => {
      onClose();
      navigate("/products");
    }
  return (
    <Menu isOpen={ isOpen } height={"100%"}>
            <li className="MenuButtonContainer">
            <MenuButton 
            height={"100%"}
            fontWeight={"800"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            > 
                <Button bg="#f7f8f7" onClick={handleClick}>Men</Button>
            </MenuButton>
            </li>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="13px">
                <MenMenuItems/>
            </MenuList>
        </Menu>
  )
}

export default MenMenu