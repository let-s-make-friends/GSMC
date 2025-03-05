import React from "react";
import { Container, Length, TextareaInput } from "./styles";

interface TextareaProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
  length?: number;
}

const Textarea = ({ label, onChange, value, length }: TextareaProps) => {
  return (
    <Container>
      <div>
        <label htmlFor={label}>{label}</label>
        {length !== 0 && <Length> ({length})</Length>}
      </div>

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
