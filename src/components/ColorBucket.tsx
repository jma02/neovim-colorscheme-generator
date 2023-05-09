import React, { useEffect, useState } from "react";
import {  Card, CardBody } from "@chakra-ui/react";
import { useDrag, useDragLayer, useDrop } from "react-dnd";
import { DroppedColor, ThemeFile } from "./Common";

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
        }
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
            borderColor={isDragging && type === "COLOR" ? "cyan" : "transparent"}
            boxShadow={isDragging  && type === "COLOR" ? "0 0 10px 5px rgba(0, 255, 255, 0.5)" : "none"}
            ref={dropRef}
            role={"ColorBucket"}
            backgroundColor={fillColor}
            height="10vh"
            width="100%"
        >
            <CardBody
                ref={drag} 
                backgroundColor={fillColor} 
                height="10vh"
                width="100%"
                borderRadius="lg"/>
        </Card>
    );
}