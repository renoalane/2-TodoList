import { createContext, ReactNode, useContext, useState } from "react";
import { Todo } from "./types";
import { GetListTodo } from "./hooks/useTodo";

interface TodoContextType {
  todos: Todo[] | undefined;
  setTodos: (todo: Todo[]) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[] | undefined>(() => {
    const newTodos = GetListTodo();
    return newTodos;
  });

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) throw new Error("useTodo must be used within a FilterTodo");
  return context;
};
