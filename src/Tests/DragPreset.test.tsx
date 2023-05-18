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

new MatchMediaMock();

export function renderDragPreset(){
    const chakTheme = extendTheme(chakraTheme);
    const colPic = render(
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
        </>
    );
    return colPic;
}

describe("PresetPostButton", () => {
    test("renders", () => {
        const dp =  renderDragPreset();
        expect(dp);
    });
});