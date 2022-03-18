import React from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
