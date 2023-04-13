import React, { useEffect, useState } from "react";
import { BackgroundProps, Card, CardBody } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

interface droppedItem{
    fillColor: string
}

export default function ColorBucket() {
    const [fillColor, setFillColor] = useState<string>("white");
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "CARD",
        drop: (item, monitor) =>{
            const dropped = item as droppedItem;
            setFillColor(dropped.fillColor);
        }
    }));
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