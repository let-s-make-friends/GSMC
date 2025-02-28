import * as S from "./styles";

import { API } from "../../types/api";
import { useState, useEffect } from "react";
import { Auth, CertificateCode } from "../../types/auth";
import { DefaultButton, Header, Input } from "../../components";

// sxxxxx@gsm.hs.kr
const emailRegEx = /^s\d{5}@gsm\.hs\.kr$/;
// 영문, 숫자, 특수문자를 포함하여 8글자 이상으로 적어주세요.
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authCode, setAuthCode] = useState("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [signupActive, setSignupActive] = useState(false);
  const [authCodeActive, setAuthCodeActive] = useState(false);

  const submitSignUp = async () => {
    if (signupActive == false) return;
    const res = await API<Auth>("/api/v1/auth/sign-up", {
      method: "POST",
      body: {
        email: email,
        password: password,
        authCode: authCode,
      },
    });
    res.success;
  };

  const getAuthCode = async () => {
    if (authCodeActive == false) return;
    console.log(email);
    const res = await API<CertificateCode>("/api/v1/auth/send-mail", {
      method: "POST",
      body: {
        email: email,
      },
    });
    res.success;
  };

  useEffect(() => {
    setSignupActive(
      !(
        !email ||
        !password ||
        !emailRegEx.test(email) ||
        !passwordRegEx.test(password) ||
        password !== passwordCheck
      )
    );
    setAuthCodeActive(!(!email || !emailRegEx.test(email)));
  }, [email, password, passwordCheck]);

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.EmailWrapper>
          <Input
            label="이메일"
            placeholder="@gsm.hs.kr"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <DefaultButton
            label="인증번호"
            active={authCodeActive}
            onClick={getAuthCode}
          />
        </S.EmailWrapper>
        <Input
          label="인증번호"
          onChange={(e) => setAuthCode(e.target.value)}
          placeholder="인증번호 입력란"
        />
        <Input
          label="새 비밀번호"
          placeholder="영문, 숫자 포함 8글자 이상으로 구성"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="새 비밀번호 재입력"
          placeholder="재입력란"
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <DefaultButton
          label="회원가입"
          active={signupActive}
          onClick={submitSignUp}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Signup;
