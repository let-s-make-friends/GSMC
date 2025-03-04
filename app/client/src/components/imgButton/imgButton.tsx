import { Container } from "./styles";

interface ImgButtonProps {
  onChange: (value: string) => void;
  value: string;
}

const ImgButton = ({ onChange, value }: ImgButtonProps) => {
  return (
    <Container>
      <label>이미지</label>
      <input
        value={value}
        type="file"
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default ImgButton;
