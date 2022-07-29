import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import ButtomBar from "../../components/ButtomBar";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

const chat = () => {
  return (
    <Flex h="100vh">
        <Head>
            <title>Chat App</title>
        </Head>
      <SideBar />
      <Flex flex={1} direction="column">
        <TopBar />
        <Flex flex={1} direction="column" pt={4} mx={5} overflow="scroll" sx={{scrollbarWidth: 'none'}}>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1} alignSelf="flex-end">
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1} alignSelf="flex-end">
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1} alignSelf="flex-end">
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1} alignSelf="flex-end">
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1} alignSelf="flex-end">
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1} alignSelf="flex-end">
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1}>
            <Text>This is dummy message</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" padding={3} m={1} alignSelf="flex-end">
            <Text>This is dummy message</Text>
          </Flex>
        </Flex>
        <ButtomBar />
      </Flex>
    </Flex>
  );
};

export default chat;
