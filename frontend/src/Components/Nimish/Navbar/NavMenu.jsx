import React from 'react'
import BagsMenu from './BagsMenu';
import BeautyMenu from './BeautyMenu';
import KidsMenu from './KidsMenu';
import MenMenu from './MenMenu';
import { MenuWrapper } from './MenuWrapper.styles';
import WomenMenu from './WomenMenu';

const NavMenu = () => {

  return (
    <MenuWrapper>
        <WomenMenu/>
        <MenMenu/>
        <KidsMenu/>
        <BagsMenu/>
        <BeautyMenu/>
    </MenuWrapper>
  )
}

export default NavMenu