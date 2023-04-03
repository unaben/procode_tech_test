import { render, screen, waitFor } from "@testing-library/react";
import FormInput from "../FormInput";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import userEvent from "@testing-library/user-event";

describe("FormInput component", () => {
  it("should renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <FormInput setToggleTodoBtn={jest.fn()} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should renders button correctly", () => {
    render(
      <Provider store={store}>
        <FormInput setToggleTodoBtn={jest.fn()} />
      </Provider>
    );
    const btnEl = screen.getAllByRole("button");
    expect(btnEl).toHaveLength(1);
  });

  it("Should render all input correctly", () => {
    const mockFunction = jest.fn();
    render(
      <Provider store={store}>
        <FormInput setToggleTodoBtn={mockFunction} />
      </Provider>
    );
    const inputEl = screen.getAllByRole("textbox");
    expect(inputEl).toHaveLength(2);
  });

    it("Should render a text when desciption Input is not empty", async () => {
      const mockFunction = jest.fn();
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <FormInput setToggleTodoBtn={mockFunction} />
        </Provider>
      );
      const descInput = screen.getByPlaceholderText(/Enter description..../i);
      user.type(descInput, "Go today");

      await waitFor(() => {
        expect(descInput).toHaveValue("Go today");
      });
    });

  it("Should render a string when title Input is empty", () => {
    const mockFunction = jest.fn();
    render(
      <Provider store={store}>
        <FormInput setToggleTodoBtn={mockFunction} />
      </Provider>
    );
    const titleInput = screen.getByPlaceholderText(/Enter todo title.../i);
    userEvent.type(titleInput, "");

    expect(titleInput).toHaveValue("");
  });
});
