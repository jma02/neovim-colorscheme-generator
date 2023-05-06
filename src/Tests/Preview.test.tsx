import React from "react";
import { render, fireEvent } from "@testing-library/react";
//@ts-ignore
import Preset from "./Presets";
//@ts-ignore
import Preview from "./Preview";

describe("Preset component", () => {
    it("should change the color of the Preview component when dragged onto it", () => {
        const { getByTestId } = render(
            <>
                <Preset name="preset1" value="#ff0000" />
                <Preview />
            </>
            
        );
        const presetComponent = getByTestId("preset-component");
        const previewComponent = getByTestId("preview-component");

        expect(previewComponent).toHaveStyle("background-color: #000000");

        fireEvent.dragStart(presetComponent);

        fireEvent.dragEnter(previewComponent);

        expect(previewComponent).toHaveStyle("background-color: #ff0000");
    });
});
