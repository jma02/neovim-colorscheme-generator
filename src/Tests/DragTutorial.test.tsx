import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DragTutorial from "../components/DragTutorial";

describe("<DragTutorial />", () => {
    it("should render text content", () => {
        render(<DragTutorial />);
        const textContent = screen.getByText(/Drag and drop colors to get started!/i);
        expect(textContent).toBeInTheDocument();
    });

    it("Make sure there is slide 1", async () => {
        render(<DragTutorial />);
        const infoIcon = screen.getByLabelText("info");
        fireEvent.click(infoIcon);
        await waitFor(() => {
            expect(screen.getByText("1. Hover over a color")).toBeInTheDocument();
        });
    });
      
    it("Makes sure slide 2 is there", async () => {
        render(<DragTutorial />);
        const infoIcon = screen.getByLabelText("info");
        fireEvent.click(infoIcon);
        await waitFor(() => {
            expect(screen.getByText("2. Drag the color")).toBeInTheDocument();
        });
    });

    it("Make sure there is slide 3", async () => {
        render(<DragTutorial />);
        const infoIcon = screen.getByLabelText("info");
        fireEvent.click(infoIcon);
        await waitFor(() => {
            expect(screen.getByText("3. Drop the color")).toBeInTheDocument();
        });
    });
});
