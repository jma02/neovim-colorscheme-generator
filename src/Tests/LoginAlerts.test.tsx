import { render, screen } from "@testing-library/react";
import LoginAlerts from "../components/LoginAlerts";
import React from "react";

describe("LoginAlerts", () => {
    it("renders \"Awaiting login info...\" when apiError is null", () => {
        render(<LoginAlerts apiError={null} />);
        expect(screen.getByText(/awaiting login info/i)).toBeInTheDocument();
    });

    it("renders \"Login failed!\" when apiError is true", () => {
        render(<LoginAlerts apiError={true} />);
        expect(screen.getByText(/login failed/i)).toBeInTheDocument();
    });

    it("renders \"Login successful!\" when apiError is false", () => {
        render(<LoginAlerts apiError={false} />);
        expect(screen.getByText(/login successful/i)).toBeInTheDocument();
    });
  
    it("renders \"Please try again.\" when apiError is true", () => {
        render(<LoginAlerts apiError={true} />);
        expect(screen.getByText(/please try again/i)).toBeInTheDocument();
    });

    it("renders \"Theme on!\" when apiError is false", () => {
        render(<LoginAlerts apiError={false} />);
        expect(screen.getByText(/theme on/i)).toBeInTheDocument();
    });
});
