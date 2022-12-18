import React from 'react'
import styled from 'styled-components'
import { InputGroup, Input, Select, InputLeftElement, CardBody, Heading, Text, CardHeader, CardFooter, Spacer, Flex, Table, Thead, Tr, Td, Tbody,ButtonGroup, IconButton, Th, useColorModeValue } from "@chakra-ui/react";
import { FcSalesPerformance } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

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

const AdminOrders = () => {
    const orderHeader = ["ID","status","products", "quantity","total","createdAt", "actions"];
    
    let orders = [
        {
        id: 1,
        status: "Pending",
        products: ["Celio Casual Shirt |", " Bossini T-Shirts |", " U.S. Polo Assn. Jeans..."],
        quantity: 5,
        total: 2440,
        created: "2 days ago",
        },
        {
        id: 2,
        status: "Shipped",
        products: ["Armani Casual Shirt |", " Pepe T-Shirts "],
        quantity: 2,
        total: 1740,
        created: "2 days ago",
        },
        {
        id: 3,
        status: "Delivered",
        products: [" Bossini T-Shirts |", " U.S. Polo Assn. Jeans |", "Bossini Men Solid Hooded Jacket..."],
        quantity: 8,
        total: 12500,
        created: "2 days ago",
        },
        {
        id: 4,
        status: "Return",
        products: ["Celio Casual Shirt |", " Bossini T-Shirts |", " U.S. Polo Assn. Jeans..."],
        quantity: 5,
        total: 2440,
        created: "2 days ago",
        },
        {
        id: 5,
        status: "Pending",
        products: ["Jack & Jones Round Neck Sweater |", " Fahrenheit T-Shirts |", " U.S. Polo Assn. Jeans..."],
        quantity: 3,
        total: 6780,
        created: "2 days ago",
        },
        {
        id: 6,
        status: "Shipped",
        products: ["FameForever High Neck T-Shirt |", " Levis T-Shirts |", " Kappa Chinos..."],
        quantity: 5,
        total: 5680,
        created: "2 days ago",
        },
        {
        id: 7,
        status: "Delivered",
        products: ["Armani Casual Shirt |", " Nike T-Shirts |", " U.S. Polo Assn. Men Solid Pullover Sweater..."],
        quantity: 6,
        total: 28700,
        created: "2 days ago",
        },
    ];

    const color1 = useColorModeValue("gray.400", "gray.400");
    const color2 = useColorModeValue("gray.400", "gray.400");

  return (
    <DashBoardWrapper>
        <Flex flexDirection="column" gap="25px">
            <Heading fontSize="40px">Orders Summary</Heading>
            <Spacer/>
            
            <Flex flexDirection="column" gap="20px">
                <Flex
                w="full"
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={5}
                alignItems="center"
                justifyContent="center"
                flexDirection = "column"
                >
                    <Flex mb="20px" flexDirection="row" gap="10px" justifyContent="flex-end" alignItems="center" width="100%">
                            <InputGroup size="sm" width="20%" bg="white">
                                <InputLeftElement><FiSearch/></InputLeftElement>
                                <Input placeholder="Search by ID" />
                            </InputGroup>
                            <Select placeholder='Filter by Status' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
                                <option value='pending' padding="5px">Pending</option>
                                <option value='Shipped' padding="5px">Shipped</option>
                                <option value='Delivered' padding="5px">Delivered</option>
                                <option value='Return' padding="5px">Return</option>
                            </Select>
                            <Select placeholder='Sort By Date' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
                                <option value='ascending' padding="5px">Ascending</option>
                                <option value='descending' padding="5px">Descending</option>
                            </Select>
                            <Select placeholder='Sort By Price' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
                                <option value='ascending' padding="5px">Ascending</option>
                                <option value='descending' padding="5px">Descending</option>
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
                        {orderHeader.map((x) => (
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
                    {orders.map((token, tid) => {
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

export default AdminOrders