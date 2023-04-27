import React from "react";
import { Popover, PopoverTrigger, Button, PopoverContent,
    PopoverArrow, PopoverCloseButton,
    PopoverHeader, PopoverBody, Box} from "@chakra-ui/react";
import { ThemeFile } from "./Common";

interface PostButtonProps{
    ThemeFile: ThemeFile;
}

export default function PresetPostButton({ThemeFile}: PostButtonProps){
    return(
        <Box>
            <Popover>
                <PopoverTrigger>
                    <Button bg="limegreen">Click here to post a preset!</Button>
                </PopoverTrigger>
                <PopoverContent bg="green.700" boxSize="xl">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader fontWeight="bold">Please give some information about this preset.</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover> 
        </Box>
    );
};