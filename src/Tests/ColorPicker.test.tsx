import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ColorPicker from "../components/ColorPicker";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import { chakraTheme } from "../chakraTheme";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { HashRouter } from "react-router-dom";





export function renderColorPicker(){
    const chakTheme = extendTheme(chakraTheme);
    <>
        <React.StrictMode>
            <ChakraProvider theme={chakTheme}>
                <DndProvider backend={HTML5Backend}>
                    <HashRouter>
                        <ColorPicker/>
                    </HashRouter>
                </DndProvider>
            </ChakraProvider>
        </React.StrictMode>
    </>;
}




describe("ColorPicker", () => {
    it("calls the post_preset function when clicked", () => {
        //Place holder
    });
});