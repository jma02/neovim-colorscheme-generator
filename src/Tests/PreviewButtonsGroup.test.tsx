import React from "react";
import { render } from "@testing-library/react";
//@ts-ignore
import PreviewButtonsGroup from "./PreviewButtonsGroup";

describe("PreviewButtonsGroup", () => {
    it("renders the component", () => {
    // Render the PreviewButtonsGroup component
        const { getByTestId } = render(<PreviewButtonsGroup />);

        // Find the component by its test ID
        const previewButtonsGroup = getByTestId("preview-buttons-group");

        // Check that the component is present in the DOM
        expect(previewButtonsGroup).toBeInTheDocument();
    });
});
