import * as S from "./styles";

import { useState, useEffect } from "react";
import { DefaultButton, Header, Input } from "../../components";
import { submitLogin } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

// sxxxxx@gsm.hs.kr
const emailRegEx = /^s\d{5}@gsm\.hs\.kr$/;
// 영문, 숫자, 특수문자를 포함하여 8글자 이상으로 적어주세요.
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinActive, setSigninActive] = useState(false);

  useEffect(() => {
    setSigninActive(
      !(
        !email ||
        !password ||
        !emailRegEx.test(email) ||
        !passwordRegEx.test(password)
      )
    );
  }, [email, password]);
  const go = useNavigate();
  return (
    <S.Container>
      <Header />
      <S.LoginWrapper>
        <S.Wrapper>
          <S.SecondWrapper>
            <S.InputWrapper>
              <S.InputLabel>이메일</S.InputLabel>
              <Input
                placeholder="@gsm.hs.kr"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.InputLabel>비밀번호</S.InputLabel>
              <Input
                placeholder="영문, 숫자 포함 8글자 이상으로 구성"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.InputWrapper>

          </S.SecondWrapper>
          <DefaultButton
            label="로그인"
            fullW={true}
            active={signinActive}
            onClick={async () => {
              const res = await submitLogin(email, password);

              if (res.success && res.data) {
                const { accessToken, refreshToken } = res?.data?.data?.tokenDto

                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);


                go("/main");
              }
            }}
          />
        </S.Wrapper>
      </S.LoginWrapper>
    </S.Container>
  );
};

export default Login;
