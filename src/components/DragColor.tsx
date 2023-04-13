import React from "react";
import { BackgroundProps, Card, CardBody } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

interface DragProps{
    fillColor: string
}
export default function DragColor({fillColor}: DragProps){
    const [{isDragging}, drag] = useDrag(() => ({
        type: "CARD",
        item: {fillColor},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }));
    return (
        <Card role="Handle" ref={drag} backgroundColor={fillColor} variant="filled" size="lg"
            height="10vh" width="10vh">
            <CardBody/>
        </Card>
    );
}
