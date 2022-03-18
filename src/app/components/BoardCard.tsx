import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export default function BoardCard(): JSX.Element {
    const navigate = useNavigate();
    return (
        <Box display="flex " justifyContent="center" alignItems="center" borderRadius="8" minW="300px" minH="200px"
             bgColor="white" boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)" onClick={()=> navigate("/board")}>
            <Text>
                + Add Board
            </Text>
        </Box>
    )
}