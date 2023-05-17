import React from "react";
import {useState} from "react";
import { InfoIcon, DownloadIcon } from "@chakra-ui/icons";
import { Flex, HStack, Popover, PopoverTrigger, PopoverContent,
    PopoverHeader, PopoverArrow, PopoverCloseButton, 
    PopoverBody, Button, FormControl, FormLabel, Input,
    FormHelperText, Spacer, Text } from "@chakra-ui/react";
import download from "../functions/download";
import PresetLoader from "./PresetLoader";
import { ThemeFile } from "./Common";

/**
   * Decomposed component containing two primary components:
   *  - A download button which downloads .lua themes to the user's machine
   *  - A drop target for loading presets.
   *
   */

interface PreviewButtonsProps{
    themeFile: ThemeFile;
    setThemeFile: (x: ThemeFile) => void;
}

export default function PreviewButtonsGroup({themeFile, setThemeFile}: PreviewButtonsProps){
    const [input, setInput] = useState<string>("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
    return(
        <Flex paddingLeft="10" paddingRight="10">
            <HStack>
                <Popover>
                    <PopoverTrigger>
                        <InfoIcon
                            _hover={{
                                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5)",
                                borderRadius: "50%"
                            }}
                        />
                    </PopoverTrigger>
                    <PopoverContent bg='blue.200' color='white'>
                        <PopoverHeader fontWeight='semibold'>Installation</PopoverHeader>
                        <PopoverArrow bg='red.500' />
                        <PopoverCloseButton bg='purple.300' />
                        <PopoverBody>
                            After downloading your theme file, move your theme file to the directory
                            <Text as="mark" color="white" bgColor="gray.800" fontFamily="monospace"> ~/.config/colors</Text>, and append the line
                            <Text as="mark" color="white" bgColor="gray.800" fontFamily="monospace"> colorscheme [theme_file_name]</Text> to your 
                            <Text as="mark" color="white" bgColor="gray.800" fontFamily="monospace"> init.lua / init.vim </Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Button
                            style={{marginTop: "10px"}}
                            leftIcon={<DownloadIcon />}
                            colorScheme="red"
                        >
                                Download .lua File
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent bg="purple.900">
                        <PopoverArrow />
                        <PopoverCloseButton zIndex="100"/>
                        <PopoverBody>
                            <FormControl 
                                as="form" 
                                onSubmit={(event) => {
                                    event.preventDefault(); // prevent default form submission
                                    download(themeFile, input);
                                }}>
                                <FormLabel fontSize="12">
                                Please name your theme file, then press <Text as="mark" color="white" bgColor="gray.800" fontFamily="monospace">Enter</Text> 
                                </FormLabel>
                                <Input 
                                    type='text' 
                                    value={input} 
                                    onChange={handleInputChange}
                                />
                                <FormHelperText><Text as="mark" color="white" bgColor="gray.800" fontFamily="monospace">
                                        .lua</Text> will be appended to your theme name.
                                </FormHelperText>
                            </FormControl>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>                    
            </HStack>
            <Spacer/>
            <PresetLoader setThemeFile={setThemeFile}/>
        </Flex>
    );
}