import React from 'react'
import styled from 'styled-components'
import { SimpleGrid, Card, CardBody, Heading, Text, CardHeader, CardFooter, Spacer, Flex, Table, Thead, Tr, Td, Tbody,ButtonGroup, IconButton, Th, useColorModeValue } from "@chakra-ui/react";
import { FcSalesPerformance } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { GrProductHunt } from "react-icons/gr";
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

const Dashboard = () => {
    const orderHeader = ["ID","status","products", "quantity","total","createdAt", "actions"];
    const userHeader = ["ID","name", "email","created", "actions"];
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
        status: "Pending",
        products: ["Armani Casual Shirt |", " Pepe T-Shirts "],
        quantity: 2,
        total: 1740,
        created: "2 days ago",
        },
        {
        id: 3,
        status: "Pending",
        products: [" Bossini T-Shirts |", " U.S. Polo Assn. Jeans |", "Bossini Men Solid Hooded Jacket..."],
        quantity: 8,
        total: 12500,
        created: "2 days ago",
        },
        {
        id: 4,
        status: "Pending",
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
        status: "Pending",
        products: ["FameForever High Neck T-Shirt |", " Levis T-Shirts |", " Kappa Chinos..."],
        quantity: 5,
        total: 5680,
        created: "2 days ago",
        },
        {
        id: 7,
        status: "Pending",
        products: ["Armani Casual Shirt |", " Nike T-Shirts |", " U.S. Polo Assn. Men Solid Pullover Sweater..."],
        quantity: 6,
        total: 28700,
        created: "2 days ago",
        },
    ];
    let users = [
        {
        id: 1,
        name: "Daggy",
        email: "daggy@gmail.com",
        created: "7 days ago",
        },
        {
        id: 2,
        name: "Anubra",
        email: "daggy@gmail.com",
        created: "23 hours ago",
        },
        {
        id: 3,
        name: "Josef",
        email: "daggy@gmail.com",
        created: "A few seconds ago",
        },
        {
        id: 4,
        name: "Sage",
        email: "daggy@gmail.com",
        created: "A few hours ago",
        },
    ];
    const color1 = useColorModeValue("gray.400", "gray.400");
    const color2 = useColorModeValue("gray.400", "gray.400");


  return (
    <DashBoardWrapper>
        <Flex flexDirection="column" gap="25px" justifyContent="space-around">
            <Heading fontSize="40px">WELCOME TO DASHBOARD</Heading>
            <Spacer/>
            <SimpleGrid mb ="20px" spacing={8} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                <Card>
                    <CardHeader>
                    <Heading size='md'> <FcSalesPerformance size={"80px"}/></Heading>
                    </CardHeader>
                    <CardBody>
                    <Heading size='lg'>Total Sales</Heading>
                    </CardBody>
                    <CardFooter>
                    <Text fontWeight="800" fontSize="25px" color="#FAA619">₹ 5 crores</Text>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                    <Heading size='md'> <GrProductHunt size={"80px"} color="#FAA619"/></Heading>
                    </CardHeader>
                    <CardBody>
                    <Heading size="lg">Total Products Sold</Heading>
                    </CardBody>
                    <CardFooter>
                    <Text fontWeight="800" fontSize="25px" color="#FAA619">2,00,000 products</Text>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                    <Heading size='md'> <ImUsers size={"80px"} color="#FAA619"/></Heading>
                    </CardHeader>
                    <CardBody>
                    <Heading size='lg'>Total Customers</Heading>
                    </CardBody>
                    <CardFooter>
                    <Text fontWeight="800" fontSize="25px" color="#FAA619">45,000 happy customers</Text>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <Flex flexDirection="column" gap="20px">
                <Heading>Latest Orders</Heading>
                <Flex
                w="full"
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={5}
                alignItems="center"
                justifyContent="center"
                >
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
            <Flex flexDirection="column" gap="20px">
                <Heading>Newest Customers</Heading>
                <Flex
                w="full"
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={5}
                alignItems="center"
                justifyContent="center"
                >
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
                        {userHeader.map((x) => (
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
                    {users.map((token, tid) => {
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

export default Dashboard