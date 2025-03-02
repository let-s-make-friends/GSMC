import React from "react";
import { Container, DropdownContainer } from "./styles";

interface DropdownProps<T> {
  options: T[];
  value: T;
  setValue: (value: T) => void;
  label: string;
}

const Dropdown = <T,>({ options, label, setValue }: DropdownProps<T>) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <DropdownContainer
        required
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setValue(e.target.value as T)
        }
        id={label}
      >
        {options.map((option, index) => (
          <option key={index} value={String(option)}>
            {String(option)}
          </option>
        ))}
      </DropdownContainer>
    </Container>
  );
};

export default Dropdown;
