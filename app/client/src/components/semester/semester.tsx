import { Button, ButtonWrapper, Container } from "./styles";

interface SemesterProps {
  value: number;
  setValue: (value: number) => void;
}

const Semester = ({ setValue, value }: SemesterProps) => {
  return (
    <Container>
      <label htmlFor="semester">학기</label>
      <ButtonWrapper id="semester">
        <Button selected={value === 1} onClick={() => setValue(1)}>
          1학기
        </Button>
        <Button selected={value === 2} onClick={() => setValue(2)}>
          2학기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Semester;
