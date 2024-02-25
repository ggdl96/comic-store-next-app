import { render, screen } from "@testing-library/react";
import React from "react";
import Detail from "../../pages/design-detail";

describe("Desgin Detail component test", () => {
  test("should render properly", async () => {
    render(<Detail />);

    const label = await screen.findAllByText(/Buy now/);

    expect(label.length).toBe(1);
  });
});
