import SearchComponent from "./";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("AppComponent", () => {
  it('should have an input with "Search" placeholder', () => {
    renderSearchComponent([], 0);

    const inputElement = document.querySelector("input");

    if (!inputElement) {
      return;
    }
    expect(inputElement.getAttribute("placeholder")).toBe("Search");
  });

  it("should display total amount of comics when 0 available", () => {
    renderSearchComponent([], 0);

    expect(document.querySelector("span")).toHaveTextContent(
      "0 comics are available"
    );
  });

  it("should display total amount of comics when one available", () => {
    renderSearchComponent([], 1);

    expect(document.querySelector("span")).toHaveTextContent(
      "1 comic is available"
    );
  });

  it("should display total amount of comics when more than 1 available", () => {
    renderSearchComponent([], 2);

    expect(document.querySelector("span")).toHaveTextContent(
      "2 comics are available"
    );
  });

  it("should search when 3 letters are written", async () => {
    const user = userEvent.setup();
    const { onSearch } = renderSearchComponent(["opc 1", "opc 2"], 1);

    const inputElement = document.querySelector("input");

    if (!inputElement) {
      return;
    }
    await user.type(inputElement, "123");

    expect(document.querySelector("input")).toHaveValue("123");
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it("should display options when 3 letters are written", async () => {
    const user = userEvent.setup();
    renderSearchComponent(["opc 1", "opc 2"], 112);
    const inputElement = document.querySelector("input");

    if (inputElement) {
      await user.type(inputElement, "opc");

      expect(document.querySelector("input")).toHaveValue("opc");
      expect(document.querySelector("div.list")).toHaveTextContent("opc 1");
      expect(document.querySelector("div.list")).toHaveTextContent("opc 2");
    }
  });

  it("should display maximum of 5 options", async () => {
    const user = userEvent.setup();
    const optionList = ["opc 1", "opc 2", "opc 3", "opc 4", "opc 5"];
    const { onSearch, onClickOption } = renderSearchComponent(optionList, 1);
    const inputElement = document.querySelector("input");

    if (inputElement) {
      await user.type(inputElement, "opc");
      const foundOptions = await screen.findAllByText(/opc /);
      const listElement = document.querySelector("div.list");

      expect(inputElement).toHaveValue("opc");
      expect(listElement).toHaveTextContent("opc 1");
      expect(listElement).toHaveTextContent("opc 2");
      expect(listElement).toHaveTextContent("opc 3");
      expect(listElement).toHaveTextContent("opc 4");
      expect(listElement).toHaveTextContent("opc 5");
      expect(foundOptions.length).toEqual(5);
    }
  });

  it("should display no list if not options", async () => {
    const user = userEvent.setup();
    renderSearchComponent([], 1);

    const inputElement = document.querySelector("input");
    if (inputElement) {
      await user.type(inputElement, "opc");
      expect(document.querySelector("div.list")).toBeNull();
    }
  });

  it("should fire an event when option is clicked", async () => {
    const user = userEvent.setup();
    const { onClickOption } = renderSearchComponent(["opc 1"], 1);
    const inputElement = document.querySelector("input");

    if (inputElement) {
      await user.type(inputElement, "opc");
      await user.click(await screen.findByText(/opc /));
    }

    expect(onClickOption).toHaveBeenCalledTimes(1);
  });
});

function renderSearchComponent(options: string[], count: number) {
  const onSearch = jest.fn();
  const onClickOption = jest.fn();

  render(
    <SearchComponent
      count={count}
      onSearch={onSearch}
      options={options}
      onClickOption={onClickOption}
    />
  );

  return { onClickOption, onSearch };
}
