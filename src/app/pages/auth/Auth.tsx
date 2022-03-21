import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Box, Tab, TabList, TabPanels, Tabs, TabPanel } from "@chakra-ui/react";
import { Dashboard } from "../index";

export default function Auth() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs>
              <TabList>
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Login setLoggedIn={setLoggedIn} />
                </TabPanel>
                <TabPanel>
                  <Register />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </>
      )}
    </div>
  );
}
