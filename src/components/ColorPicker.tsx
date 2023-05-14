import React, { useState } from "react";
import { Box, Flex, Spacer} from "@chakra-ui/react";
import DragColor from "./DragColor";
import {ChromePicker} from "react-color";

/**
   * Boilerplate component from `react-color`. Provides an interface
   * for specifying a hex color code or choosing a color from a chrome grid.  
   * 
   * @remarks
   * ChromePicker's size cannot be changed. This leads to some ugly
   * UI depending on the size of the user's screen. Unfortunate.
   * 
   * Potential TODO: find a replacement component for ChromePicker
   *
   */

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