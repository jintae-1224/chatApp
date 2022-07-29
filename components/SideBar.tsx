import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import ChatMemeber from "./ChatMember";

const SideBar = () => {
  return (
    <Flex
      //   bg="blue.100"
      w="300px"
      h="100vh"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex
        // bg="red.100"
        h="81px"
        w="100%"
        align="center"
        borderBottom="1px solid"
        borderColor="gray.200"
        justifyContent="space-between"
        p={3}
      >
        <Flex align="center">
          <Avatar src="" marginEnd={3} />
          <Text>Alberr Eisnste</Text>
        </Flex>
        <IconButton
          aria-label="Search database"
          size="sm"
          isRound
          icon={<ArrowLeftIcon />}
        />
      </Flex>
      <Button m={5} p={4}>
        New Chat
      </Button>
      <Flex 
        // overflow="scroll" 
        direction="column" 
        // sx={{scrollbarWidth : "none"}}
      >
        <ChatMemeber />
        <ChatMemeber />
        <ChatMemeber />
      </Flex>
    </Flex>
  );
};

export default SideBar;
