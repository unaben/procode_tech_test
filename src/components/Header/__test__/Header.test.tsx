import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Header component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render heading element", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveTextContent(/Basic Todo App/i);
  });
});
