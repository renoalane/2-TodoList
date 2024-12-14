import styled from "styled-components";

interface InputProps {
  name: string;
  placeHolder: string;
}

const InputSection = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 0%;
  box-sizing: border-box;
  width: 100%;
`;

const Input = ({ name, placeHolder }: InputProps) => {
  return <InputSection type="text" name={name} placeholder={placeHolder} />;
};

export default Input;
