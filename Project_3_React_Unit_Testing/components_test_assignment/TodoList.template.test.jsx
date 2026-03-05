import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../../TodoList";

describe("TodoList Component", () => {
  // ==================== STUDENT EXERCISES ====================
  // 1 Basic Test + 2 Complex Tests

  /**
   * EXERCISE 1 (Basic): Test empty state rendering
   *
   * HINTS:
   * - Use render(<TodoList />) to mount the component
   * - Empty message has testId "empty-message"
   * - Should display "No todos yet"
   * - Use .toHaveTextContent() for verification
   */
  test("should render empty state initially", () => {
    // TODO: Implement this test
    // Step 1: Render TodoList
    // Step 2: Assert empty message shows "No todos yet"
  });

  /**
   * EXERCISE 2 (Complex): Test toggling todo completion status
   *
   * HINTS:
   * - First add a todo item:
   *   1. Get input with testId "todo-input"
   *   2. fireEvent.change(input, { target: { value: "Test" } })
   *   3. fireEvent.submit(screen.getByTestId("todo-form"))
   *
   * - Then test toggle:
   *   1. Get checkbox with screen.getByRole("checkbox")
   *   2. Assert NOT checked: expect(checkbox).not.toBeChecked()
   *   3. Click the checkbox
   *   4. Assert IS checked: expect(checkbox).toBeChecked()
   */
  test("should toggle todo completion status", () => {
    // TODO: Implement this test
    // Step 1: Render TodoList
    // Step 2: Add a todo item "Test"
    // Step 3: Get the checkbox
    // Step 4: Assert it's NOT checked
    // Step 5: Click the checkbox
    // Step 6: Assert it IS checked
  });

  /**
   * EXERCISE 3 (Complex): Test filtering todos by completion status
   *
   * HINTS:
   * - Add two todos: "Task 1" and "Task 2"
   * - Mark first one as completed (click its checkbox)
   * - Click filter button with testId "filter-completed"
   * - Verify only completed todos are shown
   *
   * How to add multiple todos:
   * - Change input value, submit form, repeat
   *
   * Getting specific checkboxes:
   * - screen.getAllByRole("checkbox") returns array
   * - screen.getAllByRole("checkbox")[0] for first todo's checkbox
   *
   * Checking filtered results:
   * - Todo list has testId "todo-list"
   * - Check children.length equals 1 after filtering
   */
  test("should filter todos by completion status", () => {
    // TODO: Implement this test
    // Step 1: Render TodoList
    // Step 2: Add "Task 1" and "Task 2"
    // Step 3: Mark first todo as completed (click first checkbox)
    // Step 4: Click filter-completed button
    // Step 5: Assert todo-list has only 1 child
  });
});
