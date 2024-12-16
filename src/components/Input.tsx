import { ChangeEvent } from "react";
import styled from "styled-components";

// Define a more flexible onChange type
type OnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

interface InputProps {
  name: string;
  placeHolder: string;
  value: string;
  onChange: OnChangeHandler;
}

const InputSection = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 0%;
  box-sizing: border-box;
  width: 100%;
`;

const Input = ({ name, placeHolder, value, onChange }: InputProps) => {
  return (
    <InputSection
      type="text"
      name={name}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
