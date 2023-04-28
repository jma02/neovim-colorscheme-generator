import React, { useState } from "react";
import { Popover, PopoverTrigger, Button, PopoverContent,
    PopoverArrow, PopoverCloseButton,
    PopoverHeader, PopoverBody, Box, Grid, FormControl, FormHelperText,
    FormLabel, Input, Text, Link} from "@chakra-ui/react";
import { ThemeFile } from "./Common";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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

    return(
        <Box>
            <Popover>
                <PopoverTrigger>
                    <Button colorScheme="green">Click here to post a preset!</Button>
                </PopoverTrigger>
                <PopoverContent bg="blue.600" width="80%" height="100%">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader 
                        fontWeight="bold"
                        bg="blue.700"
                    >Please enter some information about this preset.</PopoverHeader>
                    <PopoverBody padding="5">
                        <FormControl isRequired>
                            <Grid templateColumns="repeat(2,1fr)" gap="10">
                                <Box bg="blue.700" padding="3" borderRadius="10">
                                    <FormLabel fontSize="12">
                                Preset Name:
                                    </FormLabel>
                                    <Input 
                                        type='text' 
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </Box>
                                <Box bg="blue.700" padding="3" borderRadius="10">
                                    <FormLabel fontSize="12">
                                Preset Description:
                                    </FormLabel>
                                    <Input 
                                        type='text' 
                                        value={description}
                                        onChange={handleDescriptiontChange}
                                    />
                                </Box>
                                <Box bg="blue.700" padding="3" borderRadius="10">
                                    <FormLabel fontSize="12">
                                Upvotes:
                                    </FormLabel>
                                    <Input 
                                        type='number' 
                                        value={upvotes}
                                        onChange={handleUpvoteChange}
                                    />
                                </Box>
                                <Box bg="blue.700" padding="3" borderRadius="10">
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
                                    <Button colorScheme="green" 
                                        isDisabled={
                                            (  name===""
                                        || description===""
                                        || apiKey===""
                                        || upvotes===""
                                            )}
                                        isLoading
                                        loadingText='Submitting'
                                        /* ideally would extract this to a seperate file, but want to show spinner during
                                        async call */
                                        onSubmit={()=>{
                                            
                                        }}
                                    > Submit!</Button>
                                </Box>
                            </Grid>                    
                        </FormControl>
                    </PopoverBody>
                </PopoverContent>
            </Popover> 
        </Box>
    );
};