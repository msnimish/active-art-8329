import React from 'react'
import styled from "styled-components"
import {CiSearch} from "react-icons/ci"
import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    Stack,
    Checkbox,
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"

const SelectFilter = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} minW={"200px"}>
      Actions
    </MenuButton>
    <MenuList maxWidth='40px'>
    <Stack spacing={2} direction='column'>
    {/* <InputGroup outline={"none"}  focusBorderColor='pink.400'>
    <InputLeftElement
      pointerEvents='none'
      children={<CiSearch color='gray.300' />}
    />
    <Input type='text'  placeholder='Search your brand'/>
  </InputGroup> */}
  <Checkbox colorScheme='green' defaultChecked={false}>Checkbox</Checkbox>
  <Checkbox colorScheme='green' defaultChecked>Checkbox</Checkbox>
  <Checkbox colorScheme='green' defaultChecked>Checkbox</Checkbox>
  <Checkbox colorScheme='green' defaultChecked>Checkbox</Checkbox>
</Stack>
    </MenuList>
  </Menu>
  )
}




export default SelectFilter
