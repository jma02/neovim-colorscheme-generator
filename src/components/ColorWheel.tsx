import React, { useEffect, useState } from "react";
import { BackgroundProps, Card, CardBody } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import DragColor from "./DragColor";

interface droppedItem{
    fillColor: string
}

export default function ColorWheel() {
    const [value, setValue] = React.useState("#000000");
    //const handleChange = (event : string) => setValue(event.target.value);
  
    return (
        <>
            <DragColor key={value} fillColor={value}/>
            <Input
                type="color"
                _after={{
                    content: "\"Pick Color\""
                }}
                //as={DragColor}
                variant={"unstyled"}
                sx={{
                    borderRadius: "md",
                    py: "0.25",
                    px: "6",
                    bg: "blue.500",
                    color: "white",
                    _hover: {
                        bg: "blue.600",
                    },
                    _active: {
                        bg: "blue.700",
                    },
                }}
                width = "10vh"
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
}