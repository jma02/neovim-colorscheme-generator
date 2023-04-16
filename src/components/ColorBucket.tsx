import React, { useEffect, useState } from "react";
import {  Card, CardBody } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import { DroppedItem, ThemeFile } from "./Common";

interface BucketProps {
    theme: ThemeFile;
    setThemeFile: (x: ThemeFile) => void;
    prop: string
}

export default function ColorBucket({theme, setThemeFile, prop}: BucketProps) {
    const [fillColor, setFillColor] = useState<string>(theme[prop]);
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "CARD",
        drop: (item, monitor) =>{
            const dropped = item as DroppedItem;
            setFillColor(dropped.fillColor);
        }
    }));
    useEffect(()=>{
        setThemeFile({ ...theme, [prop]: fillColor });
    }, [fillColor]);
    return (
        <Card
            ref={dropRef}
            role={"ColorBucket"}
            backgroundColor={fillColor}
            height="8vh"
            width="100%"
        >
            <CardBody/>
        </Card>
    );
}