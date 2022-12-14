import React from 'react'
import styled from 'styled-components'
import { InputGroup, Input, Select, InputLeftElement, CardBody, Heading, Text, CardHeader, CardFooter, Spacer, Flex, Table, Thead, Tr, Td, Tbody,ButtonGroup, IconButton, Th, useColorModeValue } from "@chakra-ui/react";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
 
const DashBoardWrapper = styled.div`
    font-family: "Proxima Nova",
    
    .dashboardContainer{
        width: 80vw;
        margin:auto;
        border: 1px solid red;
        // height="100%";
        background-color: blue;
        display: flex;
        flex-direction: row;
        gap:200px;
    }
    h1{
        font-weight: 600;
        font-size: 25px;
        margin=20px;
    }
`

const AdminProducts = () => {
    const productsHeader = ["ID","name", "brand","price","In Stock","No. of Sold Items","created", "actions"];
                let products = [
                    {
                    id: 1,
                    name: "FAMEFOREVER Men Graphic Printed Crew Neck Regular Fit T-shirt",
                    brand: "FameForever",
                    price: 1500,
                    inStock: 20,
                    noOfSold: 5,
                    created: "7 days ago",
                    },
                    {
                    id: 2,
                    name: "BOSSINI Men Solid Bomber Jacket",
                    brand: "Bossini",
                    price: 3000,
                    inStock: 50,
                    noOfSold: 35,
                    created: "2 months ago",
                    },
                    {
                    id: 3,
                    name: "Celio Men Printed Jacket",
                    brand: "Celio",
                    price: 2550,
                    inStock: 10,
                    noOfSold: 45,
                    created: "7 months ago",
                    },
                    {
                    id: 4,
                    name: "Armani Men Solid Hooded Jacket",
                    brand: "Armani",
                    price: 2900,
                    inStock: 30,
                    noOfSold: 9,
                    created: "25 days ago",
                    },
                    {
                    id: 5,
                    name: "BOSSINI Men Solid Pullover Sweater",
                    brand: "Bossini",
                    price: 750,
                    inStock: 120,
                    noOfSold: 25,
                    created: "1 month ago",
                    },
                    {
                    id: 6,
                    name: "Kappa Men Solid Round Neck Pullover Sweater",
                    brand: "Kappa",
                    price: 1499,
                    inStock: 248,
                    noOfSold: 65,
                    created: "3 months ago",
                    },
                    {
                    id: 7,
                    name: "FAMEFOREVER Men Ice Washed Skinny Fit Jeans",
                    brand: "FameForever",
                    price: 1475,
                    inStock: 27,
                    noOfSold: 15,
                    created: "2 months ago",
                    },
                    {
                    id: 8,
                    name: "BOSSINI Men Solid Slim Fit Joggers",
                    brand: "Bossini",
                    price: 950,
                    inStock: 70,
                    noOfSold: 25,
                    created: "3 months ago",
                    },
                ];
                let brands = [
                    "Bossini",
                    "Celio",
                    "CODE",
                    "FameForever",
                    "Fahrenheit",
                    "Jack & Jones",
                    "Kappa",
                    "Levis",
                    "United Color of Benetton",
                    "US Polo",
                  ]
                const color1 = useColorModeValue("gray.400", "gray.400");
                const color2 = useColorModeValue("gray.400", "gray.400");

  return (
    <DashBoardWrapper>
        <Flex flexDirection="column" gap="25px">
            <Heading fontSize="40px">PRODUCTS DASHBOARD</Heading>
            <Spacer/>
            <Flex flexDirection="column" gap="20px">
                <Heading>Products</Heading>
                <Flex
                w="full"
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={5}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                >
                    <Flex mb="20px" flexDirection="row" gap="10px" justifyContent="flex-end" alignItems="center" width="100%">
                            <InputGroup size="sm" width="20%" bg="white">
                                <InputLeftElement><FiSearch/></InputLeftElement>
                                <Input placeholder="Search by ID" />
                            </InputGroup>
                            <Select placeholder='Sort By Date' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
                                <option value='ascending' padding="5px">Ascending</option>
                                <option value='descending' padding="5px">Descending</option>
                            </Select>
                            <Select placeholder='Sort By Price' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
                                <option value='ascending' padding="5px">Ascending</option>
                                <option value='descending' padding="5px">Descending</option>
                            </Select>
                            <Select placeholder='Sort By No. of Sold Items' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
                                <option value='ascending' padding="5px">Ascending</option>
                                <option value='descending' padding="5px">Descending</option>
                            </Select>
                            <Select placeholder='Filter by Brand' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
                                {brands.map((el)=>(<option value={el} padding="5px">{el}</option>)
                                )}
                            </Select>
                    </Flex>

                <Table
                    w="full"
                    bg="white"
                    _dark={{
                    bg: "gray.800",
                    }}
                    display={{
                    base: "block",
                    md: "table",
                    }}
                    sx={{
                    "@media print": {
                        display: "table",
                    },
                    }}
                >
                    <Thead
                    display={{
                        base: "none",
                        md: "table-header-group",
                    }}
                    sx={{
                        "@media print": {
                        display: "table-header-group",
                        },
                    }}
                    >
                    <Tr>
                        {productsHeader.map((x) => (
                        <Th key={x}>{x}</Th>
                        ))}
                    </Tr>
                    </Thead>
                    <Tbody
                    display={{
                        base: "block",
                        lg: "table-row-group",
                    }}
                    sx={{
                        "@media print": {
                        display: "table-row-group",
                        },
                    }}
                    >
                    {products.map((token, tid) => {
                        return (
                        <Tr
                            key={tid}
                            display={{
                            base: "grid",
                            md: "table-row",
                            }}
                            sx={{
                            "@media print": {
                                display: "table-row",
                            },
                            gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                            gridGap: "10px",
                            }}
                        >
                            {Object.keys(token).map((x) => {
                            return (
                                <React.Fragment key={`${tid}${x}`}>
                                <Td
                                    display={{
                                    base: "table-cell",
                                    md: "none",
                                    }}
                                    sx={{
                                    "@media print": {
                                        display: "none",
                                    },
                                    textTransform: "uppercase",
                                    color: color1,
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    letterSpacing: "wider",
                                    fontFamily: "heading",
                                    }}
                                >
                                    {x}
                                </Td>
                                <Td
                                    color={"gray.500"}
                                    fontSize="md"
                                    fontWeight="hairline"
                                >
                                    {token[x]}
                                </Td>
                                </React.Fragment>
                            );
                            })}
                            <Td
                            display={{
                                base: "table-cell",
                                md: "none",
                            }}
                            sx={{
                                "@media print": {
                                display: "none",
                                },
                                textTransform: "uppercase",
                                color: color2,
                                fontSize: "xs",
                                fontWeight: "bold",
                                letterSpacing: "wider",
                                fontFamily: "heading",
                            }}
                            >
                            Actions
                            </Td>
                            <Td>
                            <ButtonGroup variant="solid" size="sm" spacing={3}>
                                <IconButton
                                colorScheme="blue"
                                icon={<BsBoxArrowUpRight />}
                                aria-label="Up"
                                />
                                <IconButton
                                colorScheme="green"
                                icon={<AiFillEdit />}
                                aria-label="Edit"
                                />
                                <IconButton
                                colorScheme="red"
                                variant="outline"
                                icon={<BsFillTrashFill />}
                                aria-label="Delete"
                                />
                            </ButtonGroup>
                            </Td>
                        </Tr>
                        );
                    })}
                    </Tbody>
                </Table>
                </Flex>
            </Flex>
        </Flex>
    </DashBoardWrapper>
  )
}

export default AdminProducts