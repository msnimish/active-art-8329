import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Menu, MenuButton, MenuList, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Tooltip} from '@chakra-ui/react'
import React, { useState } from 'react'
import {BiRupee} from "react-icons/bi"

const SliderFilter = ({baseColor="orange"}) => {

   const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)

  return (
    <Menu
   
    >
    <MenuButton as={Button}  bg="white" minWidth={"200px"}  rightIcon={<ChevronDownIcon/>}>
      Select Price Range
    </MenuButton>
    <MenuList pb={"15px"} pl="7px" pr="7px">

    <Slider
      id='slider'
      defaultValue={5}
      min={250}
      max={9999}
      colorScheme={baseColor}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
     
    >
      <SliderMark value={2500} mt='1' ml='-2.5' fontSize='sm'>
      ₹2500
      </SliderMark>
      <SliderMark value={5000} mt='1' ml='-2.5' fontSize='sm'>
      ₹5000
      </SliderMark>
      <SliderMark value={7500} mt='1' ml='-2.5' fontSize='sm'>
      ₹7500
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        // bg='teal.500'
        bg={baseColor}
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`₹ ${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  


     
    </MenuList>
  </Menu>
  )
}

export default SliderFilter
