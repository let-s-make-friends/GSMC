import { Container, Title, Wrrapper } from "./styles";
import { category2, category, Activity } from "../../types/activity";
import {
  DefaultButton,
  Dropdown,
  Header,
  ImgButton,
  Textarea,
  WriteInput,
} from "../../components";
import { useState } from "react";

const Write = () => {
  const [activity, setActivity] = useState<Activity>({
    studyCategory: "인문",
    subject: "",
    activityCategory: "교내 수상",
    body: "",
    semester: 0,
    imageUrl: "",
    postStatus: "임시 저장",
  });

  const updateActivityField = (
    field: keyof Activity,
    value: string | number
  ) => {
    setActivity((prevActivity) => ({
      ...prevActivity,
      [field]: value,
    }));
  };

  return (
    <Container>
      <Header />
      <Title>활동 영역 작성하기</Title>

      <Dropdown<category>
        value={activity.studyCategory}
        setValue={(value) => updateActivityField("studyCategory", value)}
        label="카테고리"
        options={["인문", "전공"]}
      />

      <Dropdown<category2>
        value={activity.activityCategory}
        setValue={(value) => updateActivityField("activityCategory", value)}
        label="카테고리 2"
        options={["교내 수상", "교외 수상", "교내 참가", "교외 참가", "동아리"]}
      />

      <Dropdown<number>
        value={activity.semester}
        setValue={(value) => updateActivityField("semester", value)}
        label="날짜"
        options={[1, 2]}
      />

      <WriteInput
        value={activity.subject}
        onChange={(value) => updateActivityField("subject", value)}
        label="주제"
      />

      <Textarea
        value={activity.body}
        onChange={(value) => updateActivityField("body", value)}
        label="내용"
      />

      <ImgButton
        value={activity.imageUrl}
        onChange={(value) => updateActivityField("imageUrl", value)}
      />

      <Wrrapper>
        <DefaultButton
          label="작성 완료"
          active={
            activity.body !== "" &&
            activity.subject !== "" &&
            activity.semester !== 0
          }
        />
      </Wrrapper>
    </Container>
  );
};

export default Write;
