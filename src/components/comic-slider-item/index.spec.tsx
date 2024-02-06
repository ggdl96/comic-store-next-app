import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComicSliderItem from ".";

describe("ComicSliderItem", () => {
  it("given no color prop provided, it should render default background gray", async () => {
    const a = render(<ComicSliderItem />);

    const b = a.container.querySelector("div");
    expect(b.className).toBe(
      "flex-none bg-gray-500 w-36 sd:w-36 md:w-64 lg:w-96 h-full"
    );
  });

  it('given color prop provided with a value of "red", it should render background red', async () => {
    const a = render(<ComicSliderItem color="red" />);

    const b = a.container.querySelector("div");
    expect(b.className).toBe(
      "flex-none bg-red-500 w-36 sd:w-36 md:w-64 lg:w-96 h-full"
    );
  });
});
