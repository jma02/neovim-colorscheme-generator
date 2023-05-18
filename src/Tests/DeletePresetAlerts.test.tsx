import React from "react";
import { render } from "@testing-library/react";
import DeletePresetAlerts from "../components/DeletePresetAlerts";

describe("<DeletePresetAlerts />", () => {
    it("should render error alert when apiError prop is true", () => {
        const { getByText } = render(<DeletePresetAlerts apiError={true} />);
        const alertTitle = getByText(/Deletion failed!/i);
        const alertDescription = getByText(/Your API Key is likely invalid./i);
        expect(alertTitle).toBeInTheDocument();
        expect(alertDescription).toBeInTheDocument();
    });

    it("should render success alert when apiError prop is false", () => {
        const { getByText, queryByText } = render(<DeletePresetAlerts apiError={false} />);
        const successAlertTitle = getByText(/Deletion successful!/i);
        expect(successAlertTitle).toBeInTheDocument();
        const errorAlertTitle = queryByText(/Deletion failed!/i);
        const errorAlertDescription = queryByText(/Your API Key is likely invalid./i);
        expect(errorAlertTitle).not.toBeInTheDocument();
        expect(errorAlertDescription).not.toBeInTheDocument();
    });
});
