import React from "react";
import {Flex} from "@chakra-ui/react";
import {Routes, Route} from "react-router-dom";
import {Board, Dashboard} from "./app/pages";


export default function AppRouter(): JSX.Element {
    return (
        <Flex h="100vh" flexDirection="column" bgColor="#F9FAFB">
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/board" element={<Board/>}/>
            </Routes>
        </Flex>
    )
}