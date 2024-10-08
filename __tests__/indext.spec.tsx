import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import Home from "../pages";
import { store } from '../src/store';

describe("Index page test", () => {
  test("should render correctly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
});
