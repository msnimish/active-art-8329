import { Button, Image, Input, InputGroup, InputLeftElement, theme, chakra } from '@chakra-ui/react';
import React from 'react';
import Logo from "../../../Assets/styleNovaLogo.svg";
import { NavbarWrapper } from "./Navbar.style.jsx";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineSearch, HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import NavMenu from './NavMenu';
import MoreMenu from './MoreMenu';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import Signup from './Signup';
import { useSelector } from 'react-redux';
import { ProfileMenu } from "./ProfileMenu"



const Navbar = () => {

  const { isAuth } = useSelector((store)=>store.AuthReducer);

  console.log(theme)

  return (
    <NavbarWrapper>
      <div className="NavbarContainer">
        <div className='leftHalf'>
          <HamburgerMenu/>
          <Link to="/">
            <Image src={Logo} w="150px"/>
          </Link>
          <NavMenu width="100%"></NavMenu>
          <InputGroup  w="200px" bg="#ECEDEB"  className='inputSearch'>
            <InputLeftElement
              pointerEvents='none'
              children={<HiOutlineSearch color='#7E8A9D' />}
            />
            <Input type='text' placeholder='Search'/>
          </InputGroup>
        </div>
        <div className='rightHalf'>
          <MoreMenu/>
          {isAuth ? <ProfileMenu/> : <Signup/>}
          <HiSearch size={"1.25em"} color="#1E1e1e" className='searchIcon'/>
          <MdFavoriteBorder size={"1.5em"} color={"#1E1E1E"}/>
          <chakra.span pos="relative" display="inline-block">
            <HiOutlineShoppingBag size={"1.5em"} color={"#1E1E1E"} className="basketIcon"/>
            {/* <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="800"
              fontFamily={"Proxima Nova"}
              lineHeight="none"
              color="white"
              transform="translate(50%,-50%)"
              bg="#FAA619"
              rounded="full"
            >
              0
            </chakra.span> */}
          </chakra.span>
          
          {/* <circle className='noOfItems'>4</circle> */}
        </div>

      </div>
    </NavbarWrapper>
  )
}

export default Navbar