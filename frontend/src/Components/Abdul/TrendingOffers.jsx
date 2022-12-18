import React from "react";
import ProductHeader from "./ProductHeader";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const TrendingOffers = () => {
  const images = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner1-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner2-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner3-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner4-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner5-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner6-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner7-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner8-29Nov22.jpg",
    },
  ];
  return (
    <Box width={{ base: "97%", md: "100%", sm: "90%" }} m="auto">
      <ProductHeader text="Trending Offers" />
      <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={8}>
        {images &&
          images.map((el) => {
            return (
              <GridItem>
                <Image src={el.img} />
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
};

export default TrendingOffers;
