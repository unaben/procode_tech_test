import { render, screen } from "@testing-library/react";
import SearchTodo from "../SearchTodo";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import userEvent from "@testing-library/user-event";

describe("SearchTodo component", () => {
  it("should renders correctly", () => {
    const searchTerm = "";
    const mockFunction = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <SearchTodo searchTerm={searchTerm} setSearchTerm={mockFunction} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("Should render input correctly", () => {
    const searchTerm = "";
    const mockFunction = jest.fn();
    render(
      <Provider store={store}>
        <SearchTodo searchTerm={searchTerm} setSearchTerm={mockFunction} />
      </Provider>
    );
    const inputEl = screen.getAllByRole("textbox");
    expect(inputEl).toHaveLength(1);
  });

  it("Should render a string when title Input is empty", () => {
    const searchTerm = "";
    const mockFunction = jest.fn();
    render(
      <Provider store={store}>
        <SearchTodo searchTerm={searchTerm} setSearchTerm={mockFunction} />
      </Provider>
    );
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "");

    expect(searchInput).toHaveValue("");
  });

  it("Should render a text when searchTerm Input is not empty", () => {
    const searchTerm = "Gym";
    const mockFunction = jest.fn();
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <SearchTodo searchTerm={searchTerm} setSearchTerm={mockFunction} />
      </Provider>
    );
    const searchInput = screen.getByRole("textbox");
    user.type(searchInput, "Gym");
    expect(searchInput).toHaveValue("Gym");
  });
});
