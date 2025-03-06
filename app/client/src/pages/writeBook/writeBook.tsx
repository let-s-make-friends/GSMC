import { useState } from "react";
import {
  DefaultButton,
  Dropdown,
  Header,
} from "../../share";
import {
  Textarea,
  WriteInput,
} from "../../components";
import { Book } from "../../types/write";
import { Container, Title, WhiteBtn, Wrapper } from "./styles";
import { submitBook } from "../../apis/write";
import { useNavigate } from "react-router-dom";

const WriteBook = () => {
  const [book, setBook] = useState<Book>({
    semester: 1,
    author: "",
    title: "",
    page: 0,
    postStatus: "",
    body: "",
  });
  const go = useNavigate();

  const updateBookField = (field: keyof Book, value: string | number) => {
    setBook((preBook) => ({
      ...preBook,
      [field]: value,
    }));
  };
  return (
    <Container>
      <Header />
      <Title>독서 영역 작성하기</Title>
      <Dropdown
        setValue={(value) => updateBookField("semester", value)}
        value={book.semester}
        options={[1, 2]}
        label="학기"
      />
      <WriteInput
        onChange={(value) => updateBookField("title", value)}
        value={book.title}
        label="제목"
      />
      <WriteInput
        onChange={(value) => updateBookField("author", value)}
        value={book.author}
        label="저자"
      />
      <WriteInput
        onChange={(value) => updateBookField("page", value)}
        value={book.page}
        label="페이지"
      />
      <Textarea
        length={book.body.length}
        onChange={(value) => updateBookField("body", value)}
        value={book.body}
        placeholder="200자 이상 입력"
        label="내용"
      />
      <Wrapper>
        <WhiteBtn
          onClick={async () => {
            updateBookField("postStatus", "임시 저장");
            const res = await submitBook(book);
            res.success && go("/main");
          }}
        >
          임시 저장
        </WhiteBtn>
        <DefaultButton
          fullW={true}
          label="작성 완료"
          active={
            book.body !== "" &&
            book.page !== 0 &&
            book.title !== "" &&
            book.author !== ""
          }
          onClick={async () => {
            updateBookField("postStatus", "게시");
            const res = await submitBook(book);
            res.success && go("/main");
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default WriteBook;
