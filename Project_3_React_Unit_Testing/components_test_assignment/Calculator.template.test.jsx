import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../../Calculator";

describe("Calculator Component", () => {
  // ==================== STUDENT EXERCISES ====================
  // 1 Basic Test + 2 Complex Tests

  /**
   * EXERCISE 1 (Basic): Test that digits display when clicked
   *
   * HINTS:
   * - Use render(<Calculator />) to mount the component
   * - Use fireEvent.click() to simulate button clicks
   * - Buttons have testIds like "btn-1", "btn-2", "btn-3"
   * - Click buttons 1, 2, 3 in sequence
   * - Display has testId "calc-display"
   * - After clicking 1, 2, 3, display should show "123"
   * - Use screen.getByTestId("calc-display").toHaveTextContent("123")
   */
  test("should display digits when clicked", () => {
    // TODO: Implement this test
    // Step 1: Render the Calculator component
    // Step 2: Click btn-1, btn-2, btn-3 using fireEvent.click()
    // Step 3: Assert display shows "123"
  });

  /**
   * EXERCISE 2 (Complex): Test addition operation
   *
   * HINTS:
   * - This tests a multi-step operation: enter first number → click operator → enter second number → equals
   * - Sequence: click "5" → click "+" → click "3" → click "="
   * - Button testIds: "btn-5", "btn-add", "btn-3", "btn-equals"
   * - Expected result: display shows "8"
   *
   * Structure:
   * 1. render(<Calculator />)
   * 2. fireEvent.click(screen.getByTestId("btn-5"))
   * 3. fireEvent.click(screen.getByTestId("btn-add"))
   * 4. fireEvent.click(screen.getByTestId("btn-3"))
   * 5. fireEvent.click(screen.getByTestId("btn-equals"))
   * 6. expect display to show "8"
   */
  test("should perform addition correctly", () => {
    // TODO: Implement this test
    // Step 1: Render Calculator
    // Step 2: Click 5
    // Step 3: Click + (add)
    // Step 4: Click 3
    // Step 5: Click = (equals)
    // Step 6: Assert display shows "8"
  });

  /**
   * EXERCISE 3 (Complex): Test division operation
   *
   * HINTS:
   * - Similar to addition but with division
   * - Sequence: click "8" → click "÷" → click "2" → click "="
   * - Button testIds: "btn-8", "btn-divide", "btn-2", "btn-equals"
   * - Expected result: display shows "4"
   * - Division: 8 ÷ 2 = 4
   */
  test("should perform division correctly", () => {
    // TODO: Implement this test
    // Step 1: Render Calculator
    // Step 2: Click 8
    // Step 3: Click ÷ (divide)
    // Step 4: Click 2
    // Step 5: Click = (equals)
    // Step 6: Assert display shows "4"
  });
});
