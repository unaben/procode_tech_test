import { useState, FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "../../features/todo/TodoSlice";
import { message } from "../../translation/ENT";
import "./FormInput.css";

type IFormInputProps = {
  setToggleTodoBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormInput: FC<IFormInputProps> = ({ setToggleTodoBtn }) => {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const canCreate = [inputData.title, inputData.description].every(Boolean);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (canCreate) {
      dispatch(addTodo(inputData));
      setToggleTodoBtn(false);
      setInputData({
        title: "",
        description: "",
      });
    }
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <div className="todo-input-item">
        <label>{message.title}</label>
        <input
          value={inputData.title}
          type="text"
          name="title"
          id="title"
          placeholder="Enter todo title..."
          onChange={handleInputChange}
        />
      </div>
      <div className="todo-input-item">
        <label className="description">{message.description}</label>
        <input
          value={inputData.description}
          type="text"
          name="description"
          id="description"
          placeholder="Enter description...."
          onChange={handleInputChange}
        />
      </div>
      <div className="todo-input-item">
        <button type="submit" className="primary-btn">
          {message.add}
        </button>
      </div>
    </form>
  );
};

export default FormInput;
