import styled from "styled-components";
import Input from "../components/Input";
import ListTodo, { Todo } from "../components/ListTodo";

const tempData: Todo[] = [];

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
  // Hanlde Add
  function handleAddTodo() {
    console.log("Successfull Add");
  }

  // Handle Delete All List
  function handleClearAllTodo() {
    const conf = confirm("Clear All Todo ?");
    if (conf) {
      console.log("Success Delete All");
    }
  }

  return (
    <WrapperLandingPage>
      <WrapperInputForm>
        <Input name="todo" placeHolder="Input New Todo" />
        <Button onClick={handleAddTodo}>Add</Button>
        <Button onClick={handleClearAllTodo}>Clear</Button>
      </WrapperInputForm>
      <ListTodo todos={tempData} />
    </WrapperLandingPage>
  );
};

export default LandingPage;
