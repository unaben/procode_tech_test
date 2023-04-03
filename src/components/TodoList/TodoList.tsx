import React, { FC } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { capitalizeFirstLetter } from "../../helper/helper";
import { ICompletedTodo } from "../../models/TodoModel";
import { message } from "../../translation/ENT";
import "./TodoList.css";

type ITodoListProps = {
  data: ICompletedTodo[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  setToggleTodoBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoList: FC<ITodoListProps> = ({
  data,
  onComplete,
  onDelete,
  setToggleTodoBtn,
}) => {
  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={index} className="todo-list-item">
            <div>
              {item.title && <h3>{capitalizeFirstLetter(item.title)}</h3>}
              {item.description && (
                <p>{capitalizeFirstLetter(item.description)}</p>
              )}
              {item.completedAt && (
                <p>
                  <small>
                    {message.completedOn}: {item.completedAt}
                  </small>
                </p>
              )}
            </div>
            <div>
              <i>
                <RiDeleteBinFill
                  data-testid="delete-icon"
                  onClick={() => onDelete(index)}
                  className="icon"
                />
              </i>
              {!item.completedAt && (
                <i>
                  <BsCheckLg
                    data-testid="check-icon"
                    onClick={() => {
                      onComplete(index);
                      setToggleTodoBtn(true);
                    }}
                    className="check-icon"
                  />
                </i>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
