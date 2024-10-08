import { render, screen } from "@testing-library/react";
import React from "react";
import DesignList from "../../pages/design-list"
describe("Desgin List page test", () => {
  test("should render properly", async () => {
    render(<DesignList />);

    const label = await screen.findAllByText(/Results for:/);

    expect(label.length).toBe(1);
  });
});
