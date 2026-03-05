import {
  isValidEmail,
  isValidPassword,
  getPasswordStrength,
  isValidCreditCard,
  isValidUrl,
  isValidUsername,
} from "/Users/nandanmuruli/Desktop/Usabality Testing/Project_3_React_Unit_Testing/ReactUnitTest-Template/src/utils/validationUtils.js";

describe("validationUtils", () => {
  test("should determine password strength", () => {
    expect(getPasswordStrength("12345")).toBe("weak");
    expect(getPasswordStrength("password")).toBe("weak");
    expect(getPasswordStrength("Medium12")).toBe("medium");
    expect(getPasswordStrength("Strong123!@#")).toBe("strong");
  });

  test("should validate credit cards using Luhn algorithm", () => {
    expect(isValidCreditCard("4532015112830366")).toBe(true);
    expect(isValidCreditCard("4916338506082832")).toBe(true);
    expect(isValidCreditCard("4532 0151 1283 0366")).toBe(true);
    expect(isValidCreditCard("4539-5787-6362-1486")).toBe(true);
    expect(isValidCreditCard("1234567890123456")).toBe(false);
    expect(isValidCreditCard("1111111111111111")).toBe(false);
    expect(isValidCreditCard("123")).toBe(false);
    expect(isValidCreditCard(null)).toBe(false);
    expect(isValidCreditCard("")).toBe(false);
  });

  test("should validate usernames with configurable options", () => {
    expect(isValidUsername("john_doe123")).toBe(true);
    expect(isValidUsername("Alice")).toBe(true);
    expect(isValidUsername("ab")).toBe(false);
    expect(isValidUsername("123john")).toBe(false);
    expect(isValidUsername("_john")).toBe(false);
    expect(isValidUsername("john_doe", { allowUnderscore: false })).toBe(false);
    expect(isValidUsername("johndoe", { allowUnderscore: false })).toBe(true);
    expect(isValidUsername("john123", { allowNumbers: false })).toBe(false);
    expect(isValidUsername("johnsmith", { allowNumbers: false })).toBe(true);

    expect(isValidUsername("ab", { minLength: 2 })).toBe(true);
    expect(isValidUsername("verylongusername", { maxLength: 10 })).toBe(false);
  });
});
