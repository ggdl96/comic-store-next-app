import { render } from "@testing-library/react";
import React from "react";
import DesignCheckout from "../../pages/design-checkout";

describe("Desgin Checkout page test", () => {
  test("should render properly", async () => {
    render(<DesignCheckout />);
  });
});
