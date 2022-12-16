import React from "react";
import { Text, Box } from "@chakra-ui/react";

const ProductHeader = ({ text }) => {
  return (
    <Box mt="30px">
      <Text
        fontWeight="700"
        fontSize={{ base: "15px", md: "25px", sm: "20px" }}
      >
        {text}
      </Text>
      <hr style={{ width: "5%", height: "3px", backgroundColor: "#ED8936" }} />
    </Box>
  );
};

export default ProductHeader;
