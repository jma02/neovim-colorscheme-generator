/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { DndProvider, DragDropContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MatchMediaMock from "jest-matchmedia-mock";
import ColorPicker from "../components/ColorPicker";
import DragColor from "../components/DragColor";
import { ChakraProvider } from "@chakra-ui/provider";
import { HashRouter } from "react-router-dom";
import { ReactElement, ReactNode } from "react";
import { wrapInTestContext } from "react-dnd-test-utils";
import TestUtils from "react-dom/test-utils";
import expect from "expect";
import Box from "./components/Box";
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

export const renderWithProviders = (ui: ReactElement) => {
    const Wrapper = ({ children }: { children: ReactNode }) => (
        <HashRouter>
            <ChakraProvider theme={theme}>
                <DndProvider backend={HTML5Backend}>{children}</DndProvider>
            </ChakraProvider>
        </HashRouter>
    );

    return render(ui, { wrapper: Wrapper });
};

describe("ColorBucket tests", () => {

    test("displays DragColor", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <DragColor fillColor={"#000000"}/>
            </DndProvider>
        );
    });

    test("should be draggable", () => {
        renderWithProviders(<DragColor fillColor="#FF0000" />);
        const draggableElement = render(<DragColor fillColor="#FF0000" />);
        const dragTarget = getByTestId(draggableElement.container, "dragTarget");
    });

});