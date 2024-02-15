import { render, screen } from "@testing-library/react";
import DetailContent from ".";

describe("DetailContent test", () => {
  test("should render properly", async () => {
    render(<DetailContent />);

    const button = await screen.findAllByText("Add to cart");

    expect(button.length).toBe(1);
  });
});
