import { render, screen } from "@testing-library/react";
import TodoListBtn from "../TodoListBtn";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import userEvent from "@testing-library/user-event";

describe("Btn component", () => {
  it("should renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <TodoListBtn toggleTodoBtn={false} setToggleTodoBtn={jest.fn()} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should renders button correctly", async () => {
    render(
      <Provider store={store}>
        <TodoListBtn toggleTodoBtn={false} setToggleTodoBtn={jest.fn()} />
      </Provider>
    );
    const btnEl = await screen.findAllByRole("button");
    expect(btnEl).toHaveLength(2);
  });

  it("should be called when click", async () => {
    const mockFunction = jest.fn(() => console.info("button clicked"));
    render(
      <Provider store={store}>
        <TodoListBtn toggleTodoBtn={false} setToggleTodoBtn={mockFunction} />
      </Provider>
    );
    const btnEl = screen.getByRole("button", {
      name: /Todo/i,
    });
    await userEvent.click(btnEl);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
