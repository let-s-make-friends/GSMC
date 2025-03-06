import { useState } from "react";
import {
  Container,
  Label,
  DropdownButton,
  OptionsList,
  Option,
} from "./styles";

interface DropdownProps<T> {
  options: T[];
  value: T;
  setValue: (value: T) => void;
  label?: string;
}

const Dropdown = <T,>({
  options,
  label,
  setValue,
  value,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: T) => {
    setValue(option);
    setIsOpen(false);
  };

  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <DropdownButton onClick={toggleDropdown}>
        {String(value) || "선택해주세요"}
      </DropdownButton>
      {isOpen && (
        <OptionsList>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {String(option)}
            </Option>
          ))}
        </OptionsList>
      )}
    </Container>
  );
};

export default Dropdown;
