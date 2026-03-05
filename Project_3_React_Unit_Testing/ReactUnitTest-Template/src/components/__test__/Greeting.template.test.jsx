import { render, screen } from "@testing-library/react";
import Greeting from "/Users/nandanmuruli/Desktop/Usabality Testing/Project_3_React_Unit_Testing/ReactUnitTest-Template/src/components/Greeting.jsx";

describe("Greeting Component", () => {
  test("should display provided name", () => {
    render(<Greeting name="Nandan" />);
    expect(screen.getByTestId("greeting-message")).toHaveTextContent("Nandan");
  });
  test("should display provided name", () => {
    render(<Greeting />);
    expect(screen.getByTestId("greeting-message")).toHaveTextContent("Guest");
  });
});
