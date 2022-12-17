import { Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import ProductHeader from "./ProductHeader";
const UnmissableOffers = () => {
  const images = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner1-13Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-13Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner3-15Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner4-13Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner5-13Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner6-13Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner7-13Dec22.jpg",
    },
  ];
  return (
    <Box width={{ base: "97%", md: "100%", sm: "90%" }} m="auto">
      <ProductHeader text="Unmissable Offers" />
      <Box mt="20px" overflowX="scroll">
        <Flex gap="10px">
          {images &&
            images.map((el) => {
              return <Image src={el.img} width="33%" />;
            })}
        </Flex>
      </Box>
    </Box>
  );
};

export default UnmissableOffers;
