import React, { useRef, useState } from "react";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, FormControl, FormLabel, Input, Link, useDisclosure } from "@chakra-ui/react";
import { useDragLayer, useDrop } from "react-dnd";
import delete_preset from "../functions/delete_preset";
import fetch_presets from "../functions/fetch_presets";
import { DroppedPreset } from "./Common";
import DeletePresetAlerts from "./DeletePresetAlerts";

interface EditPresetProps{
    isUserTheme: boolean;

}

export default function EditPreset(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false); // submit button spinner
    const [apiKey, setApiKey] = useState<string>("");
                                                                    
    const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => setApiKey(event.target.value);

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <Box>
            <Button h="100%" w="0" colorScheme="transparent" onClick={()=>onOpen()}>
                <EditIcon color="black"/>
            </Button>
            <AlertDialog
                isOpen={isOpen}
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent bgColor="blue.800">
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Delete theme:
                        </AlertDialogHeader>
      
                        {/* Conditionally render a confirmation message, or a success message */}
            
                        <Box>
                            <AlertDialogBody>
                        Are you sure you want to delete this preset? This action is irreversible. <br/>
                                <Box p="4">
                                    <Box bg="blue.700" padding="3" borderRadius="10">
                                        <FormControl isRequired={apiKey===""}>
                                            <FormLabel fontSize="12">
                                                <Link href='https://www.mongodb.com/docs/atlas/app-services/authentication/api-key/' isExternal> 
                                            An API Key is required for this action: <ExternalLinkIcon mx='2px' />
                                                </Link>
                                            </FormLabel>
                                   
                                            <Input 
                                                type='password' 
                                                value={apiKey}
                                                onChange={handleApiKeyChange}
                                            />
                                        </FormControl>
                                    </Box>
                                </Box>
                            </AlertDialogBody>
      
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                                </Button>
                                <Button 
                                    colorScheme='red'
                                    isLoading={submitting}
                                    ml={3}
                                    isDisabled={apiKey===""}
                                >
                      Delete
                                </Button>
                            </AlertDialogFooter>
                        </Box>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
}