import { Container, DropdownContainer } from "./styles";

interface DropdownProps<T> {
  options: T[];
  label: string;
}

const Dropdown = <T,>({ options, label }: DropdownProps<T>) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <DropdownContainer required name={label} id={label}>
        {options.map((option, index) => (
          <option key={index}>{String(option)}</option>
        ))}
      </DropdownContainer>
    </Container>
  );
};

export default Dropdown;
