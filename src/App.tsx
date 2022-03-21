import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store/store";
import { Provider } from "react-redux";
import Auth from "./app/pages/auth/Auth";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Auth />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
