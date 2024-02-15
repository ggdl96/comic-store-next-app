import { render, screen } from "@testing-library/react";
import Detail from ".";

describe("Desgin Detail component test", () => {
  test("should render properly", async () => {
    render(<Detail />);

    const label = await screen.findAllByText(/Buy now/);

    expect(label.length).toBe(1);
  });
});
