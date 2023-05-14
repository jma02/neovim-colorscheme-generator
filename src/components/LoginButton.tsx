import { Box, Button, Flex, FormControl, 
    FormLabel, Input, InputGroup, InputRightElement, Popover, PopoverArrow,
    PopoverCloseButton, PopoverContent, PopoverTrigger, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import fetch_user_presets from "../functions/fetch_user_presets";
import login_user from "../functions/login_user";
import { Preset } from "./Common";
import LoginAlerts from "./LoginAlerts";


/**
 * Login component. 
   *
   * @param setUser - state function for setting Realm.User.
   * @param setUserTheme - called upon fetching user saved themes.
   */

interface LoginButtonProps{
    setUser: (x: Realm.User) => void;
    setUserThemes: (x: Preset[]) => void;
}

export default function LoginButton({setUser, setUserThemes}: LoginButtonProps){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [apiError, setApiError] = useState<boolean | null>(null); // alert logic
    const [submitting, setSubmitting] = useState<boolean>(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void {
        event.preventDefault();
        setSubmitting(true);
        login_user(email, password)
            .then((success: Realm.User) => {
                setUser(success);
                setApiError(false);
                setSubmitting(false);
                fetch_user_presets(success.id as string, setUserThemes);
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
                    <Button colorScheme="green" w="100%" size="lg">Login</Button>
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
                        </FormControl>
                    </form>
                    <Box p="5" justifyContent="center" alignItems="center">
                        <Box w="100%" h="1px" bg="gray" opacity=".70"/>
                    </Box>
                    <Flex p="2" alignItems="center" justifyContent="center">
                        <LoginAlerts apiError={apiError}></LoginAlerts>
                        <Spacer/>
                        <Button colorScheme="green" isLoading={submitting}
                            onClick={(e)=>handleSubmit(e)}
                        >Login!
                        </Button>
                    </Flex>
                </PopoverContent>
            </Popover>
        </Box>
    );
}