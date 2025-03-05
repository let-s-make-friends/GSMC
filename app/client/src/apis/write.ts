import { Activity, Book } from "../types/write";
import { API } from "../types/api";

export async function submitActivity(data: Activity) {
  const res = await API<Activity>("/api/v1/activity", {
    method: "POST",
    body: data,
  });
  return res;
}

export async function submitBook(data: Book) {
  const res = await API<Book>("/api/v1/book", {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return res;
}
