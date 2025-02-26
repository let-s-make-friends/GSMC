import * as S from "./styles";
import Header from "../../components/header/header";
import Input from "../../components/input/input";
import DefaultButton from "../../components/defaultButton/defaultButton";
import { API } from "../../types/api";
import { useState, useEffect } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [signupActive, setSignupActive] = useState(false);

  // sxxxxx@gsm.hs.kr
  const emailRegEx = /^s\d{5}@gsm\.hs\.kr$/;

  // 영문, 숫자, 특수문자를 포함하여 8글자 이상으로 적어주세요.
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/;

  const submitSignUp = () => {
    API("/api/v1/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  }

  const handleSignup = () => {
    if (!email || !password || !emailRegEx.test(email) || !passwordRegEx.test(password) || password !== passwordCheck) {
      setSignupActive(false);
    } else {
      setSignupActive(true);
    }
  }

  useEffect(() => {
    handleSignup();
  }, [email, password, passwordCheck])


  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.EmailWrapper>
          <Input label="이메일" type="email" onChange={(e) => { handleEmail(e) }} />
          <DefaultButton label="인증번호" active={false} />
        </S.EmailWrapper>
        <Input label="인증번호" />
        <Input label="새 비밀번호" type="password" onChange={(e) => { handlePassword(e) }} />
        <Input label="새 비밀번호 재입력" type="password" onChange={(e) => { handlePasswordCheck(e) }} />
        <DefaultButton label="회원가입" active={signupActive} onClick={submitSignUp} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Signup;
