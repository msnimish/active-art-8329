import React from "react";
import ProductHeader from "./ProductHeader";
import { Box, Flex, Image } from "@chakra-ui/react";

const PremiumEdit = () => {
  const images = [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner1-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner2-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner3-14Dec22.jpg",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner4-14Dec22.jpg",
    },
  ];
  return (
    <Box>
      <ProductHeader text="The Premium Edit" />
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

export default PremiumEdit;
