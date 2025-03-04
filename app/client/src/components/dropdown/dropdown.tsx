import React from "react";
import { Container, DropdownContainer } from "./styles";

interface DropdownProps<T> {
  options: T[];
  value: string;
  onChange: (value: T) => void;
  label: string;
}

const Dropdown = <T,>({
  options,
  label,
  value,
  onChange,
}: DropdownProps<T>) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <DropdownContainer
        required
        name={label}
        id={label}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value as T)
        }
      >
        {options.map((option, index) => (
          <option key={index} value={value}>
            {String(option)}
          </option>
        ))}
      </DropdownContainer>
    </Container>
  );
};

export default Dropdown;
