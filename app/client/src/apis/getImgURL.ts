import { API } from "../types/api";

export async function getImgURL(file: string) {
  const formData = new FormData();
  formData.append("image", file);

  const req = {
    formData,
    Value: file,
    Key: "1image",
  };

  const res = await API<Object>("/api/v1/image", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "POST",
    body: req,
  });

  return res.data as string;
}
