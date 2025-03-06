import { API } from "../types/api";

export function getToken() {
  const res = () => {
    console.log("토큰재발급중..");
    API("/api/v1/auth/reissue-token", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
      method: "POST",
    });
  };
  return res;
}
