import React from "react";
import { Card, CardBody } from "@chakra-ui/react";
import { useDrag } from "react-dnd";
import { DroppedItem } from "./Common";

export default function DragColor({fillColor}: DroppedItem){
    const [{isDragging}, drag] = useDrag(() => ({
        type: "CARD",
        item: {fillColor},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }), [fillColor]);
    return (
        <Card role="Handle" ref={drag} backgroundColor={fillColor} variant="filled" size="lg"
            height="10vh" width="10vh">
            <CardBody/>
        </Card>
    );
}
