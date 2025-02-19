import * as S from "./styles";
import Header from "../../components/header/header";
import InputButton from "../../components/inputButton/inputButton";
import DefaultButton from "../../components/defaultButton/defaultButton";


const Login = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.EmailWrapper>
          <InputButton label="이메일" />
          <DefaultButton label="인증번호" location="" active={false} />
        </S.EmailWrapper>
        <InputButton label="인증번호" />
        <InputButton label="새 비밀번호" />
        <InputButton label="새 비밀번호 재입력" />
        <DefaultButton label="회원가입" location="signUp" active={false} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
