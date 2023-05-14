import React from "react";
import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { useDragLayer, useDrop } from "react-dnd";
import { DroppedPreset, ThemeFile } from "./Common";

/**
 * Drop target for DragPreset
   *
   */

interface PresetLoaderProps {
    setThemeFile: (x: ThemeFile) => void;
}
export default function PresetLoader({setThemeFile}: PresetLoaderProps) {
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "PRESET",
        drop: (item, monitor) =>{
            const dropped = item as DroppedPreset;
            setThemeFile(dropped.ThemeFile);
        },
        collect: (monitor)=>({
            canDrop: monitor.canDrop() && monitor.isOver(),
        }),
    }));
    
    const { isDragging, type } = useDragLayer((monitor) => ({
        isDragging: monitor.isDragging(),
        type: monitor.getItemType(),
    }));

    
    return (
        <Box paddingTop="2">
            <Card
                size="sm"
                ref={dropRef}
                role={"Preset Loader"}
                bg="teal.600"
                border="1px"
                borderColor={collectedProps.canDrop ? "lime" : "white"}
                boxShadow={isDragging && type === "PRESET" ? 
                    collectedProps.canDrop ? "0 0 10px 5px rgba(0, 255, 0, 1)"
                        :"0 0 10px 5px rgba(255, 255, 255, 0.5)" 
                    : "none"}                
            >
                <CardBody>
                    <Text
                        fontWeight="semibold" 
                        color="white">
                    Drop a preset here to load it!
                    </Text>
                </CardBody>
            </Card>
        </Box>
    );
}