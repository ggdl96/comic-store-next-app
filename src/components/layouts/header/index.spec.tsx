import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header test", () => {
  test("should render properly", async () => {
    render(<Header />);

    const label = await screen.findAllByText("Menu");

    expect(label.length).toBe(1);
  });
});
