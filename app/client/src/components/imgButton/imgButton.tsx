import Plus from "../../assets/svg/plus.svg";
import { Button, Container } from "./styles";

const ImgButton = () => {
  return (
    <Container>
      <label htmlFor="img">이미지</label>
      <Button>
        <img src={Plus} id="img" alt="plus" />
      </Button>
    </Container>
  );
};

export default ImgButton;
