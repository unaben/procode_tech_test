import { ICompletedTodo } from "../models/TodoModel";

export const executeDelete = (id: number, values: ICompletedTodo[]) => {
  const newValue = values?.filter(
    (todo: ICompletedTodo, index) => index !== id
  );
  return newValue;
};

export const generateTime = () => {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();
  const completedAt = `${date}/${month}/${year} at ${hours}:${mins}:${seconds}`;
  return completedAt;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
