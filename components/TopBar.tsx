import { Avatar, Flex, Heading } from "@chakra-ui/react"

const TopBar = () => {
    return(
        <Flex
            bg="gray.100"
            h="81px"
            w="100%"
            align="center"
            p={5}
        >
            <Avatar src="" marginEnd={3}/>
            <Heading size="lg">user@gmail.com</Heading>
        </Flex>
    )
}

export default TopBar