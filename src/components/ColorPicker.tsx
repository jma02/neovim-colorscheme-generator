import React, { useState } from "react";
import { Box, Flex, Spacer} from "@chakra-ui/react";
import DragColor from "./DragColor";
import {ChromePicker} from "react-color";

export default function ColorPicker() {
    const [color, setColor] = useState<string>("#000000");
    return (
        <Flex alignItems="center">
            <DragColor fillColor={color}></DragColor>
            <Spacer/>
            <Box p="3.5" pr="5">
                <ChromePicker
                    color={color}
                    disableAlpha={true}
                    onChangeComplete={(color)=>setColor(color.hex)}
                />
            </Box>
        </Flex>
    );
}