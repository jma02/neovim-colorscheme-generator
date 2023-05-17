import React from "react";
import { render } from "@testing-library/react";
import PostButtonAlerts from "../components/PostButtonAlerts";

describe("PostButtonAlerts", () => {
    test("renders 'Awaiting submission' alert when apiError is null", () => {
        const { getByText } = render(<PostButtonAlerts apiError={null} />);
        expect(getByText("Awaiting submission:")).toBeInTheDocument();
        expect(getByText("Press submit when ready!")).toBeInTheDocument();
    });

    test("renders 'Your API Key is invalid!' alert when apiError is true", () => {
        const { getByText } = render(<PostButtonAlerts apiError={true} />);
        expect(getByText("Your API Key is invalid!")).toBeInTheDocument();
        expect(getByText("Please try again.")).toBeInTheDocument();
    });

    test("renders 'Preset successfully posted!' alert when apiError is false", () => {
        const { getByText } = render(<PostButtonAlerts apiError={false} />);
        expect(getByText("Preset successfully posted!")).toBeInTheDocument();
        expect(getByText("Enjoy the new theme!")).toBeInTheDocument();
    });
});
