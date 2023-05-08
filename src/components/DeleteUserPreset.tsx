import { useDisclosure, Button, AlertDialog, AlertDialogOverlay,
    AlertDialogContent, AlertDialogHeader,
    AlertDialogBody, AlertDialogFooter, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import delete_user_preset from "../functions/delete_user_preset";
import fetch_user_presets from "../functions/fetch_user_presets";
import { DroppedPreset, Preset } from "./Common";

import { ObjectId } from "bson";

interface DeleteUserPresetProps{
    setThemes: (x: Preset[]) => void;
    userId: string;
}

export default function DeleteUserPreset({setThemes, userId}: DeleteUserPresetProps){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement | null>(null);
    const [id, setId] = useState<ObjectId | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false); // submit button spinner
                                                                  
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "PRESET",
        drop: (item, monitor) =>{
            const dropped = item as DroppedPreset;
            setId(dropped._id);
            onOpen();
        }
    })); 

    function handleSubmit(){
        setSubmitting(true);
        // eslint-disable-next-line
        delete_user_preset(userId, (id as ObjectId).toString())
            .then((result)=>{
                fetch_user_presets(userId, setThemes);
                setSubmitting(false);
                onClose();
            })
            .catch((error)=>{
                console.error(error);
                setSubmitting(false);
                onClose();
            });
    }
    return (
        <>
            <Flex 
                bg='maroon'
                h="10vh"
                textAlign="center"
                borderRadius="md"
                justifyContent="center"
                borderColor="white"
                borderWidth="thin"
                direction="column"
                ref={dropRef}
            >
              Drag a theme here to delete it!
            </Flex>
      
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
      
                        <AlertDialogBody>
                        Are you sure you want to delete this theme? This action is irreversible.
                        </AlertDialogBody>
      
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                            </Button>
                            <Button 
                                colorScheme='red'
                                isLoading={submitting}
                                onClick={handleSubmit}
                                ml={3}>
                      Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}