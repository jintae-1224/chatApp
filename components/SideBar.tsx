import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import ChatMemeber from "./ChatMember";
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollection} from 'react-firebase-hooks/firestore'
import { auth } from "../firebaseconfig";
import { collection, query } from "firebase/firestore";
import { db } from "../firebaseconfig"
const SideBar = () => {

  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"))
  const chats : any = snapshot?.docs.map(doc => ({id : doc.id, ...doc.data()}));
  const member = chats ? chats[0].users : []

  console.log(member);
  
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
          <Avatar src={`${user ? user.photoURL : ""}`} marginEnd={3} />
          <Text>{user?.displayName}</Text>
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
        {member?.map((data : any) => (
          <ChatMemeber key={Math.random()} user={data}/>
        ))}
      </Flex>
    </Flex>
  );
};

export default SideBar;
