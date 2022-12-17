import React from "react";
import ProductHeader from "./ProductHeader";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const TopDealsIn = () => {
  const womens = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner2-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner3-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner4-14Dec22.jpg",
    },
  ];
  const mens = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner1-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner3-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner4-14Dec22.jpg",
    },
  ];
  const kids = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner3-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner1-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner2-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner4-14Dec22.jpg",
    },
  ];
  const shoesbags = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner3-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner1-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner1-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner1-14Dec22.jpg",
    },
  ];
  const beauty = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner1-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner2-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner3-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner4-14Dec22.jpg",
    },
  ];
  return (
    <Box width={{ base: "97%", md: "100%", sm: "90%" }} m="auto">
      <ProductHeader text="TopDealsIn" />
      <Tabs mt="20px" variant="soft-rounded" colorScheme="red">
        <TabList>
          <Tab fontSize={{ base: "5px", md: "15px", sm: "15px" }}>Women</Tab>
          <Tab fontSize={{ base: "5px", md: "15px", sm: "15px" }}>Men</Tab>
          <Tab fontSize={{ base: "5px", md: "15px", sm: "15px" }}>Kids</Tab>
          <Tab fontSize={{ base: "5px", md: "15px", sm: "15px" }}>
            Shoes & Bags
          </Tab>
          <Tab fontSize={{ base: "5px", md: "15px", sm: "15px" }}>Beauty</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={8}>
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
            <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={8}>
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
            <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={8}>
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
            <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={8}>
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
            <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={8}>
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
      </Tabs>
    </Box>
  );
};

export default TopDealsIn;
