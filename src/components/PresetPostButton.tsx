import React, { useState } from "react";
import { Popover, PopoverTrigger, Button, PopoverContent,
    PopoverArrow, PopoverCloseButton,
    PopoverHeader, PopoverBody, Box, Grid, FormControl, FormHelperText,
    FormLabel, Input, Text} from "@chakra-ui/react";
import { ThemeFile } from "./Common";
import download from "../functions/download";

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
    const [upvotes, setUpvotes] = useState<number>(0);
    return(
        <Box>
            <Popover>
                <PopoverTrigger>
                    <Button colorScheme="green">Click here to post a preset!</Button>
                </PopoverTrigger>
                <PopoverContent bg="blue.600" boxSize="s">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader 
                        fontWeight="bold"
                        bg="blue.700"
                    >Please enter some information about this preset.</PopoverHeader>
                    <PopoverBody padding="5">
                        <Grid templateColumns="repeat(2,1fr)" gap="10">
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                <FormControl 
                                    as="form"
                                > 
                                    <FormLabel fontSize="12">
                                Preset Name:
                                    </FormLabel>
                                    <Input 
                                        type='text' 
                                    />
                                    <FormHelperText>
                                    </FormHelperText>
                                </FormControl>
                            </Box>
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                <FormControl 
                                    as="form" 
                                >
                                    <FormLabel fontSize="12">
                                Preset Description:
                                    </FormLabel>
                                    <Input 
                                        type='text' 
                                    />
                                    <FormHelperText>

                                    </FormHelperText>
                                </FormControl>
                            </Box>
                            <Box bg="blue.700" padding="3" borderRadius="10">
                                <FormControl 
                                    as="form" 
                                >
                                    <FormLabel fontSize="12">
                                Upvotes:
                                    </FormLabel>
                                    <Input 
                                        type='number' 
                                    />
                                    <FormHelperText>
                                    </FormHelperText>
                                </FormControl>
                            </Box>
                            <Button colorScheme="green"> Submit!</Button>
                        </Grid>                    
                    </PopoverBody>
                </PopoverContent>
            </Popover> 
        </Box>
    );
};