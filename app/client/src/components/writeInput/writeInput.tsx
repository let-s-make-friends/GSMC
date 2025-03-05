import React from "react";
import { Container, Input } from "./styles";

interface WriteInputProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
}

const WriteInput = ({ label, onChange, value }: WriteInputProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        name={label}
        required
        id={label}
        type="text"
      />
    </Container>
  );
};

export default WriteInput;
