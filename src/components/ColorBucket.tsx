import React, { useEffect, useState } from "react";
import {  Card, CardBody } from "@chakra-ui/react";
import { useDrag, useDrop } from "react-dnd";
import { DroppedColor, ThemeFile } from "./Common";
import DragColor from "./DragColor";

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

    const [{isDragging}, drag] = useDrag(() => ({
        type: "COLOR",
        item: {fillColor},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }), [fillColor]);


    useEffect(()=>{
        setFillColor(theme[prop as keyof ThemeFile]);
    }, [theme]);
    useEffect(()=>{
        setThemeFile({ ...theme, [prop]: fillColor });
    }, [fillColor]);
    return (
        <Card
            ref={dropRef}
            role={"ColorBucket"}
            backgroundColor={fillColor}
            height="10vh"
            width="10vh"
        >
            <CardBody ref={drag} backgroundColor={fillColor} style={{ borderRadius: 20 }}/>
        </Card>
    );
}