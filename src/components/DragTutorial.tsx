import React from "react";
import { Box, HStack, Popover, PopoverBody, Text,
    PopoverCloseButton, PopoverContent, PopoverTrigger, Image } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import Tutorial1 from "../images/tutorial_1.png";
import Tutorial2 from "../images/tutorial_2.png";
import Tutorial3 from "../images/tutorial_3.png";

export default function DragTutorial(){
    return(
        <HStack>
            <Popover preventOverflow={true}>
                <PopoverTrigger>
                    <InfoIcon/>
                </PopoverTrigger>
                <PopoverContent bgColor="red.400" width="35%">
                    <PopoverCloseButton />
                    <PopoverBody>
                        <HStack>
                            <Box>
                                <Text fontSize="18" fontWeight="semibold">1. Hover over a color</Text>
                                <Image alt="Drag Tutorial Slide 1" src={Tutorial1}  />
                            </Box>
                            <Box>
                                <Text fontSize="18" fontWeight="semibold">2. Drag the color</Text>
                                <Image alt="Drag Tutorial Slide 2" src={Tutorial2}/>
                            </Box>
                            <Box>
                                <Text fontSize="18" fontWeight="semibold">3. Drop the color</Text>
                                <Image alt="Drag Tutorial Slide 3" src={Tutorial3}/>
                            </Box>
                        </HStack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Text>Drag and drop colors to get started!</Text>
        </HStack>
    );
}