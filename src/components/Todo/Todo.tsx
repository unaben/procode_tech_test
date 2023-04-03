import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import TodoListBtn from "../TodoListBtn/TodoListBtn";
import TodoList from "../TodoList/TodoList";
import { useLocalStorage } from "../hook/useLocalStorage";
import { ICompletedTodo } from "../../models/TodoModel";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteTodo, getAllTodos } from "../../features/todo/TodoSlice";
import { executeDelete, generateTime } from "../../helper/helper";
import SearchTodo from "../SearchTodo/SearchTodo";
import "./Todo.css";
import { message } from "../../translation/ENT";
import useSearch from "../hook/useSearch";

const Todo = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [toggleTodoBtn, setToggleTodoBtn] = useState<boolean>(false);
  const [completeTodos, setCompleteTodos] = useLocalStorage<ICompletedTodo[]>(
    "completedTodos",
    []
  );
  const allTodos = useAppSelector(getAllTodos);
  const { searchData } = useSearch(allTodos, searchTerm);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteCompletedTodo = (id: number) => {
    const newValue = executeDelete(id, completeTodos);
    setCompleteTodos(newValue);
  };

  const checkCompleteTodo = (id: number) => {
    const completedAt = generateTime();
    const filteredItem = { ...allTodos[id], completedAt };
    setCompleteTodos([...completeTodos, filteredItem]);
    handleDelete(id);
  };
  return (
    <div className="todo-wrapper">
      <FormInput setToggleTodoBtn={setToggleTodoBtn} />
      <div className="todo-content">
        <TodoListBtn
          toggleTodoBtn={toggleTodoBtn}
          setToggleTodoBtn={setToggleTodoBtn}
        />
        <p>
          {toggleTodoBtn === false
            ? message.totalPending
            : message.totalCompleted}
          : {toggleTodoBtn === false ? allTodos.length : completeTodos.length}
        </p>
        <SearchTodo searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="todo-list">
        {toggleTodoBtn === false ? (
          <TodoList
            data={searchData}
            onComplete={checkCompleteTodo}
            onDelete={handleDelete}
            setToggleTodoBtn={setToggleTodoBtn}
          />
        ) : (
          <TodoList
            data={completeTodos}
            onDelete={handleDeleteCompletedTodo}
            onComplete={() => {}}
            setToggleTodoBtn={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
