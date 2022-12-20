import { Box, Divider, Flex, HStack, Icon, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import React from 'react';
import Logo from "../../../Assets/StyleNovaLogo.svg"

const Footer = () => {

return <Box
bg="white"
_dark={{
  bg: "gray.600",
}}
width="70vw"
margin="auto"
fontFamily="Proxima Nova"
>
<Stack
  direction={{
    base: "column",
    lg: "row",
  }}
  w="full"
  justify="space-between"
  p={10}
>
  <Flex justify="center">
    <Image
      src={ Logo }
      alt="Company Logo"
      rounded="lg"
      width={{
        base: "150px",
        lg: "200px",
      }}
      height={{
        base: "75px",
        lg: "100px",
      }}
      my={{
        base: 2,
        lg: 0,
      }}
    />
  </Flex>
  <HStack
    alignItems="start"
    flex={1}
    justify="space-around"
    fontSize={{
      base: "12px",
      md: "14px",
    }}
    color="gray.800"
    _dark={{
      color: "white",
    }}
    textAlign={{
      base: "center",
      md: "left",
    }}
  >
    <Flex justify="start" direction="column">
      <Link textTransform="uppercase">Women</Link>
      <Link textTransform="uppercase">Beauty</Link>
    </Flex>
    <Flex justify="start" direction="column">
      <Link textTransform="uppercase">Men</Link>
      <Link textTransform="uppercase">Shoes & Bags</Link>
    </Flex>
  </HStack>
  <HStack
    alignItems="start"
    flex={1}
    justify="space-around"
    fontSize={{
      base: "12px",
      md: "14px",
    }}
    color="gray.800"
    _dark={{
      color: "white",
    }}
    textAlign={{
      base: "center",
      md: "left",
    }}
  >
    <Flex justify="start" direction="column">
      <Link textTransform="uppercase">Kids</Link>
      <Link textTransform="uppercase">Winter Wear</Link>
      <Link textTransform="uppercase">Age Store</Link>
    </Flex>
    <Flex justify="start" direction="column">
      <Link textTransform="uppercase">About Us</Link>
      <Link textTransform="uppercase">Contact Us</Link>
      <Link textTransform="uppercase">Resources</Link>
    </Flex>
  </HStack>
</Stack>
<Divider
  w="95%"
  mx="auto"
  color="gray.600"
  _dark={{
    color: "#F9FAFB",
  }}
  h="3.5px"
/>
<VStack py={3}>
  <HStack justify="center">
    <Link>
      <Icon
        color="gray.800"
        _dark={{
          color: "white",
        }}
        h="20px"
        w="20px"
        as={FaFacebookF}
      />
    </Link>
    <Link>
      <Icon
        color="#1e1e1e"
        _dark={{
          color: "white",
        }}
        h="20px"
        w="20px"
        as={FiTwitter}
      />
    </Link>
    <Link>
      <Icon
        _dark={{
          color: "white",
        }}
        h="20px"
        w="20px"
        as={GrInstagram}
      />
    </Link>
    <Link>
      <Icon
        _dark={{
          color: "white",
        }}
        h="20px"
        w="20px"
        as={FaLinkedinIn}
      />
    </Link>
  </HStack>

  <Text
    textAlign="center"
    fontSize="smaller"
    _dark={{
      color: "white",
    }}
  >
    &copy;Copyright. All rights reserved.
  </Text>
</VStack>
</Box>;
}

export default Footer;