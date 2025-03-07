import React, { useRef } from "react";
import { Container, Length, TextareaInput } from "./styles";

interface TextareaProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
  length?: number;
  placeholder: string;
}

const Textarea = ({
  label,
  onChange,
  value,
  length,
  placeholder,
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Container>
      <div>
        <label htmlFor={label}>{label}</label>
        {length !== 0 && <Length> ({length})</Length>}
      </div>

      <TextareaInput
        maxLength={1000}
        ref={textareaRef}
        placeholder={placeholder}
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
