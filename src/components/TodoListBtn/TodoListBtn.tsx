import React, { FC } from "react";
import { message } from "../../translation/ENT";
import "./TodoListBtn.css";

type ITodoListBtnProps = {
  toggleTodoBtn: boolean;
  setToggleTodoBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoListBtn: FC<ITodoListBtnProps> = ({
  setToggleTodoBtn,
  toggleTodoBtn,
}) => {
  return (
    <div className="btn-area">
      <button
        onClick={() => setToggleTodoBtn(false)}
        className={`secondary-btn ${toggleTodoBtn === false && "active"}`}
      >
        {message.pending}
      </button>
      <button
        onClick={() => setToggleTodoBtn(true)}
        className={`secondary-btn ${toggleTodoBtn === true && "active"}`}
      >
        {message.completed}
      </button>
    </div>
  );
};

export default TodoListBtn;
