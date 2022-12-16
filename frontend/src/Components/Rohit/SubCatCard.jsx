import React from 'react'
import { Card, Image, Stack, Heading, Text, Button, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const SubCatCard = ({subCat = "The perfect latte"}) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            p={"5px"}
            variant='outline'
            maxW={"230px"}
            maxH={"50px"}
            display={"flex"}
            alignItems={"center"}
            cursor="pointer"
            _hover={{ border: `1px solid red` }}
        >
            <Image
                maxW={{ base: '100%', sm: '40px' }}
                minH={{ base: '100%', sm: '40px' }}
                rounded={"2px"}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Text size='sm' fontWeight={400} >{subCat}</Text>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default SubCatCard
