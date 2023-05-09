import React, { useState } from "react";
import { Card, CardBody, Flex, Box, 
    Heading, Text, Spacer, Button} from "@chakra-ui/react";
import { useDrag } from "react-dnd";
import { DroppedPreset, ThemeFile } from "./Common";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { ObjectId } from "bson";
import upvote_theme from "../functions/upvote_theme";


interface DragPresetProps{
    ThemeFile: ThemeFile;
    name: string;
    description: string;
    upvotes: number;
    _id: ObjectId;
    isUserTheme: boolean;
    userId: string;
}

export default function DragPreset({ThemeFile, name, description, upvotes, _id, userId, isUserTheme}: DragPresetProps){
    const [upvoted, setUpvoted] = useState<boolean>(false);
    const [localUpvotes, setLocalUpvotes] = useState<number>(upvotes);
    const [{isDragging}, drag] = useDrag(() => ({
        type: "PRESET",
        item: {ThemeFile, _id, name, description, upvotes} as DroppedPreset,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }));

    function handleClick(){
        setUpvoted(true);
        setLocalUpvotes(localUpvotes+1);
        isUserTheme ? upvote_theme(userId, _id.toString()) : upvote_theme("", _id.toString()); 
    }
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
                        <Flex alignItems="center" justifyItems="center" textAlign="center">
                            <Box>
                                <Text fontWeight="extrabold" fontSize="10">
                                    {localUpvotes}
                                </Text>
                            </Box>
                            <Button 
                                h="0"
                                w="0"
                                bg="transparent"
                                isDisabled={upvoted}
                                onClick={handleClick}
                            >
                                <ArrowUpIcon
                                    color={upvoted ? "lime" : "green"}
                                />
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </CardBody>
        </Card> 
    );
}
