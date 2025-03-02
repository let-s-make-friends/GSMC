import { Activity } from "../types/activity";
import { API } from "../types/api";

export async function submitActivity(data: Activity) {
  const res = await API<Activity>("/api/v1/activity", {
    method: "POST",
    body: data,
  });
  return res;
}
