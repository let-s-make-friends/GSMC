import React from "react";
import { Container, TextareaInput } from "./styles";

interface TextareaProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
}

const Textarea = ({ label, onChange, value }: TextareaProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <TextareaInput
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        value={value}
        required
        id={label}
        name={label}
      />
    </Container>
  );
};

export default Textarea;
