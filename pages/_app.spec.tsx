import { render } from "@testing-library/react";
import App from "./_app";

describe("_app test", () => {
  test("should render correctly", () => {
    render(<App Component={() => {}} pageProps={{}} />);
  });
});
