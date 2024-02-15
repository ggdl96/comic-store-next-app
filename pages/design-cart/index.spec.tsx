import { render, screen } from "@testing-library/react";
import React from "react";
import DesignCart from ".";

describe("Desgin Cart page test", () => {
  test("should render properly", async () => {
    render(<DesignCart />);
  });
});
