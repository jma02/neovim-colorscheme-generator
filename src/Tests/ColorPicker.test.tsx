import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("PresetPostButton", () => {
    it("calls the post_preset function when clicked", () => {
        //Place holder
    });
});

// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// //@ts-ignore
// import DragColor from "./DragColor";
// import { ChromePicker } from "react-color";

// describe("DragColor component", () => {
//     it("should update the color when the ChromePicker value changes", () => {
//         const { getByTestId } = render(
//             <>
//                 <DragColor />
//                 <ChromePicker data-testid="color-picker" />
//             </>
//         );
//         const dragColor = getByTestId("drag-color");
//         const colorPicker = getByTestId("color-picker");

//         fireEvent.change(colorPicker, { target: { color: { r: 255, g: 0, b: 0 } } });

//         expect(dragColor).toHaveStyle("background-color: rgb(255, 0, 0)");
//     });
// });
