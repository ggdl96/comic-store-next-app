import { render } from "@testing-library/react";
import React from "react";
import DesignCart from "../../pages/design-cart";

describe("Desgin Cart page test", () => {
  test("should render properly", async () => {
    render(<DesignCart />);
  });
});
