import React from "react";
import { render, fireEvent } from "@testing-library/react";
//@ts-ignore
import Accordion from "./Accordion";

describe("Accordion component", () => {
    it("should toggle the accordion content when the button is clicked", () => {
        const { getByTestId } = render(<Accordion title="Accordion Title">Accordion Content</Accordion>);
        const accordionButton = getByTestId("accordion-button");
        const accordionContent = getByTestId("accordion-content");

        expect(accordionContent).not.toBeVisible();

        fireEvent.click(accordionButton);

        expect(accordionContent).toBeVisible();

        fireEvent.click(accordionButton);

        expect(accordionContent).not.toBeVisible();
    });
});
