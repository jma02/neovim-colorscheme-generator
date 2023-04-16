import React, { useEffect, useState } from "react";
import {  Card, CardBody } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import { DroppedItem, ThemeFile } from "./Common";

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