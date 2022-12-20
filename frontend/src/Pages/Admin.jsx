import React from 'react'
import Logo  from "../Assets/StyleNovaLogo.svg";
import { useDisclosure, useColorModeValue, Flex, Icon, Box,Drawer, DrawerOverlay, Collapse, Input, InputGroup, Avatar, InputLeftElement, DrawerContent, IconButton, Image,Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react";

import { MdHome, MdKeyboardArrowRight } from "react-icons/md"
import { FaBell, FaRss, FaClipboardCheck } from "react-icons/fa"
import { HiCollection, HiCode } from "react-icons/hi"
import { AiFillGift } from "react-icons/ai"
import { BsGearFill } from "react-icons/bs"
import { FiSearch, FiMenu } from "react-icons/fi"
import Dashboard from '../Components/Nimish/AdminDashBoard/Dashboard';
import AdminProducts from '../Components/Nimish/AdminDashBoard/AdminProducts';
import AdminUsers from '../Components/Nimish/AdminDashBoard/AdminUsers';
import AdminOrders from '../Components/Nimish/AdminDashBoard/AdminOrders';

const Admin = () => {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("white", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{
          color: "gray.400",
        }}
        _hover={{
          bg: "white",
          _dark: {
            bg: "gray.900",
          },
          color: "#FAA619",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: "#FAA619",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Image src={Logo}/>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
          <TabList>
            <Tab>
              <NavItem icon={MdHome}>Dashboard</NavItem>
            </Tab>
            <Tab>
              <NavItem icon={FaRss}>Products</NavItem>
            </Tab>
            <Tab>
              <NavItem icon={HiCollection}>User</NavItem>
            </Tab>
            <Tab>
              <NavItem icon={FaClipboardCheck}>Orders</NavItem>
            </Tab>
            <Tab>
              <NavItem icon={HiCode} onClick={integrations.onToggle}>
                Integrations
                <Icon
                  as={MdKeyboardArrowRight}
                  ml="auto"
                  transform={integrations.isOpen && "rotate(90deg)"}
                />
              </NavItem>
              </Tab>
              <Collapse in={integrations.isOpen}>
                <NavItem pl="12" py="2">
                  Shopify
                </NavItem>
                <NavItem pl="12" py="2">
                  Slack
                </NavItem>
                <NavItem pl="12" py="2">
                  Zapier
                </NavItem>
              </Collapse>
            <Tab>
              <NavItem icon={AiFillGift}>Changelog</NavItem>
            </Tab>
            <Tab>
              <NavItem icon={BsGearFill}>Settings</NavItem>
            </Tab>
        </TabList>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
      minW="100vw"
      fontFamily="Proxima Nova"

    >
      <Tabs orientation="vertical" width="100vw">
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
        w="100vw"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          color="inherit"
          h="10vh"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup
            w="96"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search..." />
          </InputGroup>

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4" w="full" minH="90vh">
          {/* Add content here, remove div below  */}
          <TabPanels>
            <TabPanel><Dashboard/></TabPanel>
            <TabPanel><AdminProducts/></TabPanel>
            <TabPanel><AdminUsers/></TabPanel>
            <TabPanel><AdminOrders/></TabPanel>
            <TabPanel>Integrations</TabPanel>
            <TabPanel>Changelog</TabPanel>
            <TabPanel>Settings</TabPanel>
          </TabPanels>
        </Box>
      </Box>
      </Tabs>
    </Box>
  );
};


export default Admin
