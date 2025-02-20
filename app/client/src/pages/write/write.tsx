import Dropdown from "../../components/dropdown/dropdown";
import Header from "../../components/header/header";
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
        label="카테고리2"
        options={["교내 수상", "교외 수상", "교내 참가", "교외 참가", "동아리"]}
      />
      <WriteInput label="주제" />
      <Textarea label="내용" />
    </Container>
  );
};

export default Write;
