import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box} from "@chakra-ui/react";

interface AlertsProps{
    apiError: boolean | null;
}
export default function LoginAlerts({apiError}: AlertsProps){
    return (
        <Box>
            {(apiError === null) && <Alert status='info' w="100%" colorScheme="twitter">
                <AlertIcon/>
                <AlertTitle textColor="blue.600">Awaiting login info...</AlertTitle>
            </Alert>
            } 
            {(apiError !== null) &&
                            <Box>
                                {apiError &&
                                    <Alert status='error'>
                                        <AlertIcon />
                                        <AlertTitle>Login failed!</AlertTitle>
                                        <AlertDescription>Please try again.</AlertDescription>
                                    </Alert>}
                                {!apiError && 
                                <Alert status='success' textColor="green.800">
                                    <AlertIcon />
                                    <AlertTitle>Login successful!</AlertTitle>
                                    <AlertDescription>Theme on!</AlertDescription>
                                </Alert>
                                }
                            </Box>
            }
        </Box>
    );
}