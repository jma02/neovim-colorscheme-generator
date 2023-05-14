import React, { useState } from "react";
import { Popover, PopoverTrigger, Button, PopoverContent,
    PopoverArrow, PopoverCloseButton,
    PopoverHeader, PopoverBody, Box, Grid, FormControl,
    FormLabel, Input, Link} from "@chakra-ui/react";
import { ThemeFile, PostFragment, Preset} from "./Common";
import post_user_preset from "../functions/post_user_preset";
import fetch_user_presets from "../functions/fetch_user_presets";
import UserPostAlerts from "./UserPostAlerts";

interface PostButtonProps{
    ThemeFile: ThemeFile;
    setPresets: (x: Preset[]) => void;
    user: string;
}
/**
 * Component providing UI for posting themes to user database.
 * 
 * @remarks 
 * See ../functions/post_user_preset.ts for backend implementation.
   *
   * @param ThemeFile 
   * @param setPresets - called upon a successful theme post and user themes retrieval.
   * @param apiError - passed down to alerts component for user feedback.
   */

export default function PostUserTheme({ThemeFile, setPresets, user}: PostButtonProps){
    const [name, setName] = useState<string>(""); 
    const [description, setDescription] = useState<string>("");
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const handleDescriptiontChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value);

    const [submitting, setSubmitting] = useState<boolean>(false); // submit button spinner
    const [apiError, setApiError] = useState<boolean | null>(null); // alert logic

    function handleSubmit(){
        setSubmitting(true);
        const postFrag: PostFragment = {
            name: name,
            description: description,
            ThemeFile: ThemeFile,
            upvotes: 0
        };
        post_user_preset(postFrag, user)
            .then((success: boolean) => {
                setApiError(false);
                setSubmitting(false);
                fetch_user_presets(user, setPresets);
            })
            .catch((error: Error) => {
                setApiError(true);
                setSubmitting(false);
                console.error(error);
            });
    }                                     
    
    return(
        <Box>
            <Popover strategy="fixed">
                <PopoverTrigger>
                    <Button
                        colorScheme="green" 
                        fontSize="13"
                        size="lg"
                        w="100%"
                    >Save Theme!</Button>
                </PopoverTrigger>
                <PopoverContent bg="blue.600" width="100%" height="100%">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader 
                        fontWeight="bold"
                        bg="blue.700"
                    >Please enter some information about this theme.</PopoverHeader>
                    <PopoverBody padding="5">
                        <Grid templateColumns="repeat(2,1fr)" gap="6">
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                <FormControl isRequired={name===""}>
                                    <FormLabel fontSize="12">
                                Theme Name:
                                    </FormLabel>
                                    <Input 
                                        type='text' 
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </FormControl>
                            </Box>
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                <FormControl isRequired={description===""}>
                                    <FormLabel fontSize="12">
                                Theme Description:
                                    </FormLabel>
                                    <Input 
                                        type='text' 
                                        value={description}
                                        onChange={handleDescriptiontChange}
                                    />
                                </FormControl>
                            </Box>
                            <UserPostAlerts apiError={apiError}/>
                            <Button colorScheme="green" 
                                isDisabled={
                                    (  name===""
                                        || description===""
                                    )}
                                isLoading={submitting}
                                loadingText="Submitting"
                                onClick={handleSubmit}
                            > Submit!</Button>
                        </Grid>                    
                    </PopoverBody>
                </PopoverContent>
            </Popover> 
        </Box>
    );
};