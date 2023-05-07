import { Box, Button, Flex, FormControl, FormHelperText, 
    FormLabel, Input, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody,
    PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import register_user from "../functions/register_user";
import LoginAlerts from "./LoginAlerts";
import RegisterUserAlerts from "./RegisterUserAlerts";

export default function LoginButton(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [apiError, setApiError] = useState<boolean | null>(null); // alert logic
    const [submitting, setSubmitting] = useState<boolean>(false);

    function handleSubmit(): void {
        setSubmitting(true);
        register_user(email, password)
            .then((success: boolean) => {
                setApiError(false);
                setSubmitting(false);
            })
            .catch((error: Error) => {
                setApiError(true);
                setSubmitting(false);
            });
    }

    return(
        <Box>
            <Popover strategy="fixed" placement="start-start">
                <PopoverTrigger>
                    <Button colorScheme="green" w="100%">Login</Button>
                </PopoverTrigger>
                <PopoverContent bg="blue.800" p="5" w="110%">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' onChange={(e)=> setEmail(e.target.value as string)}/>
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
                                <Button colorScheme="black" h='1.75rem' size='sm' onClick={()=>setShow(!show)}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Box p="5" justifyContent="center" alignItems="center">
                        <Box w="100%" h="1px" bg="gray" opacity=".70"/>
                    </Box>
                    <Flex p="2" alignItems="center" justifyContent="center">
                        <LoginAlerts apiError={apiError}></LoginAlerts>
                        <Spacer/>
                        <Button colorScheme="green" isLoading={submitting}
                            onClick={(e)=>handleSubmit()}
                        >Login!
                        </Button>
                    </Flex>
                </PopoverContent>
            </Popover>
        </Box>
    );
}