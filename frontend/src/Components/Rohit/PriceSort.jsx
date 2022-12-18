import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Stack,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const PriceFilter = () => {
  return (
    <Menu direction="rtl">
      <MenuButton
        as={Button}
        bg="white"
        ring="1px"
        ringColor="none"
        rightIcon={<ChevronDownIcon />}
        minW={"200px"}
      >
        Sort by Price
      </MenuButton>
      <MenuList maxWidth="40px" pl="10px">
        <MenuList maxWidth="40px" pl="10px">
          <Stack spacing={2} direction="column">
            <MenuItem>New Arrivals</MenuItem>
            <MenuItem>Price - Low to High</MenuItem>
            <MenuItem>Price - High to Low</MenuItem>
          </Stack>
        </MenuList>
      </MenuList>
    </Menu>
  );
};

export default PriceFilter;
