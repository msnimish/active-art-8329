import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import ProductHeader from "./ProductHeader";

const WinterStore = () => {
  const images = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner1-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner2-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner3-29Nov22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner4-29Nov22.jpg",
    },
  ];
  return (
    <Box width={{ base: "97%", md: "100%", sm: "90%" }} m="auto">
      <ProductHeader text="Winter Store" />
      <Flex mt="30px" gap="15px">
        {images &&
          images.map((el) => {
            return (
              <Image
                src={el.img}
                width={{ base: "21%", md: "24%", sm: "21%" }}
                m="auto"
              />
            );
          })}
      </Flex>
    </Box>
  );
};

export default WinterStore;
