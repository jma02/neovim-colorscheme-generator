import React from "react";
import { render, fireEvent } from "@testing-library/react";
//@ts-ignore
import DragColor from "./DragColor";

describe("DragColor component", () => {
    it("should be dropped onto a target location", () => {
        const { getByTestId } = render(
            <>
                <DragColor />
                <div data-testid="target" style={{ width: "100px", height: "100px" }} />
            </>
        );
        const dragColor = getByTestId("drag-color");
        const target = getByTestId("target");
        const targetPosition = target.getBoundingClientRect();

        fireEvent.mouseDown(dragColor, { clientX: 0, clientY: 0 });
        fireEvent.mouseMove(dragColor, { clientX: targetPosition.x + 10, clientY: targetPosition.y + 10 });
        fireEvent.dragEnter(target);
        fireEvent.dragOver(target);
        fireEvent.drop(target);
        fireEvent.mouseUp(dragColor);

        const dragColorPosition = dragColor.getBoundingClientRect();
        expect(dragColorPosition.left).toBeCloseTo(targetPosition.x + 10, 0);
        expect(dragColorPosition.top).toBeCloseTo(targetPosition.y + 10, 0);
    });
});
