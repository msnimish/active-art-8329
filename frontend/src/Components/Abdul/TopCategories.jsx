import React from "react";
import ProductHeader from "./ProductHeader";
import {
  Box,
  Flex,
  Tab,
  TabList,
  Tabs,
  Grid,
  TabPanels,
  TabPanel,
  GridItem,
  Image,
} from "@chakra-ui/react";

const TopCategories = () => {
  const womens = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner3-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner1-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner4-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner5-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner2-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner6-14Oct22.jpg",
    },
  ];
  const mens = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner1-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner2-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner3-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner4-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner5-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner6-14Oct22.jpg",
    },
  ];
  const kids = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner1-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner2-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner3-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner4-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner5-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner6-14Oct22.jpg",
    },
  ];
  const shoesbags = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Shoes&Bags-Desk-Category-Banner1-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Shoes&Bags-Desk-Category-Banner2-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Shoes&Bags-Desk-Category-Banner3-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Shoes&Bags-Desk-Category-Banner4-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Shoes&Bags-Desk-Category-Banner5-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Shoes&Bags-Desk-Category-Banner6-14Oct22.jpg",
    },
  ];
  const beauty = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner1-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner2-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner3-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner4-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner5-14Oct22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner6-14Oct22.jpg",
    },
  ];

  return (
    <Box width={{ base: "97%", md: "100%", sm: "90%" }} m="auto">
      <ProductHeader text="Top Categories" />
      <Tabs colorScheme="red">
        <Flex mt={30}>
          <Box width="15%" bg="#FED7E2">
            <TabList>
              <Grid templateColumns="repeat(1, 1fr)">
                <Tab
                  fontSize={{ base: "10px", md: "16px", sm: "12px" }}
                  justifyContent="start"
                  width={{ base: "50%", md: "100%", sm: "70%" }}
                >
                  Women
                </Tab>
                <Tab
                  fontSize={{ base: "10px", md: "16px", sm: "12px" }}
                  justifyContent="start"
                  width={{ base: "50%", md: "100%", sm: "70%" }}
                >
                  Men
                </Tab>
                <Tab
                  fontSize={{ base: "10px", md: "16px", sm: "12px" }}
                  justifyContent="start"
                  width={{ base: "50%", md: "100%", sm: "70%" }}
                >
                  Kids
                </Tab>
                <Tab
                  fontSize={{ base: "10px", md: "16px", sm: "12px" }}
                  justifyContent="start"
                  width={{ base: "50%", md: "100%", sm: "70%" }}
                >
                  Shoes & Bags
                </Tab>
                <Tab
                  fontSize={{ base: "10px", md: "16px", sm: "12px" }}
                  justifyContent="start"
                  width={{ base: "50%", md: "100%", sm: "70%" }}
                >
                  Beauty
                </Tab>
              </Grid>
            </TabList>
          </Box>
          <Box width="85%">
            <TabPanels>
              <TabPanel>
                <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                  {womens &&
                    womens.map((el) => {
                      return (
                        <GridItem>
                          <Image src={el.img} />
                        </GridItem>
                      );
                    })}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                  {mens &&
                    mens.map((el) => {
                      return (
                        <GridItem>
                          <Image src={el.img} />
                        </GridItem>
                      );
                    })}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                  {kids &&
                    kids.map((el) => {
                      return (
                        <GridItem>
                          <Image src={el.img} />
                        </GridItem>
                      );
                    })}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                  {shoesbags &&
                    shoesbags.map((el) => {
                      return (
                        <GridItem>
                          <Image src={el.img} />
                        </GridItem>
                      );
                    })}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                  {beauty &&
                    beauty.map((el) => {
                      return (
                        <GridItem>
                          <Image src={el.img} />
                        </GridItem>
                      );
                    })}
                </Grid>
              </TabPanel>
            </TabPanels>
          </Box>
        </Flex>
      </Tabs>
    </Box>
  );
};

export default TopCategories;
