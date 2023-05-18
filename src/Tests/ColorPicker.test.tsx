import React, { ReactElement, ReactNode } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MatchMediaMock from "jest-matchmedia-mock";
import ColorPicker from "../components/ColorPicker";
import { chakraTheme } from "../chakraTheme";
import DragColor from "../components/DragColor";
import { ChromePicker } from "react-color";

new MatchMediaMock();


export const renderColorPicker = () => {
    const t = extendTheme(chakraTheme);
    const colorBuck = render(
        <React.StrictMode>
            <ChakraProvider theme={t}>
                <DndProvider backend={HTML5Backend}>
                    <HashRouter>
                        <ColorPicker/>
                    </HashRouter>
                </DndProvider>
            </ChakraProvider>
        </React.StrictMode>
    );
    return colorBuck;
};


describe("ColorPicker tests", () => {

    test("renders color picker", () => {
        const cp = renderColorPicker();
        expect(cp);
    });

    test("Checks for color wheel", () => {
        const cp = renderColorPicker();
        expect(<ChromePicker
            color={"#000000"} />).toBeInTheDocument;
    }
    );

    test("checks color in the wheel", () => {
        const cp = renderColorPicker();
        expect("#000000").toBeInTheDocument;
    }
    );

    test("checks DragColor opject", () => {
        const cp = renderColorPicker();
        expect(<DragColor fillColor={"#000000"}/>).toBeInTheDocument;
    }
    );

    test("Checks for Hex", () => {
        const cp = renderColorPicker();
        expect("Hex").toBeInTheDocument;
    }
    );

    test("Checks for RGB", () => {
        const cp = renderColorPicker();
        expect("RGB").toBeInTheDocument;
    }
    );

});
