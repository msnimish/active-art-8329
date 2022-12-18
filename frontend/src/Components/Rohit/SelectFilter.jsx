import React, { useEffect, useState } from 'react'
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
  import capital from './utils'
  import { useLocation } from 'react-router-dom'
  import { useSearchParams } from 'react-router-dom'

const SelectFilter = ({name, opt, handleQuery}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [cat, setCat]= useState(searchParams.getAll("brand") || [])
  const [type, setType]= useState(searchParams.getAll("type") || [])
  const [fit, setFit]= useState(searchParams.getAll("fit") || [])
  const [design, setDesign]= useState(searchParams.getAll("design") || [])
  const [size, setSize]= useState(searchParams.getAll("size") || [])
  const [sleeveLength, setSleeveLength]= useState(searchParams.getAll("sleeveLength") || [])





function handleChange(e){
  // handleQuery(name,e.target.value)

  const option = e.target.value

let newcat = [...cat]
if(newcat.includes(option)){
  newcat.splice(newcat.indexOf(option),1)
}else{
  newcat.push(option)
}
setCat(newcat)
  }

console.log(cat)


useEffect(()=>{
  const params = {}
  cat && (params.brand = cat)
  
  setSearchParams(params)
}, [cat, setSearchParams])






  return (
    <Menu>
    <MenuButton  as={Button} bg="white" ring="1px" ringColor="none"  rightIcon={<ChevronDownIcon />} minW={"200px"}>
      {capital(name)}
    </MenuButton>
    <MenuList maxWidth='40px' pl="10px">
    <Stack spacing={2} direction='column'>

  {
    opt && opt.map((el,i)=> <Checkbox key={i} colorScheme='orange' defaultChecked={cat.includes(el)} value={el} onChange={handleChange}>{el} </Checkbox>)
  }
</Stack>
    </MenuList>
  </Menu>
  )
}




export default SelectFilter
