import React from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";
import store from "./app/store/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    );
}

export default App;
