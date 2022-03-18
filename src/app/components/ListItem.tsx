import React from "react";
import {Box, Text} from "@chakra-ui/react";

interface Props {
    ref: any;
}

export default function ListItem({ref}: Props): JSX.Element {
    return (


        <Box display="flex " borderRadius="8" minW="200px" minH="100px"
             bgColor="white" boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
             ref={ref}
        >
            <Text>Item</Text>
        </Box>


    )
}