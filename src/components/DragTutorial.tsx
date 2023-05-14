import React from "react";
import { Box, HStack, Popover, PopoverBody, Text,
    PopoverCloseButton, PopoverContent, PopoverTrigger, Image } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import Tutorial1 from "../images/tutorial_1.png";
import Tutorial2 from "../images/tutorial_2.png";
import Tutorial3 from "../images/tutorial_3.png";

/**
 * Simple tutorial component.
   **/


export default function DragTutorial(){
    return(
        <HStack>
            <Box>
                <Popover>
                    <PopoverTrigger>
                        <InfoIcon 
                            aria-label="info" 
                            _hover={{
                                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5)",
                                borderRadius: "50%"
                            }} />
                    </PopoverTrigger>
                    <PopoverContent bgColor="red.400" width="100vh">
                        <PopoverCloseButton />
                        <PopoverBody>
                            <HStack p="4">
                                <Box bgColor="blue.700" borderRadius="10" borderColor="red.200" borderWidth="1px" p="2">
                                    <Text fontSize="18" fontWeight="light">1. Hover over a color</Text>
                                    <Image alt="Drag Tutorial Slide 1" src={Tutorial1}  />
                                </Box>
                                <Box bgColor="blue.700" borderRadius="10" borderColor="red.200" borderWidth="1px" p="2">
                                    <Text fontSize="18" fontWeight="light">2. Drag the color</Text>
                                    <Image alt="Drag Tutorial Slide 2" src={Tutorial2}/>
                                </Box>
                                <Box bgColor="blue.700" borderRadius="10" borderColor="red.200" borderWidth="1px" p="2">
                                    <Text fontSize="18" fontWeight="light">3. Drop the color</Text>
                                    <Image alt="Drag Tutorial Slide 3" src={Tutorial3}/>
                                </Box>
                            </HStack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
            <Text>Drag and drop colors to get started!</Text>
        </HStack>
    );
}