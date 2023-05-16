import React from "react";
import { Card, CardBody } from "@chakra-ui/react";
import { useDrag } from "react-dnd";
import { DroppedColor } from "./Common";

/**
  * Draggable component which holds a color payload.
   *
   * @remarks
   * See ./ColorBucket.tsx for drop target analog.
   *
   * @param fillColor - hex color string
   *
   */

export default function DragColor({fillColor}: DroppedColor){
    const [{isDragging}, drag] = useDrag(() => ({
        type: "COLOR",
        item: {fillColor},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }), [fillColor]);
    return (
        <Card 
            role="Drag Color"
            ref={drag}
            backgroundColor={fillColor}
            variant="filled" size="lg"
            height="10vh" width="10vh"
            _hover={{boxShadow: `0 0 20px ${fillColor}`,
                transform: "scale(1.05)",
                transition: "transform 0.2s, box-shadow 0.2s",
                zIndex: 1000
            }}
        >
            <CardBody/>
        </Card>
    );
}