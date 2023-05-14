import { Box, Button, Flex, FormControl, FormHelperText, 
    FormLabel, Input, InputGroup, InputRightElement, Popover, PopoverArrow,
    PopoverCloseButton, PopoverContent, PopoverTrigger, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { User } from "realm-web";
import fetch_user_presets from "../functions/fetch_user_presets";
import login_user from "../functions/login_user";
import register_user from "../functions/register_user";
import { Preset } from "./Common";
import RegisterUserAlerts from "./RegisterUserAlerts";

/**
 * Component which provides UI for registering a user.
   */


interface RegisterUserButtonProps{
    setUser: (x: User) => void;
    setUserThemes: (x: Preset[]) => void;
}

export default function RegisterUserButton({setUser, setUserThemes}: RegisterUserButtonProps){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [apiError, setApiError] = useState<boolean | null>(null); // alert logic
    const [submitting, setSubmitting] = useState<boolean>(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void {
        event.preventDefault();
        setSubmitting(true);
        register_user(email, password)
            .then((success: boolean) => {
                setApiError(false);
                setSubmitting(false); 
                login_user(email, password)
                    .then((user) =>{
                        setUser(user);
                        fetch_user_presets(user.id, setUserThemes);
                    });
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
                    <Button w="100%" size="lg"  colorScheme="blue">Register</Button>
                </PopoverTrigger>
                <PopoverContent bg="blue.800" p="5" w="110%">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' onChange={(e)=> setEmail(e.target.value as string)}/>
                        {/* TODO: Implement email address validator */}
                        <FormHelperText>Please enter a valid email address.</FormHelperText>
                    </FormControl>
                    <Box p="5" justifyContent="center" alignItems="center">
                        <Box w="100%" h="1px" bg="gray" opacity=".70"/>
                    </Box>
                    <form
                        onSubmit={(e)=>handleSubmit(e)}
                    >
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
                            <FormHelperText>Passsword must be more than 6 characters!</FormHelperText>
                        </FormControl>
                    </form>
                    <Box p="5" justifyContent="center" alignItems="center">
                        <Box w="100%" h="1px" bg="gray" opacity=".70"/>
                    </Box>
                    <Flex p="2" alignItems="center" justifyContent="center">
                        <RegisterUserAlerts apiError={apiError}></RegisterUserAlerts>
                        <Spacer/>
                        <Button colorScheme="green" isLoading={submitting}
                            onClick={(e)=>handleSubmit(e)}
                        >Register User
                        </Button>
                    </Flex>
                </PopoverContent>
            </Popover>
        </Box>
    );
}