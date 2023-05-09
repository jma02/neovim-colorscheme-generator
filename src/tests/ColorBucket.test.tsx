import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ColorBucket from "../components/ColorBucket";
import { DroppedColor, ThemeFile } from "../components/Common";
describe("ColorBucket", () => {
    const theme: ThemeFile = {
        accent: "#FF0000",
        bg: "#FF0000",
        fg: "#FF0000",
        ui: "#FF0000",
        string: "#FF0000",
        func: "#FF0000",
        operator: "#FF0000",
        comment: "#FF0000",
        error: "#FF0000",};
    const setThemeFile = jest.fn();
    const prop = "primaryColor";

    test("renders without crashing", () => {
        render(<ColorBucket theme={theme} setThemeFile={setThemeFile} prop={prop} />);
    });

    test("dragging and dropping a color changes the fill color", () => {
        const { getByRole } = render(<ColorBucket theme={theme} setThemeFile={setThemeFile} prop={prop} />);
        const colorBucket = getByRole("ColorBucket");

        const colorToDrop: DroppedColor = { fillColor: "#0000FF" };
        fireEvent.dragStart(colorBucket);
        fireEvent.dragEnter(colorBucket);
        fireEvent.drop(colorBucket, { dataTransfer: { getData: () => JSON.stringify(colorToDrop) } });
        fireEvent.dragEnd(colorBucket);

        expect(setThemeFile).toHaveBeenCalledWith({ ...theme, primaryColor: "#0000FF" });
    });
});