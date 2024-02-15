import React from "react";

import { render, screen } from "@testing-library/react";
import MainCheckout from ".";

describe("MainCheckout test", () => {
  test("should render properly", async () => {
    render(
      <MainCheckout>
        <p>test</p>
      </MainCheckout>
    );

    const label = await screen.findAllByText("test");

    expect(label.length).toBe(1);
  });
});
