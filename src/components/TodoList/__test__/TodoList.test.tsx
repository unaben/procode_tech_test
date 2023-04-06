import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { ICompletedTodo } from "../../../models/TodoModel";

describe("TodoList component", () => {
  it("should renders check icon correctly", () => {
    const todos = [
      {
        title: "Gym",
        description: "Once a day",
      },
    ] as ICompletedTodo[];
    const onComplete = jest.fn();
    const onDelete = jest.fn();
    const mockFunction = jest.fn();
    render(
      <Provider store={store}>
        <TodoList
          data={todos}
          onComplete={onComplete}
          onDelete={onDelete}
          setToggleTodoBtn={mockFunction}
        />
      </Provider>
    );
    const checkIcon = screen.getByTestId("check-icon");
    expect(checkIcon).toBeInTheDocument();
  });

  it("should renders delete icon correctly", async () => {
    const todos = [
      {
        title: "Gym",
        description: "Once a day",
      },
    ] as ICompletedTodo[];
    const onComplete = jest.fn();
    const onDelete = jest.fn();
    const mockFunction = jest.fn();
    render(
      <Provider store={store}>
        <TodoList
          data={todos}
          onComplete={onComplete}
          onDelete={onDelete}
          setToggleTodoBtn={mockFunction}
        />
      </Provider>
    );
    const checkIcon = screen.getByTestId("delete-icon");
    expect(checkIcon).toBeInTheDocument();
  });
});
