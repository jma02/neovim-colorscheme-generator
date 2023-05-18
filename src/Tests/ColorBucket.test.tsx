/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MatchMediaMock from "jest-matchmedia-mock";
import ColorPicker from "../components/ColorPicker";
import ColorBucket from "../components/ColorBucket";
import { ThemeFile } from "../components/Common";
import { HashRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { chakraTheme } from "../chakraTheme";

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

export const renderColorBucket = () => {
    const t = extendTheme(chakraTheme);
    const colorBuck = render(
        <React.StrictMode>
            <ChakraProvider theme={t}>
                <DndProvider backend={HTML5Backend}>
                    <HashRouter>
                        <ColorBucket theme={theme} setThemeFile={function (x: ThemeFile): void {
                        } } prop={""}/>
                    </HashRouter>
                </DndProvider>
            </ChakraProvider>
        </React.StrictMode>
    );
    return colorBuck;
};

describe("ColorBucket tests", () => {


    test("display ColorBucket", () => {
        const colorBuck = renderColorBucket();
        expect(colorBuck);
    });

    test("display ColorBucket", () => {
        const colorBuck = renderColorBucket();
        expect("#000000").toBeInTheDocument;
    });

});
