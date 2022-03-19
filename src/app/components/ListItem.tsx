import React from "react";
import {Box, Text} from "@chakra-ui/react";

interface Props {
    content:string;
    backgroundColor:string;
}

export default function ListItem({ content, backgroundColor}: Props): JSX.Element {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" borderRadius="8" minW="100px" minH="50px"
             bgColor={backgroundColor} boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
        >
            <Text>{content}</Text>
        </Box>

    )
}