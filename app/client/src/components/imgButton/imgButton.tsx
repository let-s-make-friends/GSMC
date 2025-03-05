import { getImgURL } from "../../apis/getImgURL";
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
        accept="image/png, image/jpeg"
        value={value}
        type="file"
        onChange={async (e) => {
          const res = await getImgURL(e.target.value);
          res && onChange(res);
        }}
      />
    </Container>
  );
};

export default ImgButton;
