import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("PresetPostButton", () => {
    it("calls the post_preset function when clicked", () => {
        //Place holder
    });
});

// //@ts-ignore
// import { download } from "./download";

// describe("download function", () => {
//     it("should download a file", () => {
//     // Create a mock file with some content
//         const mockFile = new Blob(["hello, world"], { type: "text/plain" });

//         // Create a mock URL for the file
//         const mockUrl = window.URL.createObjectURL(mockFile);

//         // Call the download function with the mock URL and filename
//         download(mockUrl, "test.lua");

//         // Check that the download link was created and clicked
//         const downloadLink = document.createElement("a");
//         downloadLink.href = mockUrl;
//         downloadLink.download = "test.lua";

//         expect(document.body.contains(downloadLink)).toBe(true);
//         expect(downloadLink.click()).toBe(undefined);
//     });
// });
