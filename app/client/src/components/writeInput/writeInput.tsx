import { Container, Input } from "./styles";

interface WriteInputProps {
  label: string;
}

const WriteInput = ({ label }: WriteInputProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <Input id={label} type="text" />
    </Container>
  );
};

export default WriteInput;
