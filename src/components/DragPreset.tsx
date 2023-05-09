import React from "react";
import { Card, CardBody, Flex, Box, 
    Heading, Text, Spacer} from "@chakra-ui/react";
import { useDrag } from "react-dnd";
import { DroppedPreset, ThemeFile } from "./Common";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { ObjectId } from "bson";


interface DragPresetProps{
    ThemeFile: ThemeFile;
    name: string;
    description: string;
    upvotes: number;
    _id: ObjectId;
}

export default function DragPreset({ThemeFile, name, description, upvotes, _id}: DragPresetProps){
    const [{isDragging}, drag] = useDrag(() => ({
        type: "PRESET",
        item: {ThemeFile, _id} as DroppedPreset,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }));
    return (
        <Card 
            role="Drag Preset" 
            ref={drag} 
            width="100%"
            height="10vh"
            border="2px" // Note for future devs: border must be defined first
            borderColor={ThemeFile.bg}
        >
            <CardBody>
                <Flex>
                    <Box
                        width="100%">
                        <Heading size="xs">{name}</Heading>
                        <Text fontSize="10">{description}</Text>
                    </Box>
                    <Spacer/>
                    <Box>
                        <Flex>
                            <ArrowUpIcon color="green"/>
                            <Text fontWeight="extrabold" fontSize="10">
                                {upvotes}
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </CardBody>
        </Card> 
    );
}
