import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box} from "@chakra-ui/react";

/**
   * Decomposed component for providing users feedback when registering accounts.
   *
   * @param apiError - state variable dictating whether the user has encountered
   * an error. 
   */


interface AlertsProps{
    apiError: boolean | null;
}
export default function PostButtonAlerts({apiError}: AlertsProps){
    return (
        <Box>
            {(apiError === null) && <Alert status='info' w="100%" colorScheme="twitter">
                <AlertIcon/>
                <AlertTitle textColor="blue.600">Be sure to save your password!</AlertTitle>
            </Alert>
            } 
            {(apiError !== null) &&
                            <Box>
                                {apiError &&
                                    <Alert status='error'>
                                        <AlertIcon />
                                        <AlertTitle>Registration failed!</AlertTitle>
                                        <AlertDescription>Your email likely already has a user associated with it.</AlertDescription>
                                    </Alert>}
                                {!apiError && 
                                <Alert status='success' textColor="green.800">
                                    <AlertIcon />
                                    <AlertTitle>User successfully registered!</AlertTitle>
                                    <AlertDescription>Theme on!</AlertDescription>
                                </Alert>
                                }
                            </Box>
            }
        </Box>
    );
}