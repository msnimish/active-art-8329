import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Img,
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from '../../Redux/CartReducer/action';







export const BagModalSec = ({item}) => {
    const dispatch = useDispatch();

   
const [qty, setQty] = useState(1)
const { isOpen, onOpen, onClose } = useDisclosure()



const modify = ()=>{
    console.log(qty)

    dispatch(updateCart(item._id, {quantity : qty}))

    onClose()
}



    return (
        <div>
            <Button onClick={onOpen}>Qty:{item.quantity} </Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered >
                <ModalOverlay />
                <ModalContent w={"300px"}  p={"5px"}>

                    <ModalCloseButton />
                    <ModalBody >
                        <Box display={"flex"} justifyContent={"space-around"} >
                            <Img src="https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010426103-White-OffWhite-1000010426103_01-2100.jpg" alt="img"
                                w={"50px"} p={"1px"}
                            ></Img>
                            <Text mt={"10px"} ml={"7px"}fontSize={"14px"}>MELANGE Women Printed A-line Kurta</Text>
                        </Box>
                      
                        <Text   p={"10px"} fontSize={"16px"} fontWeight={"bold"} fontFamily={"sans-serif"}>Select Quantity</Text>

                    


                        <SimpleGrid columns={5} spacing={5} >
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"} bg={"white"} _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(1)} >1</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}} onClick={()=>setQty(2)} >2</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(3)} >3</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(4)} >4</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(5)} >5</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(6)} >6</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(7)} >7</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(8)} >8</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(9)} >9</Button>
                            <Button className="glide" w="40px" borderRadius={"5px"} border={"1px solid gray"}  bg={"white"}  _hover={{bg:"#FAA619",color:"white"}}  onClick={()=>setQty(10)} >10</Button>
                        </SimpleGrid>

                    </ModalBody>
                    <Divider />
                    <ModalFooter>

                        <Button  onClick={modify} w={"100%"} color={"white"} bg={"#FAA619"}  _hover={{bg:"#FAA619",color:"white"}}>Select</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

// ...........................................................
