import { useState } from "react";
import { Dropdown, Textarea, WriteInput } from "../../components";
import { Book } from "../../types/write";

const WriteBook = () => {
  const [book, setBook] = useState<Book>({
    semester: 0,
    author: "",
    title: "",
    page: 0,
    postStatus: "",
    body: "",
  });

  const updateBookField = (field: keyof Book, value: string | number) => {
    setBook((preBook) => ({
      ...preBook,
      [field]: value,
    }));
  };
  return (
    <div>
      <h1>독서 영역 작성하기</h1>
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
        onChange={(value) => updateBookField("body", value)}
        value={book.body}
        placeholder="200자 이상 입력"
        label="내용"
      />
    </div>
  );
};

export default WriteBook;
