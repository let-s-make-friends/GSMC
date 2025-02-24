import DatePicker from "../../components/datePicker/datePicker";
import Dropdown from "../../components/dropdown/dropdown";
import Header from "../../components/header/header";
import ImgButton from "../../components/imgButton/imgButton";
import Textarea from "../../components/textarea/textarea";
import WriteInput from "../../components/writeInput/writeInput";
import { Container, Title } from "./styles";

const Write = () => {
  return (
    <Container>
      <Header />
      <Title>활동 영역 작성하기</Title>
      <Dropdown label="카테고리" options={["인문", "전공"]} />
      <Dropdown
        label="카테고리 2"
        options={["교내 수상", "교외 수상", "교내 참가", "교외 참가", "동아리"]}
      />
      <DatePicker label="날짜" />
      <WriteInput label="주제" />
      <Textarea label="내용" />
      <ImgButton />
    </Container>
  );
};

export default Write;
