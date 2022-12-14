import React from 'react'
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react'

const Overview = ({subCategory, type, fit, design, sleeveLength  }) => {
    return (
        <Box borderBottom="1px solid gray" pb="15px">
            <Text fontWeight={500}>Overview</Text>
            <Text>Upgrade your basic collection with this slim-fit T-shirt features a crew neckline, short sleeves, and floral prints.</Text>
            <UnorderedList>
                <ListItem>Type :  {type || "Crew Neck"} </ListItem>
                <ListItem>Design : {design || "Floral Print"}</ListItem>
                <ListItem>Neckline : Crew-Neck</ListItem>
                <ListItem>Length : Regular</ListItem>
                <ListItem>Sleeve Length : {sleeveLength || "...."}</ListItem>
                <ListItem>Fabric : Cotton</ListItem>
                <ListItem>Fit : {fit || "Regular Fit"} </ListItem>
                <ListItem>Care Instructions : Machine Wash</ListItem>
                <ListItem>Model Wears : Size M, has Height 6'0" and Chest 38"</ListItem>
                <ListItem>Occasion : Casual</ListItem>
                <ListItem>Product : {subCategory || "....."}</ListItem>
                <ListItem>Country of Origin : India</ListItem>
                <ListItem>Manufactured By : Aditya Birla Fashion and Retail Limited</ListItem>
                For Consumer Complaints Contact : Manager Commercial, Lifestyle International Pvt. Ltd. 1800-123-1555
                <ListItem>Net Quantity : 1 N</ListItem>
            </UnorderedList>

        </Box>
    )
}

export default Overview
