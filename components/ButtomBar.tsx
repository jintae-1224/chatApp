import { Button, Flex, FormControl, Input } from "@chakra-ui/react"

const ButtomBar = () => {
    return(
        <FormControl
           p={3}
        >
            <Input placeholder="Type a message..."/>
            <Button type="submit" hidden >Submit</Button>
        </FormControl>
    )
}

export default ButtomBar