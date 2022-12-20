import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, SimpleGrid , Flex, HStack} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ProductCard from "../Components/Rohit/ProductCard";
import { getProducts } from "../Redux/ProductsReducer/action";
import SortFilter from "../Components/Rohit/Filter";
import Loading from "../Components/Rohit/Loading";
import Navbar from "../Components/Nimish/Navbar/Navbar";
import Footer from "../Components/Nimish/Footer/Footer";

const Products = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);

  const productList = useSelector(
    (reduxStore) => reduxStore.ProductsReducer.products
  );
  const loading = useSelector(
    (reduxStore) => reduxStore.ProductsReducer.isLoading
  );

  const handlePage = (e) => {
   console.log(page)
  };

  useEffect(() => {
    const brand = searchParams.getAll("brand");
    const type = searchParams.getAll("type");
    const fit = searchParams.getAll("fit");
    const design = searchParams.getAll("design");
    const size = searchParams.getAll("size");
    const sleeveLength = searchParams.getAll("sleeveLength");




    const queryParams = {
      params: { brand, type, fit, design, size, sleeveLength },
    };

    console.log(queryParams);
    dispatch(getProducts(queryParams));
  }, [location.search]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <SortFilter />
      <Flex direction={"column"} margin={"auto"} width={"80%"}>
      <Box >
        <SimpleGrid minChildWidth={"250px"} spacing="40px">
          {productList &&
            productList.map((el, i) => (
              <Box height="500px" key={i}>
                {" "}
                <ProductCard el = {el}/>{" "}
              </Box>
            ))}
        </SimpleGrid>
      </Box>
      <Box display={"flex"} width="90%" margin={"auto"} justifyContent="center" alignItems={"center"} gap={"3px"}>
        <Box cursor={"pointer"} onClick={()=>setPage(page-1)} _disabled={page === 1} border={"1px solid gray"} borderRadius={"3px"} p={"3px"} pl={"5px"} pr={"5px"}>Prev</Box>
        <Box border={"1px solid gray"} borderRadius={"3px"} p={"3px"} pl={"5px"} pr={"5px"}>page({page})</Box>
        <Box cursor={"pointer"} onClick={()=>setPage(page+1)} border={"1px solid gray"} borderRadius={"3px"} p={"3px"} pl={"5px"} pr={"5px"}>Next</Box>
      </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Products;
