import { render, screen } from "@testing-library/react";
import React from "react";
import DesignCheckout from ".";

describe("Desgin Checkout page test", () => {
  test("should render properly", async () => {
    render(<DesignCheckout />);
  });
});
