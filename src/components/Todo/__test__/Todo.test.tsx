import { render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Todo component", () => {
  it("should renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should renders pragraph text correctly", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const paragraphText = screen.getByText(/Pending Todos/i);
    expect(paragraphText).toBeInTheDocument();
  });
});
