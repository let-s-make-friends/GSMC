import { Container, TextareaInput } from "./styles";

interface TextareaProps {
  label: string;
}

const Textarea = ({ label }: TextareaProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <TextareaInput id={label} name={label} />
    </Container>
  );
};

export default Textarea;
