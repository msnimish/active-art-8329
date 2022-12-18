import { Menu, MenuButton, MenuList, MenuItem, useDisclosure, Button } from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { logout } from '../../../Redux/AuthReducer/auth.actions';
import { useDispatch } from 'react-redux';

const ProfileMenu = () => {
    const { isOpen , onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <Menu isOpen={ isOpen } height={"100%"}>
            <li className="MenuButtonContainer">
            <MenuButton 
            height={"100%"}
            fontSize="1rem"
            fontWeight={"800"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            > 
                <CgProfile size={"1.5em"} color={"#1E1E1E"}/>
            </MenuButton>
            </li>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="13px">
                <MenuItem>Profile</MenuItem>
                <MenuItem><Button onClick={handleLogout}>Logout</Button></MenuItem>
            </MenuList>
        </Menu>
  )
}

export {ProfileMenu}