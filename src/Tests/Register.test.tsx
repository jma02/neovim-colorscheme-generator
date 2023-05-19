import { fireEvent, getByLabelText, getByRole, getByTestId, render, screen, waitFor } from "@testing-library/react";
import LoginAlerts from "../components/LoginAlerts";
import React from "react";
import LoginButton from "../components/LoginButton";
import { Preset } from "../components/Common";
import userEvent from "@testing-library/user-event";
import RegisterUserButton from "../components/RegisterUserButton";




describe("Register Button", () => {
    test("renders without errors", () => {
        const { getByRole } = render(<RegisterUserButton  setUser={() => {}} setUserThemes={() => {}} />);
        const buttonElement = getByRole("button", { name: /register/i });
        expect(buttonElement).toBeInTheDocument();
    });
    test("updates the email and password inputs correctly", () => {
        const { getByLabelText } = render(<RegisterUserButton  setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = getByLabelText(/email address/i);
        const passwordInput = getByLabelText(/password/i);
      
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
      
        expect(emailInput).toHaveValue("test@example.com");
        expect(passwordInput).toHaveValue("password");
    });

    test("contains two input fields for email and password", () => {
        render(<RegisterUserButton  setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = screen.getByLabelText(/email address/i);
        const passwordInput = screen.getByLabelText(/password/i);
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
    test("Checks a non @ email", () => {
        const { getByLabelText } = render(<RegisterUserButton  setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = getByLabelText(/email address/i);
        const passwordInput = getByLabelText(/password/i);
      
        fireEvent.change(emailInput, { target: { value: "testexample.com" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
      
        expect(emailInput).toHaveValue("testexample.com");
        expect(passwordInput).toHaveValue("password");
        const register = screen.getByText("Register User");
        expect(register).toBeDisabled();

    });

    test("Checks a non .com email", () => {
        const { getByLabelText } = render(<RegisterUserButton setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = getByLabelText(/email address/i);
        const passwordInput = getByLabelText(/password/i);
      
        fireEvent.change(emailInput, { target: { value: "test@example" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
      
        expect(emailInput).toHaveValue("test@example");
        expect(passwordInput).toHaveValue("password");
        const register = screen.getByText("Register User");
        expect(register).toBeDisabled();

    });

    test("Checks a non .com and non @", () => {
        const { getByLabelText } = render(<RegisterUserButton setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = getByLabelText(/email address/i);
        const passwordInput = getByLabelText(/password/i);
      
        fireEvent.change(emailInput, { target: { value: "testexample" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
      
        expect(emailInput).toHaveValue("testexample");
        expect(passwordInput).toHaveValue("password");
        const register = screen.getByText("Register User");
        expect(register).toBeDisabled();

    });

    test("test Valid email", () => {
        const { getByLabelText } = render(<RegisterUserButton  setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = getByLabelText(/email address/i);
        const passwordInput = getByLabelText(/password/i);
      
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
      
        expect(emailInput).toHaveValue("test@example.com");
        expect(passwordInput).toHaveValue("password");
        const register = screen.getByText("Register User");
        expect(register).not.toBeDisabled();
    });

    test("test show button", () => {
        const { getByLabelText } = render(<RegisterUserButton  setUser={() => {}} setUserThemes={() => {}} />);
        const emailInput = getByLabelText(/email address/i);
        const passwordInput = getByLabelText(/password/i);
      
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
      
        expect(emailInput).toHaveValue("test@example.com");
        expect(passwordInput).toHaveValue("password");
        const show = screen.getByText("Show");
        expect(show).not.toBeDisabled();
        fireEvent.click(show);
        expect(passwordInput).toHaveAttribute("type", "text");
        fireEvent.click(show);
        expect(passwordInput).toHaveAttribute("type", "password");
        
    });

    

});