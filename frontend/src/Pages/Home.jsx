import React from "react";
import Caraousel from "../Components/Abdul/Caraousel";
import { extendTheme } from "@chakra-ui/react";
import { Image, Text, Box, Flex, Link } from "@chakra-ui/react";

const Home = () => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  const theme = extendTheme({ breakpoints });
  return (
    <div>
      <Caraousel />
      <Image
        width={{ base: "50%", md: "80%", sm: "100%" }}
        m="auto"
        src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-08Dec2022.jpg"
        w="100%"
        mt="40px"
      />
      {/* <Box mt="40px" mb="100px">
        <Text fontSize="25px" fontWeight="700">
          Our Benifit
        </Text>
        <hr style={{ width: "5%", height: "5px", backgroundColor: "yellow" }} />
        <Flex mt="20px">
          <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg" />
          <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg" />
          <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg" />
        </Flex>
      </Box>
      <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
      </Box>{" "} */}
    </div>
  );
};

export default Home;
