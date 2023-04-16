import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import DragColor from "./DragColor";
import {ChromePicker} from "react-color";

export default function ColorPicker() {
    const [color, setColor] = useState<string>("#000000");
    return (
        <Grid templateColumns="repeat(2,1fr)" alignItems="center">
            <GridItem w="25vh" paddingLeft="12">
                <DragColor fillColor={color}></DragColor>
            </GridItem>
            <ChromePicker
                color={color}
                disableAlpha={true}
                onChangeComplete={(color)=>setColor(color.hex)}
            />
        </Grid>
    );
}