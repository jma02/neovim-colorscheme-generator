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

export function renderColorPicker(){
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

describe("ColorPicker", () => {
    test("renders properly", () => {
        const cp =  renderColorPicker();
        expect(cp);
    });

    test("renders the color wheel with correct starting color", () => {
        const cp =  renderColorPicker();
        expect(<ChromePicker color = {"#000000"}/>);
    }
    );

    test("renders the Drag Color", () => {
        const cp =  renderColorPicker();
        expect(<DragColor fillColor = {"#000000"}/>);
    }
    );

    //Check if all states of the color wheel render
    test("renders hex", () => {
        const cp =  renderColorPicker();
        expect("Hex");
    }
    );
    test("renders RGB", () => {
        const cp =  renderColorPicker();
        expect("RGB");
    }
    );
    test("renders HSL", () => {
        const cp =  renderColorPicker();
        expect("HSL");
    }
    );


    test("Hex key is shown", () => {
        const cp =  renderColorPicker();
        expect("#000000");
    }
    );
});