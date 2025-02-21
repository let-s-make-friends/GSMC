import * as S from "./styles";
import Header from "../../components/header/header";
import Input from "../../components/input/input";
import DefaultButton from "../../components/defaultButton/defaultButton";


const Signup = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.EmailWrapper>
          <Input label="이메일" />
          <DefaultButton label="인증번호" location="" active={false} />
        </S.EmailWrapper>
        <Input label="인증번호" />
        <Input label="새 비밀번호" />
        <Input label="새 비밀번호 재입력" />
        <DefaultButton label="회원가입" location="signUp" active={false} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Signup;
