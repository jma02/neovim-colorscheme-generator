import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Preview from "../components/Preview";
import { chakraTheme } from "../chakraTheme";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { HashRouter } from "react-router-dom";
import { ChromePicker } from "react-color";
import DragColor from "../components/DragColor";
import MatchMediaMock from "jest-matchmedia-mock";
import { renderColorBucket } from "./ColorBucket.test";
import DeletePreset from "../components/DeletePreset";
import { Preset, ThemeFile } from "../components/Common";
import delete_preset from "../functions/delete_preset";
import fetch_presets from "../functions/fetch_presets";
import Presets from "../components/Presets";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

new MatchMediaMock();
const themeFile = {
    // Mock themeFile object
    bg: "white",
    fg: "black",
    ui: "gray",
    accent: "blue",
    string: "green",
    func: "purple",
    operator: "yellow",
    comment: "gray",
    error: "red",
};

export function renderPreview(){
    
    const chakTheme = extendTheme(chakraTheme);
    const colPic = render(
        <>
            <React.StrictMode>
                <ChakraProvider theme={chakTheme}>
                    <DndProvider backend={HTML5Backend}>
                        <HashRouter>
                            <Preview themeFile={themeFile} setThemeFile={function (x: ThemeFile): void {
                                
                            } } />
                        </HashRouter>
                    </DndProvider>
                </ChakraProvider>
            </React.StrictMode>
        </>
    );
    return colPic;
}


describe("Preview", () => {
    const themeFile = {
    // Mock themeFile object
        bg: "white",
        fg: "black",
        ui: "gray",
        accent: "blue",
        string: "green",
        func: "purple",
        operator: "yellow",
        comment: "gray",
        error: "red",
    };

    test("renders preview with the provided theme", () => {
        const previewElement = renderPreview();
        expect(previewElement);
    });

});
