import { Todo } from "../types";

export const GetListTodo = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export const AddListTodo = (name: string) => {
  const todos = GetListTodo();

  const newTodo: Todo = {
    id: Date.now(),
    name: name,
    status: false,
  };

  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  return "Successfull Add";
};

export const DeleteAllListTodo = () => {
  localStorage.clear();
  return "Successfull DElete All List Todo";
};

export const UpdateStatusListTodo = (id: number) => {
  const todos = GetListTodo();
  const newTodos = todos.map((todo: Todo) =>
    todo.id === id ? { ...todo, status: !todo.status } : todo,
  );
  localStorage.setItem("todos", JSON.stringify(newTodos));
  return "Succesfull Update";
};

export const DeleteListTodo = (id: number) => {
  const todos = GetListTodo();
  const newTodos = todos.filter((todo: Todo) => todo.id != id);
  localStorage.setItem("todos", JSON.stringify(newTodos));
  return "Successfull Delete";
};
