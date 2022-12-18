import React from "react";
import Caraousel from "../Components/Abdul/Caraousel";
import ProductHeader from "../Components/Abdul/ProductHeader";
import UnmissableOffers from "../Components/Abdul/UnmissableOffers";
import WinterStore from "../Components/Abdul/WinterStore";
import { Image, Text, Box, Flex, Link } from "@chakra-ui/react";
import TrendingOffers from "../Components/Abdul/TrendingOffers";
import Wathes from "../Components/Abdul/Wathes";
import HottestDeals from "../Components/Abdul/HottestDeals";
import PremiumEdit from "../Components/Abdul/PremiumEdit";
import BigBrandsBigDiscounts from "../Components/Abdul/BigBrandsBigDiscounts";
import BrandsWeLove from "../Components/Abdul/BrandsWeLove";
import TopDealsIn from "../Components/Abdul/TopDealsIn";
import ValuePicks from "../Components/Abdul/ValuePicks";
import TopCategories from "../Components/Abdul/TopCategories";
import Navbar from "../Components/Nimish/Navbar/Navbar";
import Footer from "../Components/Nimish/Footer/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Box width={{ base: "100%", md: "80%", sm: "100%" }} margin="auto">
        {/* Product Caraousel */}
        <Caraousel />
        {/* Offer Image */}
        <Image
          width={{ base: "100%", md: "100%", sm: "98%" }}
          m="auto"
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-15Dec2022.gif"
          w="100%"
          mt="40px"
        />
        {/* Company Benifits  */}
        <Box mt="40px" width={{ base: "100%", md: "100%", sm: "98%" }}>
          <ProductHeader text="Our Benifits" />

          <Flex mt="20px">
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg"
              width="33%"
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg"
              width="33%"
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg"
              width="33%"
            />
          </Flex>
        </Box>
        {/* Unmissable Offers*/}
        <UnmissableOffers />
        <WinterStore />
        <TrendingOffers />
        <Wathes />
        <HottestDeals />
        <PremiumEdit />
        <TopCategories />
        <TopDealsIn />
        <BigBrandsBigDiscounts />
        <BrandsWeLove />
        <ValuePicks />
      </Box>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
