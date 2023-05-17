import React, { useRef, useState } from "react";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader,
    AlertDialogOverlay, Box, Button, FormControl, FormLabel, Input, Link, useDisclosure } from "@chakra-ui/react";
import {ObjectId} from "bson";
import edit_preset from "../functions/edit_preset";
import fetch_user_presets from "../functions/fetch_user_presets";
import { Preset } from "./Common";
import fetch_presets from "../functions/fetch_presets";

/**
 * An edit button component which provides UI for editing a preset
   *
   *
   * @param isUserTheme - determines which actions the user is prompted to take, as well defines the behavior
   * our backend should perform
   *
   */

interface EditPresetProps{
    isUserTheme: boolean;
    name: string;
    description: string;
    _id: ObjectId;
    userId: string;
    setUserThemes: (x: Preset[]) => void;
    setPresets: (x: Preset[]) => void;
}

export default function EditPreset({
    isUserTheme,
    name,
    description,
    _id,
    userId,
    setUserThemes,
    setPresets
}: EditPresetProps){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false); // submit button spinner
    const [apiKey, setApiKey] = useState<string>("");
    const [apiError, setApiError] = useState<boolean | null>(null); // alert logic
    
    const [newName, setNewName] = useState<string>(name);
    const [newDesc, setNewDesc] = useState<string>(description);
                                                                    
    const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => setApiKey(event.target.value);

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.stopPropagation(); // prevents a click to the parent button
        onOpen();
    }
    
    function handleSubmit(){
        setSubmitting(true);
        if(isUserTheme){
            const super_key = process.env.REACT_APP_MONGO_REALM_API_KEY as string;
            edit_preset(_id.toString(), userId, newName, newDesc, super_key)
                .then((success) =>{
                    fetch_user_presets(userId, setUserThemes);
                    sleep(300)
                        .then(()=>onClose());
                })
                .catch((error)=>{
                    setApiError(true);
                    console.error(error);
                    setSubmitting(false);
                });
        } else{
            edit_preset(_id.toString(), "", newName, newDesc, apiKey)
                .then((success) =>{
                    fetch_presets(setPresets);
                    sleep(300)
                        .then(()=>onClose());
                })
                .catch((error)=>{
                    setApiError(true);
                    console.error(error);
                    setSubmitting(false);
                });;
        }
    }

    return (
        <Box>
            <Button h="100%" w="0" colorScheme="transparent" onClick={(e)=>handleClick(e)}>
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
                    Update theme:
                        </AlertDialogHeader>            
                        <Box>
                            <AlertDialogBody>
                        Enter some new details for your theme! <br/>
                                <Box p="4">
                                    <Box  bg="blue.700" padding="3" borderRadius="10">
                                        <FormControl isRequired={newName===""}>
                                            <FormLabel fontSize="12">
                                                Name:
                                            </FormLabel>
                                   
                                            <Input 
                                                type='string' 
                                                value={newName}
                                                onChange={(e)=>setNewName(e.target.value as string)}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box  bg="blue.700" padding="3" borderRadius="10">
                                        <FormControl isRequired={newDesc===""}>
                                            <FormLabel fontSize="12">
                                                Description:
                                            </FormLabel>

                                            <Input 
                                                type='string' 
                                                value={newDesc}
                                                onChange={(e)=>setNewDesc(e.target.value as string)}
                                            />
                                        </FormControl>
                                    </Box>
                                    {!isUserTheme && <Box bg="blue.700" padding="3" borderRadius="10">
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
                                    }
                                </Box>
                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                                </Button>
                                <Button 
                                    colorScheme='green'
                                    isLoading={submitting}
                                    ml={3}
                                    isDisabled={!isUserTheme && (apiKey === "")}
                                    onClick={handleSubmit}
                                >
                                Update
                                </Button>
                            </AlertDialogFooter>
                        </Box>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
}