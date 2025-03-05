import React from "react";
import { Container, Input } from "./styles";

interface WriteInputProps {
  label: string;
  onChange: (value: string | number) => void;
  value: string | number;
}

const WriteInput = ({ label, onChange, value }: WriteInputProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
<<<<<<< HEAD
      <Input name={label} id={label} type="text" />
=======
      <Input
        maxLength={30}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        name={label}
        required
        id={label}
        type="text"
      />
>>>>>>> e4d3a938781643fc6494c5d18b137ebe3bda7514
    </Container>
  );
};

export default WriteInput;
