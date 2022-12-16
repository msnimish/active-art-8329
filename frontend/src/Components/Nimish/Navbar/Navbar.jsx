import { Button, Image, Input, InputGroup, InputLeftElement, theme } from '@chakra-ui/react';
import React from 'react';
import Logo from "../../../Assets/StyleNovaLogo.svg";
import { NavbarWrapper } from "./Navbar.style.jsx";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import NavMenu from './NavMenu';
import MoreMenu from './MoreMenu';
import { Link } from 'react-router-dom';


const Navbar = () => {

  console.log(theme)

  return (
    <NavbarWrapper>
      <div className="NavbarContainer">
        <div className='leftHalf'>
          <Link to="/">
            <Image src={Logo} w="150px"/>
          </Link>
          <NavMenu></NavMenu>
          <InputGroup  w="200px" bg="#ECEDEB">
            <InputLeftElement
              pointerEvents='none'
              children={<HiOutlineSearch color='#7E8A9D' />}
            />
            <Input type='text' placeholder='Search'/>
          </InputGroup>
        </div>
        <div className='rightHalf'>
          <MoreMenu />
          <Button fontFamily={"Proxima Nova"} bg={"none"} >Sign Up / Sign In</Button>
          <MdFavoriteBorder size={"20px"} color={"#1E1E1E"}/>
          <HiOutlineShoppingBag size={"20px"} color={"#1E1E1E"}/>
        </div>

      </div>
    </NavbarWrapper>
  )
}

export default Navbar