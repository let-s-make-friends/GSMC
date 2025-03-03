import { API } from "../../../app/client/src/types/api";

export async function getImgURL(file: string) {
  API<string>("/api/v1/image", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "POST",
    body: file,
  });
}
