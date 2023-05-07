//@ts-ignore
import { post_preset } from "./post_preset";

describe("post_preset function", () => {
    it("should add a preset to the PresetLoader", () => {
    // Create a mock preset object
        const mockPreset = { name: "Test Preset", color: "#ff0000" };

        // Create a mock addPreset function
        const mockAddPreset = jest.fn();

        // Call the post_preset function with the mock preset and addPreset function
        post_preset(mockPreset, mockAddPreset);

        // Check that the addPreset function was called with the mock preset
        expect(mockAddPreset).toHaveBeenCalledWith(mockPreset);
    });
});
