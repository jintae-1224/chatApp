import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";

const ChatMemeber = () => {
  return (
    <Flex p={3} align="center" _hover={{ bg: "gray:100", cursor: "pointer" }}>
      <Avatar src="" marginEnd={3} />
      <Text>test.gmail.com</Text>
    </Flex>
  );
};

export default ChatMemeber;
