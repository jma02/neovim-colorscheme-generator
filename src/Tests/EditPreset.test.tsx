import { fireEvent, getByLabelText, getByRole, getByTestId, render, screen, waitFor } from "@testing-library/react";
import LoginAlerts from "../components/LoginAlerts";
import React from "react";
import { Preset } from "../components/Common";
import userEvent from "@testing-library/user-event";
import LoginButton from "../components/LoginButton";
import EditPreset from "../components/EditPreset";


describe("Edit Preset", () => {
    const ObjectId = require("bson").ObjectId;
    test("renders without errors", () => {
        const c = render(<EditPreset isUserTheme={false} name={""} description={""} _id={new ObjectId} userId={""} setUserThemes={function (x: Preset[]): void {
        } } setPresets={function (x: Preset[]): void {

        } } />);
        expect(c);
    }
    );
    test("updates the names", () => {
        const { getByLabelText } = render(<EditPreset isUserTheme={false} name={""} description={""} _id={new ObjectId} userId={""} setUserThemes={function (x: Preset[]): void {

        } } setPresets={function (x: Preset[]): void {
        } } />);
        const button = screen.getByRole("button", { colorScheme: /"transparent"/i });
        fireEvent.click(button);
        
        const name = getByLabelText(/name/i);
        const desc = getByLabelText(/description/i);
      
        fireEvent.change(name, { target: { value: "testname" } });
      
        const update = screen.getByText("Update");
        fireEvent.click(update);
        expect(name).toHaveValue("testname");
    });

    test("updates the description", () => {
        const { getByLabelText } = render(<EditPreset isUserTheme={false} name={""} description={""} _id={new ObjectId} userId={""} setUserThemes={function (x: Preset[]): void {

        } } setPresets={function (x: Preset[]): void {
        } } />);
        const button = screen.getByRole("button", { colorScheme: /"transparent"/i });
        fireEvent.click(button);
        
        const name = getByLabelText(/name/i);
        const desc = getByLabelText(/description/i);
      
        fireEvent.change(desc, { target: { value: "testdesc" } });
      
        const update = screen.getByText("Update");
        fireEvent.click(update);
        expect(desc).toHaveValue("testdesc");
    });

      
});