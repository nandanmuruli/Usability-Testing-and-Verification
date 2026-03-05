import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../LoginForm";

describe("LoginForm Component", () => {
  // ==================== STUDENT EXERCISES ====================
  // 1 Basic Test + 2 Complex Tests

  /**
   * EXERCISE 1 (Basic): Test that form inputs render
   *
   * HINTS:
   * - Use render(<LoginForm />) to mount the component
   * - Email input has testId "email-input"
   * - Password input has testId "password-input"
   * - Submit button has testId "submit-button"
   * - Use .toBeInTheDocument() to verify elements exist
   *
   * Example:
   * expect(screen.getByTestId("email-input")).toBeInTheDocument()
   */
  test("should render email and password inputs", () => {
    // TODO: Implement this test
    // Step 1: Render LoginForm
    // Step 2: Assert email input exists
    // Step 3: Assert password input exists
    // Step 4: Assert submit button exists
  });

  /**
   * EXERCISE 2 (Complex): Test email validation error
   *
   * HINTS:
   * - This is an async test - use async/await
   * - Type invalid email using: await userEvent.type(input, "invalid-email")
   * - Trigger validation by blurring: fireEvent.blur(input)
   * - Error message appears in element with testId "email-error"
   * - Use waitFor() to wait for async validation
   *
   * Structure:
   * test("...", async () => {
   *   render(<LoginForm />);
   *   const emailInput = screen.getByTestId("email-input");
   *   await userEvent.type(emailInput, "invalid-email");
   *   fireEvent.blur(emailInput);
   *   await waitFor(() => {
   *     expect(screen.getByTestId("email-error")).toHaveTextContent("valid email");
   *   });
   * });
   */
  test("should show validation error for invalid email", async () => {
    // TODO: Implement this test
    // Step 1: Render LoginForm
    // Step 2: Get email input by testId
    // Step 3: Type invalid email
    // Step 4: Blur the input to trigger validation
    // Step 5: Wait for and assert error message appears
  });

  /**
   * EXERCISE 3 (Complex): Test form submission with valid data
   *
   * HINTS:
   * - Create a mock function: const mockSubmit = jest.fn().mockResolvedValue()
   * - Pass it to LoginForm: <LoginForm onSubmit={mockSubmit} />
   * - Fill in valid email: "test@example.com"
   * - Fill in valid password: "Password123" (8+ chars with uppercase and number)
   * - Click submit button
   * - Use waitFor() to check mockSubmit was called
   * - mockSubmit should be called with: { email, password, rememberMe: false }
   *
   * Use: expect(mockSubmit).toHaveBeenCalledWith({...})
   */
  test("should submit form with valid data", async () => {
    // TODO: Implement this test
    // Step 1: Create mock submit function
    // Step 2: Render LoginForm with onSubmit={mockSubmit}
    // Step 3: Type valid email
    // Step 4: Type valid password
    // Step 5: Click submit button
    // Step 6: Wait for and assert mockSubmit was called with correct data
  });
});
