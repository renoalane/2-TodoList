import styled from "styled-components";
import Loader from "./Loader";

interface PropsDataTodo {
  todos: Todo[];
}

export interface Todo {
  id: number;
  name: string;
  status: boolean;
}

const TableList = styled.table`
  margin-top: 1em;
  border-collapse: collapse;
`;

const TrHeadFoot = styled.tr`
  background-color: #ddd;
  font-weight: bold;
  font-size: 0.8rem;
`;

const ButtonAction = styled.button<{ $inputBackGroundColor?: string }>`
  padding: 0.5em;
  background-color: ${(props) => props.$inputBackGroundColor ?? "#fff"};
  cursor: pointer;
  color: #000;
  box-sizing: border-box;
  box-shadow: 0.2em 0.2em #ddd;
  border: 0;
  border: 1px solid black;
  margin: 0.5em;
  font-family: "Press Start 2P", system-ui;
  font-size: 1em;
`;

const BadgeStatus = styled.p<{
  $inputBackGroundColor?: string;
}>`
  background-color: ${(props) => props.$inputBackGroundColor ?? "#fff"};
  padding: 0.5em;
  color: #000;
  border: 1px solid #000;
  text-align: center;
`;

const ListTodo = ({ todos = [] }: PropsDataTodo) => {
  return (
    <TableList border={1} cellPadding={8} width={"100%"}>
      <thead>
        <TrHeadFoot>
          <td width={"75%"}>Todo</td>
          <td width={"10%"}>Status</td>
          <td width={"15%"}>Action</td>
        </TrHeadFoot>
      </thead>
      <tbody>
        {todos.length ? (
          todos.map((todo) => (
            <tr
              key={todo.id}
              style={{
                fontSize: "0.8em",
                fontWeight: "lighter",
                lineHeight: "1.4em",
              }}
            >
              <td>{todo.name}</td>
              <td>
                {todo.status ? (
                  <BadgeStatus $inputBackGroundColor="#B0E0E6">
                    Done
                  </BadgeStatus>
                ) : (
                  <BadgeStatus $inputBackGroundColor="#FFFACD">
                    On Progress
                  </BadgeStatus>
                )}
              </td>
              <td>
                {todo.status ? (
                  <ButtonAction>On Progress</ButtonAction>
                ) : (
                  <ButtonAction>Done</ButtonAction>
                )}
                <ButtonAction $inputBackGroundColor="#FFB6C1">
                  Delete
                </ButtonAction>
              </td>
            </tr>
          ))
        ) : (
          <tr
            style={{
              fontSize: "0.8em",
              fontWeight: "lighter",
              lineHeight: "1.4em",
            }}
          >
            <td colSpan={3} align="center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h4>Please Add Todo First</h4>
                <Loader />
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <TrHeadFoot>
          <td colSpan={3} align="center">
            hope it's helpful for you
          </td>
        </TrHeadFoot>
      </tfoot>
    </TableList>
  );
};

export default ListTodo;