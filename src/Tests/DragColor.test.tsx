import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("PresetPostButton", () => {
    it("calls the post_preset function when clicked", () => {
        //Place holder
    });
});
// import { render, fireEvent } from "@testing-library/react";
// import DragColor from "../components/DragColor";


// describe("<DragColor />", () => {
//     test("changes color when color prop changes", () => {
//         const { getByTestId } = render(<DragColor fillColor="red" />);
//         const element = getByTestId("drag-color");
  
//         expect(element).toHaveStyle("background-color: red;");
  
//         fireEvent(element, { color: "blue" });
  
//         expect(element).toHaveStyle("background-color: blue;");
//     });
// });