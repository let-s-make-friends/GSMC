import { API } from "../types/api";

export async function getUser() {
  const res = await API("/api/v1/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    method: "GET",
  });

  return res.data;
}
