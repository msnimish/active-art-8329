import React from 'react'
import styled from 'styled-components'
import { Stack, Input, InputLeftElement, InputGroup, Select, Heading, Text, CardHeader, CardFooter, Spacer, Flex, Table, Thead, Tr, Td, Tbody,ButtonGroup, IconButton, Th, useColorModeValue } from "@chakra-ui/react";
import { FcSalesPerformance } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { GrProductHunt } from "react-icons/gr";
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

const AdminUsers = () => {
    const header = ["ID","name", "email","created", "actions"];
                let data = [
                    {
                    id: 1,
                    name: "Suraj",
                    email: "suraj@gmail.com",
                    created: "A few seconds ago",
                    },
                    {
                    id: 2,
                    name: "Anubra",
                    email: "anubra@gmail.com",
                    created: "A few hours ago",
                    },
                    {
                    id: 3,
                    name: "Josef",
                    email: "josef@gmail.com",
                    created: "12 hours ago",
                    },
                    {
                    id: 4,
                    name: "Sage",
                    email: "sage@gmail.com",
                    created: "5 days ago",
                    },
                    {
                    id: 5,
                    name: "Aniket",
                    email: "aniket234@gmail.com",
                    created: "A few minutes ago",
                    },
                    {
                    id: 6,
                    name: "Nitya",
                    email: "nitya1289@gmail.com",
                    created: "A few hours ago",
                    },
                    {
                    id: 7,
                    name: "Rajesh",
                    email: "rajesh2134@gmail.com",
                    created: "8 hours ago",
                    },
                    {
                    id: 8,
                    name: "Sage",
                    email: "sage@gmail.com",
                    created: "2 days ago",
                    },
                ];
                data = data.map((e,i)=>{ return {id:i+1, ...e }})
                const color1 = useColorModeValue("gray.400", "gray.400");
                const color2 = useColorModeValue("gray.400", "gray.400");

  return (
    <DashBoardWrapper>
        <Flex flexDirection="column" gap="25px">
            <Heading fontSize="40px">USERS DASHBOARD</Heading>
            <Spacer/>
            <Flex flexDirection="column" gap="20px">
                <Heading>All Customers</Heading>
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
                                <Input placeholder="Search Name or ID" />
                            </InputGroup>
                            <Select placeholder='Sort By Date' size='sm'width="20%" bg="white" fontFamily="Proxima Nova" color="#121212">
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
                        {header.map((x) => (
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
                    {data.map((token, tid) => {
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

export default AdminUsers