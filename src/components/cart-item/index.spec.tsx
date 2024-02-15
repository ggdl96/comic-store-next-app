import { render, screen } from "@testing-library/react";
import CartItem from ".";

describe("CartItem test", () => {
  test("should render properly", async () => {
    render(<CartItem />);

    const label = await screen.findAllByText(/price:/);

    expect(label.length).toBe(1);
  });
});
