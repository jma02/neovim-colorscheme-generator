import React from "react";
import { Card, CardBody } from "@chakra-ui/react";
import { useDrag } from "react-dnd";
import { DroppedColor } from "./Common";

export default function DragColor({fillColor}: DroppedColor){
    const [{isDragging}, drag] = useDrag(() => ({
        type: "COLOR",
        item: {fillColor},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }), [fillColor]);
    return (
        <Card role="Drag Color" ref={drag} backgroundColor={fillColor} variant="filled" size="lg"
            height="10vh" width="10vh">
            <CardBody/>
        </Card>
    );
}
