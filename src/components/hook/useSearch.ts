import { ICompletedTodo } from "../../models/TodoModel";

const useSearch = (data: ICompletedTodo[], searchTerm: string) => {

  const searchData = data?.filter((todo: ICompletedTodo) => {
    return Object.keys(todo)?.some((key) => {
      return todo[key as keyof ICompletedTodo]?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
    });
  });
  return { searchData };
};

export default useSearch;
