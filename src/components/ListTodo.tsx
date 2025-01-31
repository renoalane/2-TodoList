import styled from "styled-components";
import Loader from "./Loader";
import { DeleteListTodo, UpdateStatusListTodo } from "../hooks/useTodo";
import { useTodo } from "../TodoContext";

const TableList = styled.table`
  margin-top: 1em;
  border-collapse: collapse;
  box-sizing: border-box;
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

const NameDoneTodo = styled.span`
  color: #9e7171;
  text-decoration: line-through;
`;

const ListTodo = () => {
  const { todos, setTodos } = useTodo();

  const handleChangeStatus = (id: number) => {
    const newTodos = UpdateStatusListTodo(id);
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const conf = confirm("Are you sure want to delete this todo");
    if (conf) {
      const newTodos = DeleteListTodo(id);
      setTodos(newTodos);
    }
  };

  return (
    <TableList border={1} cellPadding={8} width={"100%"}>
      <thead>
        <TrHeadFoot>
          <td width={"70%"}>Todo</td>
          <td width={"10%"}>Status</td>
          <td width={"20%"}>Action</td>
        </TrHeadFoot>
      </thead>
      <tbody>
        {todos?.length ? (
          todos?.map((todo) => (
            <tr
              key={todo.id}
              style={{
                fontSize: "0.8em",
                fontWeight: "lighter",
                lineHeight: "1.4em",
              }}
            >
              <td>
                {todo.status ? (
                  <NameDoneTodo>{todo.name}</NameDoneTodo>
                ) : (
                  <span>{todo.name}</span>
                )}
              </td>
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
                  <ButtonAction onClick={() => handleChangeStatus(todo.id)}>
                    On Progress
                  </ButtonAction>
                ) : (
                  <ButtonAction onClick={() => handleChangeStatus(todo.id)}>
                    Done
                  </ButtonAction>
                )}
                <ButtonAction
                  $inputBackGroundColor="#FFB6C1"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
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
