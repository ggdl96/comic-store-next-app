import { render } from "@testing-library/react";
import React from "react";
import Design from "../../pages/design"

describe("Desgin component test", () => {
  test("should render properly", async () => {
    render(<Design />);
  });
});
