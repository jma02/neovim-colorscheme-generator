import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box} from "@chakra-ui/react";

interface AlertsProps{
    apiError: boolean | null;
}
export default function PostButtonAlerts({apiError}: AlertsProps){
    return (
        <Box>
            {(apiError === null) && <Alert status='info'>
                <AlertIcon />
                <AlertTitle>Awaiting submission:</AlertTitle>
                <AlertDescription>Press submit when ready!</AlertDescription>
            </Alert>
            } 
            {(apiError !== null) &&
                            <Box>
                                {apiError &&
                                    <Alert status='error'>
                                        <AlertIcon />
                                        <AlertTitle>Failed to save your theme!</AlertTitle>
                                        <AlertDescription>Please try again.</AlertDescription>
                                    </Alert>}
                                {!apiError && 
                                <Alert status='success' textColor="green.800">
                                    <AlertIcon />
                                    <AlertTitle>Theme successfully posted!</AlertTitle>
                                    <AlertDescription>Enjoy the new theme!</AlertDescription>
                                </Alert>
                                }
                            </Box>
            }
        </Box>
    );
}