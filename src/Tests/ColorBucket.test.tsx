import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ColorPicker from "../components/ColorPicker";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import { chakraTheme } from "../chakraTheme";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { HashRouter } from "react-router-dom";
import { ChromePicker } from "react-color";
import DragColor from "../components/DragColor";
import MatchMediaMock from "jest-matchmedia-mock";
import ColorBucket from "../components/ColorBucket";
import { ThemeFile } from "../components/Common";

new MatchMediaMock();

const theme = {
    accent: "#000000",
    bg: "#000000",
    fg: "#000000",
    ui: "#000000",
    string: "#000000",
    func: "#000000",
    operator: "#000000",
    comment: "#000000",
    error: "#000000",
};

export function renderColorBucket(){
    const chakTheme = extendTheme(chakraTheme);
    const colPic = render(
        <>
            <React.StrictMode>
                <ChakraProvider theme={chakTheme}>
                    <DndProvider backend={HTML5Backend}>
                        <HashRouter>
                            <ColorBucket theme={theme} setThemeFile={function (x: ThemeFile): void {
                            } } prop={"#000000"}/>
                        </HashRouter>
                    </DndProvider>
                </ChakraProvider>
            </React.StrictMode>
        </>
    );
    return colPic;
}

describe("ColorPicker", () => {
    test("renders properly", () => {
        const cb =  renderColorBucket();
        expect(cb);
    });


    //This is really the only test that matters for this component, its a simple component
    test("changes fill color when a DragColor is dropped onto ColorBucket", () => {
    
        const { getByRole } = renderColorBucket();
    
        // Simulate a drop event by firing the necessary events on the draggable item
        const draggableItem = getByRole("Draggable-Color"); // Replace with the correct role
        const colorBucket = getByRole("ColorBucket");
        fireEvent.dragStart(draggableItem);
        fireEvent.dragEnter(colorBucket);
        fireEvent.dragOver(colorBucket);
        fireEvent.drop(colorBucket);
    
        // Assert that the fill color has changed
        expect(getComputedStyle(colorBucket).backgroundColor).toBe("");
    });



});