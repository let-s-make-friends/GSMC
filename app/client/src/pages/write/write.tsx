import {
  Container,
  DropdownWrapper,
  Title,
  WhiteBtn,
  Wrrapper,
} from "./styles";
import { category2, category, Activity } from "../../types/write";
import { DefaultButton, Dropdown, Header } from "../../share";
import { ImgButton, Textarea, WriteInput } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitActivity } from "../../apis/write";
import Semester from "../../components/semester/semester";

const Write = () => {
  const [activity, setActivity] = useState<Activity>({
    studyCategory: "인문",
    activityCategory: "교내 수상",
    semester: 1,
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

      <DropdownWrapper>
        <Dropdown<category>
          value={activity.studyCategory}
          setValue={(value) => updateActivityField("studyCategory", value)}
          label="카테고리"
          options={["인문", "전공"]}
        />

        <Dropdown<category2>
          value={activity.activityCategory}
          setValue={(value) => updateActivityField("activityCategory", value)}
          options={[
            "교내 수상",
            "교외 수상",
            "교내 참가",
            "교외 참가",
            "동아리",
          ]}
        />
      </DropdownWrapper>

      <Semester
        setValue={(value) => updateActivityField("semester", value)}
        value={activity.semester}
      />

      <WriteInput
        value={activity.subject}
        onChange={(value) => updateActivityField("subject", value)}
        label="주제"
      />

      <Textarea
        placeholder="사진 첨부 시 200자, 사진 미첨부 시 400자 입력"
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
        <WhiteBtn
          onClick={async () => {
            updateActivityField("postStatus", "임시 저장");
            const res = await submitActivity(activity);
            res.success && go("/");
          }}
        >
          임시 저장
        </WhiteBtn>
        <DefaultButton
          fullW={true}
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
              ? length > 200
              : length > 400 && activity.postStatus !== ""
          }
        />
      </Wrrapper>
    </Container>
  );
};

export default Write;
