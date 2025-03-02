import { API } from "../types/api";
import { Auth, CertificateCode } from "../types/auth";

export const submitSignUp = async (
  email: string,
  password: string,
  authCode: number
) => {
  const res = await API<Auth>("/api/v1/auth/sign-up", {
    method: "POST",
    body: {
      email: email,
      password: password,
      code: authCode,
    },
  });
  return res;
};

export const getAuthCode = async (email: string) => {
  const res = await API<CertificateCode>("/api/v1/auth/send-mail", {
    method: "POST",
    body: {
      email: email,
    },
  });
  return res;
};
