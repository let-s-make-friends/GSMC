import { Container, Title } from "./styles";
import { category2, category } from "../../types/activity";
import { useState } from "react";
import {
  DatePicker,
  Dropdown,
  Header,
  ImgButton,
  Textarea,
  WriteInput,
} from "../../components";

const Write = () => {
  const [category, setCategory] = useState<string>("인문");
  const [category2, setCategory2] = useState<category2>("교내 수상");
  return (
    <Container>
      <Header />
      <Title>활동 영역 작성하기</Title>
      <Dropdown<category>
        value={category}
        onChange={setCategory}
        label="카테고리"
        options={["인문", "전공"]}
      />
      <Dropdown<category2>
        value={category2}
        onChange={setCategory2}
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
