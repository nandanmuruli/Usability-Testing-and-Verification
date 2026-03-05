import { toCamelCase, toKebabCase, toSnakeCase } from "../stringUtils";
describe("stringUtils", () => {
  test("should convert between different case formats consistently", () => {
    const camelCase = "myVariableName";
    const KebabCase = "my-variable-name";
    const snakeCase = "my_variable_name";
    //easy words
    expect(toKebabCase(camelCase)).toBe(KebabCase);
    expect(toSnakeCase(camelCase)).toBe(snakeCase);
    //complex words
    expect(toKebabCase("XMLHttpRequest")).toBe("xmlhttp-request");
    expect(toSnakeCase("getUserById")).toBe("get_user_by_id");
  });
});
