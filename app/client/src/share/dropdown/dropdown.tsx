import { useState, useEffect, useRef } from "react";
import { Container, DropdownButton, OptionsList, Option } from "./styles";

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container ref={dropdownRef}>
      <label htmlFor={label}>{label}</label>

      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {String(value) || "선택해주세요"}
      </DropdownButton>
      {isOpen && (
        <OptionsList>
          {options.map((option, index) => (
            <Option
              key={index}
              onClick={() => {
                setValue(option);
                setIsOpen(false);
              }}
            >
              {String(option)}
            </Option>
          ))}
        </OptionsList>
      )}
    </Container>
  );
};

export default Dropdown;
