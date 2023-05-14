import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box} from "@chakra-ui/react";

/**
   * Decomposed component for providing users feedback when deleting themes.
   *
   * @param apiError - state variable dictating whether the user has encountered
   * an error. 
   */

interface AlertsProps{
    apiError: boolean | null;
}
export default function DeletePresetAlerts({apiError}: AlertsProps){
    return (
        <Box>
            <Box>
                {apiError &&
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Deletion failed!</AlertTitle>
                        <AlertDescription>Your API Key is likely invalid.</AlertDescription>
                    </Alert>}
                {!apiError && 
                    <Alert status='success' textColor="green.800">
                        <AlertIcon />
                        <AlertTitle>Deletion successful!</AlertTitle>
                    </Alert>
                }
            </Box>
        </Box>
    );
}