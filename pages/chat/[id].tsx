import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import ButtomBar from "../../components/ButtomBar";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

const chat = () => {
  return (
    <Flex h="100vh">
      <SideBar />
      <Flex flex={1}>
        <TopBar />
        <Flex flex={1}>
          <ButtomBar />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default chat;
