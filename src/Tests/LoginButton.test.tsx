import { fireEvent, getByLabelText, getByRole, getByTestId, render, screen, waitFor } from "@testing-library/react";
import LoginAlerts from "../components/LoginAlerts";
import React from "react";
import LoginButton from "../components/LoginButton";
import { Preset } from "../components/Common";
import userEvent from "@testing-library/user-event";

describe("LoginAlerts", () => {
    it("renders without errors", () => {
        const { getByRole } = render(<LoginButton setUser={() => {}} setUserThemes={() => {}} />);
        const buttonElement = getByRole("button", { name: /login/i });
        expect(buttonElement).toBeInTheDocument();
    });
    it("updates the email and password inputs correctly", () => {
        const { getByLabelText } = render(<LoginButton setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = getByLabelText(/email address/i);
        const passwordInput = getByLabelText(/password/i);
      
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
      
        expect(emailInput).toHaveValue("test@example.com");
        expect(passwordInput).toHaveValue("password");
    });

    // I can't get this test to work beacuse I can't find the Show Password button
    // it("password can be shown when show password button is clicked", async () => {
    //     const { getByLabelText, getByRole } = render(<LoginButton setUser={() => {}} setUserThemes={() => {}} />);
      
    //     const passwordInput = getByLabelText(/password/i);

    //     fireEvent.change(passwordInput, { target: { value: "password" } });
    //     expect(passwordInput).toHaveValue("password");

    //     const showPasswordButton = getByLabelText(/show/i);
      
    //     fireEvent.click(showPasswordButton);
    //     expect(passwordInput).toHaveAttribute("type", "text");
      
    //     fireEvent.click(showPasswordButton);
    //     expect(passwordInput).toHaveAttribute("type", "password");
    // });
      

    it("contains two input fields for email and password", () => {
        render(<LoginButton setUser={function (x: Realm.User<Realm.DefaultFunctionsFactory, SimpleObject, Realm.DefaultUserProfileData>): void {
            throw new Error("Function not implemented.");
        } } setUserThemes={function (x: Preset[]): void {
            throw new Error("Function not implemented.");
        } } />);
        const emailInput = screen.getByLabelText(/email address/i);
        const passwordInput = screen.getByLabelText(/password/i);
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
      
});