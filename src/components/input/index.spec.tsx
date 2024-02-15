import { render, screen } from "@testing-library/react";
import Input from ".";

describe("Input test", () => {
  test("should render properly", async () => {
    render(<Input placeholder="test:" />);

    const label = await screen.findByPlaceholderText("test:");

    expect(label).toBeDefined();
  });
});
