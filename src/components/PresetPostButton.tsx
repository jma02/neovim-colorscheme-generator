import React, { useState } from "react";
import { Popover, PopoverTrigger, Button, PopoverContent,
    PopoverArrow, PopoverCloseButton,
    PopoverHeader, PopoverBody, Box, Grid, FormControl,
    FormLabel, Input, Link, Alert, AlertDescription, AlertIcon, AlertTitle} from "@chakra-ui/react";
import { ThemeFile, PostFragment} from "./Common";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import post_preset from "../functions/post_preset";
import PostButtonAlerts from "./PostButtonAlerts";

interface PostButtonProps{
    ThemeFile: ThemeFile;
}

/*
export interface Preset{
    _id: ObjectId; _id will be automatically assigned by MongoDB
    name: string;
    description: string;
    ThemeFile: ThemeFile;
    upvotes: number;
}
*/

export default function PresetPostButton({ThemeFile}: PostButtonProps){
    const [name, setName] = useState<string>(""); 
    const [description, setDescription] = useState<string>("");
    const [upvotes, setUpvotes] = useState<string>("");
    const [apiKey, setApiKey] = useState<string>("");
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const handleDescriptiontChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value);
    const handleUpvoteChange = (event: React.ChangeEvent<HTMLInputElement>) => setUpvotes(event.target.value);
    const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => setApiKey(event.target.value);

    const [submitting, setSubmitting] = useState<boolean>(false); // submit button spinner
    const [apiError, setApiError] = useState<boolean | null>(null); // alert logic

    function handleSubmit(){
        setSubmitting(true);
        const postFrag: PostFragment = {
            name: name,
            description: description,
            ThemeFile: ThemeFile,
            upvotes: Number(upvotes)
        };
        post_preset(postFrag, apiKey)
            .then((success: boolean) => {
                setApiError(false);
                setSubmitting(false);
            })
            .catch((error: Error) => {
                setApiError(true);
                setSubmitting(false);
            });
    }                                     
    
    return(
        <Box>
            <Popover>
                <PopoverTrigger>
                    <Button colorScheme="green">Click here to post a preset!</Button>
                </PopoverTrigger>
                <PopoverContent bg="blue.600" width="100%" height="100%">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader 
                        fontWeight="bold"
                        bg="blue.700"
                    >Please enter some information about this preset.</PopoverHeader>
                    <PopoverBody padding="5">
                        <Grid templateColumns="repeat(2,1fr)" gap="6">
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                <FormControl isRequired={name===""}>
                                    <FormLabel fontSize="12">
                                Preset Name:
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
                                Preset Description:
                                    </FormLabel>
                                    <Input 
                                        type='text' 
                                        value={description}
                                        onChange={handleDescriptiontChange}
                                    />
                                </FormControl>
                            </Box>
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                <FormControl isRequired={upvotes===""}>
                                    <FormLabel fontSize="12">
                                Upvotes:
                                    </FormLabel>
                                    <Input 
                                        type='number' 
                                        value={upvotes}
                                        onChange={handleUpvoteChange}
                                    />
                                </FormControl>
                            </Box>
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                
                                <FormControl isRequired={apiKey===""}>
                                    <FormLabel fontSize="12">
                                        <Link href='https://www.mongodb.com/docs/atlas/app-services/authentication/api-key/' isExternal> 
                                            API Key: <ExternalLinkIcon mx='2px' />
                                        </Link>
                                    </FormLabel>
                                   
                                    <Input 
                                        type='password' 
                                        value={apiKey}
                                        onChange={handleApiKeyChange}
                                    />
                                </FormControl>
                            </Box>
                            <PostButtonAlerts apiError={apiError}/>
                            <Button colorScheme="green" 
                                isDisabled={
                                    (  name===""
                                        || description===""
                                        || apiKey===""
                                        || upvotes===""
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