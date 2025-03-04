import { API } from "../types/api";

export async function getImgURL(file: any) {
  const res = await API<string>("/api/v1/image", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "POST",
    body: file,
  });
  return res.data;
}
