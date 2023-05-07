import { Box, Button, Flex, FormControl, FormHelperText, 
    FormLabel, Input, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody,
    PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import React, { useState } from "react";
import register_user from "../functions/register_user";

export default function RegisterUserButton(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);


    return(
        <Box>
            <Popover strategy="fixed">
                <PopoverTrigger>
                    <Button colorScheme="blue">New User</Button>
                </PopoverTrigger>
                <PopoverContent bg="blue.800" p="5">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' onChange={(e)=> setEmail(e.target.value as string)}/>
                        <FormHelperText>Please enter a valid email address.</FormHelperText>
                    </FormControl>
                    <Box p="5" justifyContent="center" alignItems="center">
                        <Box w="100%" h="1px" bg="gray" opacity=".70"/>
                    </Box>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? "text" : "password"}
                                placeholder='Enter password'
                                onChange={(e) => setPassword(e.target.value as string)}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={()=>setShow(!show)}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormHelperText>Make sure to use a secure password!</FormHelperText>
                    </FormControl>
                    <Box p="5" justifyContent="center" alignItems="center">
                        <Box w="100%" h="1px" bg="gray" opacity=".70"/>
                    </Box>
                    <Flex p="2" alignItems="center" justifyContent="center">
                        <Button colorScheme="green"
                            onClick={(e)=>register_user(email, password)}
                        >Register User
                        </Button>
                    </Flex>
                </PopoverContent>
            </Popover>
        </Box>
    );
}