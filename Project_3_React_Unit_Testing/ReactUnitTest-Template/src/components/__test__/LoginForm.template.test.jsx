import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "/Users/nandanmuruli/Desktop/Usabality Testing/Project_3_React_Unit_Testing/ReactUnitTest-Template/src/components/LoginForm.jsx";

describe("LoginForm Component", () => {
  test("should render email and password", () => {
    render(<LoginForm />);
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });
  test("should show validation error for invalid email", async () => {
    render(<LoginForm />);
    const emailInput = screen.getByTestId("email-input");
    //instat,one event
    //fireEvenet.change(emailInput,{target:{value:"test@gmail.com"}});
    await userEvent.type(emailInput, "invalid-email");
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByTestId("email-error")).toHaveTextContent(
        "Please enter a valid email"
      );
    });
  });
  test("should show validation error for short password", async () => {
    render(<LoginForm />);
    const passwordInput = screen.getByTestId("password-input");
    await userEvent.type(passwordInput, "short");
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(screen.getByTestId("password-error")).toHaveTextContent(
        "Password must be at least 8 characters"
      );
    });
  });
  test("should submit form with valid data", async () => {
    const mockSubmit = jest.fn().mockResolvedValue();
    render(<LoginForm onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByTestId("email-input"), "test@example.com");
    await userEvent.type(
      screen.getByTestId("password-input"),
      "Password123@45"
    );
    await userEvent.click(screen.getByTestId("submit-button"));
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "Password123@45",
        rememberMe: false,
      });
    });
  });
});
