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
import { useNavigate } from "react-router-dom";
import { submitActivity } from "../../apis/write";

const Write = () => {
  const [activity, setActivity] = useState<Activity>({
    studyCategory: "인문",
    activityCategory: "교내 수상",
    semester: 0,
    subject: "",
    body: "",
    imageUrl: "",
    postStatus: "",
  });
  const [length, setLength] = useState<number>(0);

  const updateActivityField = (
    field: keyof Activity,
    value: string | number
  ) => {
    setActivity((prevActivity) => ({
      ...prevActivity,
      [field]: value,
    }));
  };
  const go = useNavigate();
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
        length={length}
        value={activity.body}
        onChange={(value) => {
          setLength(value.length);
          updateActivityField("body", value);
        }}
        label="내용"
      />

      <ImgButton
        value={activity.imageUrl}
        onChange={(value) => updateActivityField("imageUrl", value)}
      />

      <Wrrapper>
        <DefaultButton
          onClick={async () => {
            updateActivityField("postStatus", "게시");
            const res = await submitActivity(activity);
            res.success && go("/");
          }}
          label="작성 완료"
          active={
            activity.body !== "" &&
            activity.subject !== "" &&
            activity.semester !== 0 &&
            activity.imageUrl !== ""
              ? activity.body.length > 200
              : activity.body.length > 400 && activity.postStatus !== ""
          }
        />
      </Wrrapper>
    </Container>
  );
};

export default Write;
