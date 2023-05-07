import React from "react";
import { render, fireEvent } from "@testing-library/react";
//@ts-ignore
import PresetPostButton from "./PresetPostButton";
//@ts-ignore
import { post_preset } from "./post_preset";

describe("PresetPostButton", () => {
    it("calls the post_preset function when clicked", () => {
    // Create a mock post_preset function
        const mockPostPreset = jest.fn();

        // Render the PresetPostButton component and mock post_preset function
        const { getByText } = render(
            <PresetPostButton postPreset={mockPostPreset} />
        );

        // Find the Preset Post button element and click it
        const presetPostButton = getByText("Preset Post");
        fireEvent.click(presetPostButton);

        // Check that the post_preset function was called
        expect(mockPostPreset).toHaveBeenCalled();
    });
});
