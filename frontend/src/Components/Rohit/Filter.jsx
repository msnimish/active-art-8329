import React, { useEffect, useState } from "react";
import SliderFilter from "./SliderFilter";
import SubCatCard from "./SubCatCard";
import SelectFilter from "./SelectFilter";
import PriceFilter from "./PriceSort";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import capital from "./utils";

const catobj = {
  topWear: ["T-Shirt", "Casual Shirt", "Jacket", "Formal Shirt", "Shirt"],
  Winterwear: ["Jacket", "Sweater", "Sweatshirt"],
  bottomWear: [
    "Jean",
    "Joggers",
    "Shorts",
    "Trackpants",
    "Chinos",
    "Trousers",
    "Formal Trouser",
    "Casual Trouser",
    "Pants",
  ],
  Activewear: ["Track Pant"],
  Innerwear: ["Brief", "Boxer"],
};
const cat = {
  topWear: ["T-Shirt", "Casual Shirt", "Jacket", "Formal Shirt", "Shirt"],
  Winterwear: ["Jacket", "Sweater", "Sweatshirt"],
  bottomWear: [
    "Jean",
    "Joggers",
    "Shorts",
    "Trackpants",
    "Chinos",
    "Trousers",
    "Formal Trouser",
    "Casual Trouser",
    "Pants",
  ],
  Activewear: ["Track Pant"],
  Innerwear: ["Brief", "Boxer"],
};
let category = [
  {
    cat: "topWear",
    img: "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011517525-Blue-LightBlue-1000011517525-2022_01-2100.jpg",
  },
  {
    cat: "Winterwear",
    img: "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011538716-Green-Olive-1000011538716-2022_01-2100.jpg",
  },
  {
    cat: "bottomWear",
    img: "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011442126-Blue-MidBlue-1000011442126_01-2100.jpg",
  },
  {
    cat: "Activewear",
    img: "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011195630-White-WhiteMel-1000011195630_01-2100.jpg",
  },
  {
    cat: "Innerwear",
    img: "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005432301-12122017-Grey-Mix-1000005432301-12122017_01-2100.jpg",
  },
];
let filters = [
  {
    name: "brand",
    opt: [
      "Bossini",
      "Celio",
      "CODE",
      "FameForever",
      "Fahrenheit",
      "Jack & Jones",
      "Kappa",
      "Levis",
      "United Color of Benetton",
      "US Polo",
    ],
  },
  {
    name: "type",
    opt: [
      "Hooded",
      "Round",
      "Casual",
      "Jeans",
      "Joggers",
      "Biker",
      "Quilted",
      "High Neck",
      "Chinos",
      "Henley",
      "Track Pants",
      "V-Neck",
      "Mock Collar",
      "Geometric",
      "Denim",
      "Flat Front",
    ],
  },
  {
    name: "fit",
    opt: [
      "Regular Fit",
      "Skinny",
      "Slim Tapered",
      "Slim Fit",
      "Slim",
      "Boot Cut",
      "Straight",
      "Regular Tapered",
    ],
  },
  {
    name: "design",
    opt: [
      "Graphic Printed",
      "Solid",
      "Printed",
      "Stonewashed",
      "Washed",
      "Ribbed",
      "Striped",
      "Faded",
      "Textured",
      "Quilted",
      "Colourblocked",
      "Colourblock",
      "Checked",
      "Polka-Dot Print",
      "Batman Print",
      "Graphic Print",
      "Floral Print",
      "Geometric Print",
      "Colorblocked",
      "Reversible",
    ],
  },
  { name: "size", opt: ["XS", "S", "M", "L", "XL", "XXL"] },
  { name: "sleeveLength", opt: ["Full Sleeves", "Sleeveless", "Half Sleeves"] },
];

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cat, setCat] = useState(searchParams.getAll("brand") || []);
  const [type, setType] = useState(searchParams.getAll("type") || []);
  const [fit, setFit]= useState(searchParams.getAll("fit") || [])
  const [design, setDesign]= useState(searchParams.getAll("design") || [])
  const [size, setSize]= useState(searchParams.getAll("size") || [])
  const [sleeveLength, setSleeveLength]= useState(searchParams.getAll("sleeveLength") || [])
  
const allfill = []

  
  

  const handleFilter = (name, el) => {
    const option = el;

    switch (name) {
      case "brand": {
        let newcat = [...cat];
        if (newcat.includes(option)) {
          newcat.splice(newcat.indexOf(option), 1);
        } else {
          newcat.push(option);
        }
        setCat(newcat);
        allfill = newcat
       
       
        
      }
      break;

      case "type":
        {
          let newtype = [...type];
          if (newtype.includes(option)) {
            newtype.splice(newtype.indexOf(option), 1);
          } else {
            newtype.push(option);
          }
          setType(newtype);
        }
        break;

        case "fit":
          {
            let newfit = [...fit];
            if (newfit.includes(option)) {
              newfit.splice(newfit.indexOf(option), 1);
            } else {
              newfit.push(option);
            }
            setFit(newfit);
          }
          break;

        case "design":
          {
            let newdesign = [...design];
            if (newdesign.includes(option)) {
              newdesign.splice(newdesign.indexOf(option), 1);
            } else {
              newdesign.push(option);
            }
            setDesign(newdesign);
          }
          break;

        case "sleeveLength":
          {
            let newsleeveLength = [...sleeveLength];
            if (newsleeveLength.includes(option)) {
              newsleeveLength.splice(newsleeveLength.indexOf(option), 1);
            } else {
              newsleeveLength.push(option);
            }
            setSleeveLength(newsleeveLength);
          }
          break;

        case "size":
          {
            let newsize = [...size];
            if (newsize.includes(option)) {
              newsize.splice(newsize.indexOf(option), 1);
            } else {
              newsize.push(option);
            }
            setSize(newsize);
          }
          break;

       default : return
    }
  };

  

  useEffect(() => {
    const params = {};
    cat && (params.brand = cat);
    type && (params.type = type);
    type && (params.fit = fit);
    type && (params.design = design);
    type && (params.sleeveLength = sleeveLength);
    type && (params.size = size);
    

    setSearchParams(params);
  }, [cat,type,fit,design,sleeveLength,size, setSearchParams]);

  return (
    <Box width="100%">
      <Heading size="lg" pt="10px">
        Men
      </Heading>

      <Flex wrap="wrap" gap="20px" rowGap="20px" pt="20px" pb="30px">
        {/* <Box minW="230px"><SubCatCard/></Box> */}
        {category &&
          category.map((el, i) => (
            <Box minW="230px" key={i}>
              {/* <SubCatCard {...el} /> */}
            </Box>
          ))}
      </Flex>

      <Flex
        wrap="wrap"
        gap="20px"
        rowGap="20px"
        bg="rgb(247, 248, 247)"
        pt="30px"
        pb="30px"
      >
        {filters &&
          filters.map(({ name, opt }, i) => (
            <Box key={i} minW="230px">
              <Menu>
                <MenuButton
                  as={Button}
                  bg="white"
                  ring="1px"
                  ringColor="none"
                  rightIcon={<ChevronDownIcon />}
                  minW={"200px"}
                >
                  {capital(name)}
                </MenuButton>
                <MenuList maxWidth="40px" pl="10px">
                  <Stack spacing={2} direction="column">
                    {opt &&
                      opt.map((el, i) => (
                        <Checkbox
                          key={i}
                          colorScheme="orange"
                          defaultChecked={cat.includes(el)}
                          value={el}
                          onChange={() => handleFilter(name, el)}
                        >
                          {el}{" "}
                        </Checkbox>
                      ))}
                  </Stack>
                </MenuList>
              </Menu>
            </Box>
          ))}
      </Flex>

      <Flex
        wrap="wrap"
        gap="20px"
        rowGap="20px"
        bg="rgb(247, 248, 247)"
        pt="30px"
        pb="30px"
      >
        <Box>
          <PriceFilter />
        </Box>
        <Box>
          <SliderFilter />
        </Box>
      </Flex>
    </Box>
  );
};

export default Filter;
