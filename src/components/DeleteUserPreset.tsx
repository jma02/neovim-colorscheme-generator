import { useDisclosure, Button, AlertDialog, AlertDialogOverlay,
    AlertDialogContent, AlertDialogHeader, Text,
    AlertDialogBody, AlertDialogFooter, Flex, Box, Alert, AlertIcon } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDragLayer, useDrop } from "react-dnd";
import delete_user_preset from "../functions/delete_user_preset";
import fetch_user_presets from "../functions/fetch_user_presets";
import { DroppedPreset, Preset } from "./Common";

import { ObjectId } from "bson";

/**
  * Provides the user a robust interface for deleting a theme from their user list.

   * @remarks
   * see ../functions/post_user_preset for backend implementation
   *
   * @param setThemes - state function which sets the displayed user themes
   * @param userId - state variable representing the user's uuid.
   */

interface DeleteUserPresetProps{
    setThemes: (x: Preset[]) => void;
    userId: string;
}

export default function DeleteUserPreset({setThemes, userId}: DeleteUserPresetProps){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement | null>(null);
    const [id, setId] = useState<ObjectId | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false); // submit button spinner

    const [alertBuffer, setAlertBuffer] = useState<boolean>(false); // conditionally renders a success message.
                                                                  
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "PRESET",
        drop: (item, monitor) =>{
            const dropped = item as DroppedPreset;
            setId(dropped._id);
            onOpen();
        },
        collect: (monitor)=>({
            canDrop: monitor.canDrop() && monitor.isOver(),
        }),
    })); 

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const { isDragging, type } = useDragLayer((monitor) => ({
        isDragging: monitor.isDragging(),
        type: monitor.getItemType(),
    }));


    function handleSubmit(){
        setSubmitting(true);
        // eslint-disable-next-line
        delete_user_preset(userId, (id as ObjectId).toString())
            .then((result)=>{
                fetch_user_presets(userId, setThemes);
                setSubmitting(false);
                setAlertBuffer(true);
                sleep(3000)
                    .then((resolve) =>{
                        onClose();
                        setAlertBuffer(false);
                    });
            })
            .catch((error)=>{
                console.error(error);
                setSubmitting(false);
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
                borderColor={collectedProps.canDrop ? "red" : "white"}
                borderWidth="thin"
                direction="column"
                ref={dropRef}
                boxShadow={isDragging && type === "PRESET" ? 
                    collectedProps.canDrop ? "0 0 10px 5px rgba(255, 0, 0, 0.5)" 
                        : "0 0 10px 5px rgba(255, 255, 255, 0.5)" 
                    : "none"}
                p="4"
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
      
                        {/* Conditionally render a confirmation message, or a success message */}
            
                        {!alertBuffer ? <Box>
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
                        </Box>
                            :
                            <Alert status='success'>
                                <AlertIcon textColor="blue.800"/>
                                <Text textColor="blue.800">Theme successfully deleted.</Text>
                            </Alert>
                        }
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}