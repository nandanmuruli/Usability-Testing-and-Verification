import {
  isValidEmail,
  isValidPassword,
  getPasswordStrength,
  isValidCreditCard,
  isValidUrl,
  isValidUsername,
} from "../../validationUtils";

describe("validationUtils", () => {
  // ==================== STUDENT EXERCISES ====================
  // 1 Basic Test + 2 Complex Tests

  /**
   * EXERCISE 1 (Basic): Test the getPasswordStrength() function
   *
   * HINTS:
   * - Returns "weak", "medium", or "strong"
   * - Short passwords with few character types = "weak"
   * - Medium length with some variety = "medium"
   * - Long password with uppercase, lowercase, numbers, special chars = "strong"
   * - Example: "weak" → "weak", "Medium12" → "medium", "Strong123!@#" → "strong"
   */
  test("should determine password strength", () => {
    // TODO: Implement this test
    // Test 1: Weak password
    // Test 2: Medium password
    // Test 3: Strong password
  });

  /**
   * EXERCISE 2 (Complex): Test credit card validation using Luhn algorithm
   *
   * HINTS:
   * - Valid test card numbers:
   *   - "4532015112830366" → true
   *   - "4916338506082832" → true
   *   - "4539578763621486" → true
   * - Cards with spaces/dashes should also work:
   *   - "4532 0151 1283 0366" → true
   *   - "4532-0151-1283-0366" → true
   * - Invalid card numbers:
   *   - "1234567890123456" → false
   *   - "1111111111111111" → false
   *   - "123" → false (too short)
   *   - null → false
   */
  test("should validate credit cards using Luhn algorithm", () => {
    // TODO: Implement this test
    // Test 1: Valid card numbers
    // Test 2: Cards with spaces and dashes (should be cleaned and validated)
    // Test 3: Invalid card numbers
    // Test 4: Edge cases (too short, null)
  });

  /**
   * EXERCISE 3 (Complex): Test username validation with configurable options
   *
   * HINTS:
   * - Default: isValidUsername("john_doe123") → true
   * - Default: isValidUsername("Alice") → true
   * - Too short: isValidUsername("ab") → false (min 3 chars by default)
   * - Cannot start with number: isValidUsername("123john") → false
   * - Cannot start with underscore: isValidUsername("_john") → false
   *
   * Custom options:
   * - isValidUsername("john_doe", { allowUnderscore: false }) → false
   * - isValidUsername("johndoe", { allowUnderscore: false }) → true
   * - isValidUsername("john123", { allowNumbers: false }) → false
   * - isValidUsername("johnsmith", { allowNumbers: false }) → true
   * - isValidUsername("ab", { minLength: 2 }) → true
   * - isValidUsername("abcdefghijklmnopqrstuvwxyz", { maxLength: 10 }) → false
   */
  test("should validate usernames with configurable options", () => {
    // TODO: Implement this test
    // Test 1: Default valid usernames
    // Test 2: Invalid - too short, starts with number/underscore
    // Test 3: Custom option - no underscores allowed
    // Test 4: Custom option - no numbers allowed
    // Test 5: Custom length requirements
  });
});
