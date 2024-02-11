import { render } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  test("Given a text prop should render correctly", () => {
    const result = render(<Button>some text</Button>);

    const button = result.queryByText("some text");

    expect(button).toBeTruthy();
  });
});
