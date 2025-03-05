import React from "react";
import { getImgURL } from "../../apis/getImgURL";
import { Container, Input, Label, Text } from "./styles";
import Plus from "../../assets/svg/plus.svg";

interface ImgButtonProps {
  onChange: (value: string) => void;
  value: string;
}

const ImgButton = ({ onChange, value }: ImgButtonProps) => {
  return (
    <Container>
      <label>이미지</label>
      <Label htmlFor="file">
        <Text>
          <img src={Plus} alt="" />
        </Text>
      </Label>
      <Input
        id="file"
        accept="image/png, image/jpeg"
        value={value}
        type="file"
        onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
          const res = await getImgURL(e.target.value);
          res && onChange(res);
        }}
      />
    </Container>
  );
};

export default ImgButton;
