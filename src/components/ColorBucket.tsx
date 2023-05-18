import React, { useEffect, useState } from "react";
import {  Card, CardBody } from "@chakra-ui/react";
import { useDrag, useDragLayer, useDrop } from "react-dnd";
import { DroppedColor, ThemeFile } from "./Common";

/**
   * Drop target for DragColor component. When a DragColor is dropped onto
   * ColorBucket, ColorBucket will inherit DragColor's color, and call
   * setThemeFile to reflect this inheritence.
   *
   * @remarks
   * see ./DragColor.tsx for draggable analog.
   * @param theme - ThemeFile of the application
   * @param setThemeFile - corresponding state function for theme
   * @param prop - corresponds to the theme property which ColorBucket represents.
   */

interface ColorBucketProps {
    theme: ThemeFile;
    setThemeFile: (x: ThemeFile) => void;
    prop: string
}
export default function ColorBucket({theme, setThemeFile, prop}: ColorBucketProps) {
    const [fillColor, setFillColor] = useState<string>(
        // TypeScript has NO POWER OVER ME
        // eslint-disable-next-line no-extra-parens
        (theme as unknown as {[prop: string]: string})[prop]
    );
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "COLOR",
        drop: (item, monitor) =>{
            const dropped = item as DroppedColor;
            setFillColor(dropped.fillColor);
        },
        collect: (monitor)=>({
            canDrop: monitor.canDrop() && monitor.isOver(),
        }),
    }));

    const [collectedPropsDrag, drag] = useDrag(() => ({
        type: "COLOR",
        item: {fillColor},
    }), [fillColor]);

    const { isDragging, type } = useDragLayer((monitor) => ({
        isDragging: monitor.isDragging(),
        type: monitor.getItemType(),
    }));

    useEffect(()=>{
        setFillColor(theme[prop as keyof ThemeFile]);
    }, [theme]);
    useEffect(()=>{
        setThemeFile({ ...theme, [prop]: fillColor });
    }, [fillColor]);
    return (
        <Card
            borderStyle="solid"
            borderWidth="1px"
            borderRadius="lg"
            borderColor={isDragging && type === "COLOR" ?
                collectedProps.canDrop ? "lime" : "cyan" : "transparent"}
            boxShadow={isDragging  && type === "COLOR" ? 
                collectedProps.canDrop ? "0 0 10px 5px rgba(0, 255, 0, 1)" 
                    : "0 0 10px 5px rgba(0, 255, 255, 0.5)" 
                : "none"}
            ref={dropRef}
            role={"ColorBucket"}
            backgroundColor={fillColor}
            height="10vh"
            width="100%"
        >
            <CardBody
                ref={drag} 
                role = {"Draggable-Color"}
                backgroundColor={fillColor} 
                height="10vh"
                width="100%"
                borderRadius="lg"/>
        </Card>
    );
}