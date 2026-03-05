import {
  unique,
  deepFlatten,
  sum,
  range,
  groupBy,
} from "/Users/nandanmuruli/Desktop/Usabality Testing/Project_3_React_Unit_Testing/ReactUnitTest-Template/src/utils/arrayUtils.js";

describe("arrayUtils", () => {
  test("should return unique values from array", () => {
    const numbers = [1, 2, 2, 3, 3, 3];
    expect(unique(numbers)).toEqual([1, 2, 3]);

    const strings = ["a", "b", "a"];
    expect(unique(strings)).toEqual(["a", "b"]);
  });

  test("should deeply flatten nested arrays and compute sum with range generation", () => {
    const nested = [[1, [2, [3]]], [[4, 5]], [[[6]]]];

    const flattened = deepFlatten(nested);
    expect(flattened).toEqual([1, 2, 3, 4, 5, 6]);

    expect(sum(flattened)).toBe(21);

    const expectedRange = range(1, 7);
    expect(flattened).toEqual(expectedRange);
  });

  test("should group objects by property and verify group integrity", () => {
    const employees = [
      { name: "Alice", department: "Engineering", salary: 90000 },
      { name: "Bob", department: "Marketing", salary: 70000 },
      { name: "Charlie", department: "Engineering", salary: 85000 },
      { name: "Diana", department: "HR", salary: 65000 },
      { name: "Eve", department: "Engineering", salary: 95000 },
    ];

    const grouped = groupBy(employees, "department");

    expect(Object.keys(grouped)).toHaveLength(3);
    expect(grouped).toHaveProperty("Engineering");
    expect(grouped).toHaveProperty("Marketing");
    expect(grouped).toHaveProperty("HR");

    expect(grouped["Engineering"]).toHaveLength(3);

    const engineeringSalaries = grouped["Engineering"].map((e) => e.salary);
    expect(sum(engineeringSalaries)).toBe(270000);
  });
});
