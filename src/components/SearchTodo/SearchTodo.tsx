import React, { FC } from "react";

type IFilteredTodoProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchTodo: FC<IFilteredTodoProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="todo-input-item">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        name="searchTerm"
        id="search-term"
        placeholder="Search todos...."
      />
    </form>
  );
};

export default SearchTodo;
