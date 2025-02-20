import { category, category2 } from "../../types/activity";
import { Container, DropdownContainer } from "./styles";

interface DropdownProps {
  options: category[] | category2[];
  label: string;
}

const Dropdown = ({ options, label }: DropdownProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <DropdownContainer required name={label} id={label}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </DropdownContainer>
    </Container>
  );
};
export default Dropdown;
