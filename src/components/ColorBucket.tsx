import React, { useEffect, useState } from "react";
import {  Card, CardBody } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

interface droppedItem{
    fillColor: string
}

interface themeFile{
    [name: string]: string;
}
interface BucketProps {
    theme: themeFile;
    setThemeFile: (x: themeFile) => void;
    prop: string
}

export default function ColorBucket({theme, setThemeFile, prop}: BucketProps) {
    const [fillColor, setFillColor] = useState<string>("#ffffff");
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "CARD",
        drop: (item, monitor) =>{
            const dropped = item as droppedItem;
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