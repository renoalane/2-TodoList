import styled from "styled-components";
import Input from "../components/Input";
import ListTodo from "../components/ListTodo";
import { AddListTodo, DeleteAllListTodo } from "../hooks/useTodo";
import { ChangeEvent, useState } from "react";
import { useTodo } from "../TodoContext";

const WrapperLandingPage = styled.div`
  font-size: 0.6em;
  margin: 0.2em;
  font-weight: lighter;
  width: 100wh;
`;

const WrapperInputForm = styled.div<{ $inputGap?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  box-sizing: border-box;
  padding: 0.5em;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid black;
  box-shadow: 0.2em 0.2em #ddd;
  margin: 0 0.4em;
`;

const LandingPage = () => {
  const [todo, setTodo] = useState<string>("");

  const { setTodos } = useTodo();

  function handleChangeTodo(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  // Hanlde Add
  function handleAddTodo() {
    if (todo.trim()) {
      const newTodos = AddListTodo(todo);
      setTodos(newTodos);
    } else {
      alert("Input The Name of Todo First");
    }
    setTodo("");
  }

  // Handle Delete All List
  function handleClearAllTodo() {
    const conf = confirm("Clear All Todo ?");
    if (conf) {
      const newTodos = DeleteAllListTodo();
      setTodos(newTodos);
    }
  }

  return (
    <WrapperLandingPage>
      <WrapperInputForm>
        <Input
          name="todo"
          placeHolder="Input New Todo"
          value={todo}
          onChange={handleChangeTodo}
        />
        <Button onClick={handleAddTodo}>Add</Button>
        <Button onClick={handleClearAllTodo}>Clear</Button>
      </WrapperInputForm>
      <ListTodo />
    </WrapperLandingPage>
  );
};

export default LandingPage;
