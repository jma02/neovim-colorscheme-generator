import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Editor from "../components/Editor";

const themeFile = {
    accent: "#FF0000",
    bg: "#FF0000",
    fg: "#FF0000",
    ui: "#FF0000",
    string: "#FF0000",
    func: "#FF0000",
    operator: "#FF0000",
    comment: "#FF0000",
    error: "#FF0000",
};

describe("Editor", () => {
    it("renders a DragTutorial component", () => {
        render(<Editor themeFile={themeFile} setThemeFile={() => {}} />);
        const dragTutorial = screen.getByRole("DragTutorial");
        expect(dragTutorial).toBeInTheDocument();
    });

    it("renders preset colors in the Presets tab", () => {
        render(<Editor themeFile={themeFile} setThemeFile={() => {}} />);
        const presetCards = screen.getAllByRole("DragColor");
        expect(presetCards.length).toBe(12);
    });

    it("renders a ColorPicker component in the Color Picker tab", () => {
        render(<Editor themeFile={themeFile} setThemeFile={() => {}} />);
        fireEvent.click(screen.getByText("Color Picker"));
        const colorPicker = screen.getByRole("ColorPicker");
        expect(colorPicker).toBeInTheDocument();
    });

    it("renders a ColorBucket component for each property in the theme file", () => {
        render(<Editor themeFile={themeFile} setThemeFile={() => {}} />);
        const colorBuckets = screen.getAllByRole("ColorBucket");
        expect(colorBuckets.length).toBe(Object.keys(themeFile).length);
    });

    it("updates the theme file when a ColorBucket is dragged and dropped", () => {
        const setThemeFile = jest.fn();
        render(<Editor themeFile={themeFile} setThemeFile={setThemeFile} />);
        const colorBucket = screen.getAllByRole("ColorBucket")[0];
        fireEvent.dragStart(colorBucket);
        fireEvent.drop(colorBucket);
        expect(setThemeFile).toHaveBeenCalledWith({
            ...themeFile,
            primaryColor: "#DA4B4B", // This should be the color of the first preset card
        });
    });
});
