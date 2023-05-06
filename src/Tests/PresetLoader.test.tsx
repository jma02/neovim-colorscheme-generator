import React from "react";
import { render } from "@testing-library/react";
//@ts-ignore
import PresetLoader from "./PresetLoader";
//@ts-ignore
import Preset from "./Preset";

describe("PresetList component", () => {
    it("should render a list of Preset components", () => {
        const presets = [
            { name: "preset1", value: "#ff0000" },
            { name: "preset2", value: "#00ff00" },
            { name: "preset3", value: "#0000ff" },
        ];
        const { getByTestId, getAllByTestId } = render(
            <PresetLoader presets={presets} />
        );

        const presetList = getByTestId("preset-list");
        const presetComponents = getAllByTestId("preset-component");

        expect(presetList).toBeInTheDocument();
        expect(presetComponents.length).toBe(presets.length);

        presets.forEach((preset, index) => {
            const presetComponent = presetComponents[index];
            expect(presetComponent).toBeInTheDocument();
            expect(presetComponent).toHaveAttribute("name", preset.name);
            expect(presetComponent).toHaveAttribute("value", preset.value);
        });
    });
});
