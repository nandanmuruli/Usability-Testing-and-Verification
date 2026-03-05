import { multiply, fibonacci, gcd, lcm } from "../../mathUtils";

describe("mathUtils", () => {
  // ==================== STUDENT EXERCISES ====================
  // 1 Basic Test + 2 Complex Tests

  /**
   * EXERCISE 1 (Basic): Test the multiply() function
   *
   * HINTS:
   * - Test positive numbers: 4 * 3 = 12
   * - Test negative numbers: -2 * 3 = -6
   * - Consider testing: negative * negative, zero multiplication
   */
  test("should multiply two numbers correctly", () => {
    // TODO: Implement this test
    // Test 1: Multiply positive numbers
    // Test 2: Multiply with negative number
  });

  /**
   * EXERCISE 2 (Complex): Test fibonacci sequence and verify mathematical properties
   *
   * HINTS:
   * - fibonacci(n) returns the nth Fibonacci number
   * - Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
   * - Map over [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(fibonacci)
   * - Result should be: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
   * - Verify the mathematical property: F(n) = F(n-1) + F(n-2)
   * - Use a for loop to check fibonacci(i) === fibonacci(i-1) + fibonacci(i-2)
   * - Negative numbers should throw: expect(() => fibonacci(-1)).toThrow()
   */
  test("should compute fibonacci sequence and verify mathematical properties", () => {
    // TODO: Implement this test
    // Test 1: Map fibonacci over [0-10] and check sequence
    // Test 2: Verify F(n) = F(n-1) + F(n-2) for i = 2 to 10
    // Test 3: Test error handling for negative numbers
  });

  /**
   * EXERCISE 3 (Complex): Test GCD and LCM with mathematical relationship verification
   *
   * HINTS:
   * - gcd(48, 18) = 6 (Greatest Common Divisor)
   * - gcd(100, 25) = 25
   * - gcd(17, 13) = 1 (coprime numbers)
   * - lcm(4, 6) = 12 (Least Common Multiple)
   * - lcm(21, 6) = 42
   * - IMPORTANT: Verify the relationship: GCD(a,b) * LCM(a,b) = a * b
   * - Test with negative numbers: gcd(-48, 18) should still be 6
   */
  test("should find GCD and LCM with verification of mathematical relationship", () => {
    // TODO: Implement this test
    // Test 1: GCD tests (48,18), (100,25), (17,13)
    // Test 2: LCM tests (4,6), (21,6)
    // Test 3: Verify GCD(a,b) * LCM(a,b) === a * b for a=48, b=18
    // Test 4: Test with negative numbers
  });
});
