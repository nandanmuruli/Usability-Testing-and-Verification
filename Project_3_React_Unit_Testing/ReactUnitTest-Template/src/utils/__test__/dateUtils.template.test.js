import {
  daysBetween,
  addDays,
  addMonths,
  addYears,
  isLeapYear,
  getDaysInMonth,
  isSameDay,
  isBefore,
  isAfter,
  isBetween,
} from "/Users/nandanmuruli/Desktop/Usabality Testing/Project_3_React_Unit_Testing/ReactUnitTest-Template/src/utils/dateUtils.js";

describe("dateUtils", () => {
  test("should calculate days between two dates", () => {
    const start = new Date("2024-03-01");
    const end = new Date("2024-03-15");

    expect(daysBetween(start, end)).toBe(14);
    expect(daysBetween(end, start)).toBe(14);
  });

  test("should handle date arithmetic across month and year boundaries", () => {
    const jan30 = new Date("2024-01-30");
    const after5Days = addDays(jan30, 5);
    expect(after5Days.getMonth()).toBe(1);
    expect(after5Days.getDate()).toBe(4);

    const jan31 = new Date("2024-01-31");
    const after1Month = addMonths(jan31, 1);
    expect(after1Month.getMonth()).toBe(2);

    const leapDay = new Date("2024-02-29");
    const nextYear = addYears(leapDay, 1);
    expect(nextYear.getFullYear()).toBe(2025);
    expect(nextYear.getMonth()).toBe(2);
    expect(nextYear.getDate()).toBe(1);

    const march15 = new Date("2024-03-15");
    const minus20Days = addDays(march15, -20);
    expect(minus20Days.getMonth()).toBe(1);
  });

  test("should validate leap years and days in month calculations", () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2023)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2100)).toBe(false);

    expect(getDaysInMonth(new Date("2024-02-01"))).toBe(29);
    expect(getDaysInMonth(new Date("2023-02-01"))).toBe(28);
    expect(getDaysInMonth(new Date("2024-01-01"))).toBe(31);
    expect(getDaysInMonth(new Date("2024-04-01"))).toBe(30);
    expect(getDaysInMonth(new Date("2024-12-01"))).toBe(31);
  });
});
