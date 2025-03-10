import * as S from "./styles";

import { useState, useEffect } from "react";
import { DefaultButton, Input } from "../../share";
import { getAuthCode, submitSignUp } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

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
  const go = useNavigate();
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>GSMC</S.Title>
      </S.TitleWrapper>
      <S.LoginWrapper>
        <S.Wrapper>
          <S.SecondWrapper>
            <S.InputWrapper>
              <S.InputLabel>이메일</S.InputLabel>
              <S.EmailWrapper>
                <Input
                  placeholder="@gsm.hs.kr"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <DefaultButton
                  label="인증번호"
                  active={authCodeActive}
                  onClick={async () => {
                    const res = await getAuthCode(email);
                    res.success ? setEmail(email) : setEmail("");
                  }}
                />
              </S.EmailWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>인증번호</S.InputLabel>
              <Input
                onChange={(e) => setAuthCode(e.target.value)}
                placeholder="인증번호 입력란"
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>새 비밀번호</S.InputLabel>
              <Input
                placeholder="영문, 숫자 포함 8글자 이상으로 구성"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>새 비밀번호 재입력</S.InputLabel>
              <Input
                placeholder="재입력란"
                type="password"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </S.InputWrapper>
          </S.SecondWrapper>
          <DefaultButton
            label="회원가입"
            fullW={true}
            active={signupActive}
            onClick={async () => {
              const res = await submitSignUp(email, password, Number(authCode));
              res.success ? go("/login") : setEmail("");
            }}
          />
        </S.Wrapper>
      </S.LoginWrapper>
    </S.Container>
  );
};

export default Signup;
