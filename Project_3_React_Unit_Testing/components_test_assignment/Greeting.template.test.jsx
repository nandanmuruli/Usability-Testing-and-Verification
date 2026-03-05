import { render, screen } from "@testing-library/react";
import Greeting from "../../Greeting";

describe("Greeting Component", () => {
  // ==================== STUDENT EXERCISES ====================
  // 1 Basic Test + 2 Complex Tests

  /**
   * EXERCISE 1 (Basic): Test displaying the provided name
   *
   * HINTS:
   * - Pass a name prop: <Greeting name="John" />
   * - Greeting message has testId "greeting-message"
   * - Use .toHaveTextContent() to check for the name
   * - expect(screen.getByTestId("greeting-message")).toHaveTextContent("John")
   */
  test("should display provided name", () => {
    // TODO: Implement this test
    // Step 1: Render Greeting with name="John"
    // Step 2: Assert greeting contains "John"
  });

  /**
   * EXERCISE 2 (Complex): Test time-based greeting (morning)
   *
   * HINTS:
   * - Component accepts a time prop (hour in 24h format)
   * - <Greeting name="John" time={8} /> for 8 AM
   * - Between 5am-12pm should show "Good morning"
   * - Greeting message has testId "greeting-message"
   *
   * Time rules:
   * - 5-12: "Good morning"
   * - 12-17: "Good afternoon"
   * - 17-21: "Good evening"
   * - 21-5: "Good night"
   */
  test("should show Good morning between 5am and 12pm", () => {
    // TODO: Implement this test
    // Step 1: Render Greeting with name="John" and time={8}
    // Step 2: Assert greeting contains "Good morning"
  });

  /**
   * EXERCISE 3 (Complex): Test time-based greeting (evening)
   *
   * HINTS:
   * - <Greeting name="John" time={18} /> for 6 PM
   * - Between 5pm-9pm (17-21) should show "Good evening"
   * - Test both the greeting type AND that the name is displayed
   *
   * You can chain assertions:
   * - Check for "Good evening"
   * - Check for the name "John"
   */
  test("should show Good evening between 5pm and 9pm", () => {
    // TODO: Implement this test
    // Step 1: Render Greeting with name="John" and time={18}
    // Step 2: Assert greeting contains "Good evening"
  });
});
