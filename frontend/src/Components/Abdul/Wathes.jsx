import React from "react";
import ProductHeader from "./ProductHeader";
import { Box, Image } from "@chakra-ui/react";

const Wathes = () => {
  return (
    <Box width={{ base: "100%", md: "100%", sm: "100%" }}>
      <ProductHeader text="Watches" />
      <Image
        src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/mobile-LS-UBERHP-GiftCard-13modblock-oneBythree-A-02Dec2022.gif"
        width="100%"
        height="350px"
        mt="30px"
      />
    </Box>
  );
};

export default Wathes;
