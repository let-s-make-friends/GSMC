import { Container, Title } from "./styles";
import { category2, category } from "../../types/activity";
import {
  DatePicker,
  Dropdown,
  Header,
  ImgButton,
  Textarea,
  WriteInput,
} from "../../components";

const Write = () => {
  return (
    <Container
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
      }}
    >
      <Header />
      <Title>활동 영역 작성하기</Title>
      <Dropdown<category> label="카테고리" options={["인문", "전공"]} />
      <Dropdown<category2>
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
