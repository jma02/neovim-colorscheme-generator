import React from "react";
import { render, fireEvent } from "@testing-library/react";
//@ts-ignore
import Presets from "./Presets.tsx";

describe("DragColor component", () => {
    it("should drag to a new location when dragged", () => {
        const { getByTestId } = render(<Presets />);
        const dragColor = getByTestId("drag-color");
        const originalPosition = dragColor.getBoundingClientRect();

        fireEvent.mouseDown(dragColor, { clientX: 0, clientY: 0 });
        fireEvent.mouseMove(dragColor, { clientX: 100, clientY: 100 });
        fireEvent.mouseUp(dragColor);

        const newPosition = dragColor.getBoundingClientRect();
        expect(newPosition.left).toBeGreaterThan(originalPosition.left);
        expect(newPosition.top).toBeGreaterThan(originalPosition.top);
    });
});
