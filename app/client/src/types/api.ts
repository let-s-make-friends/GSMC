import axios from "axios";
import { getToken } from "../apis/getToken";

type APIMethod = "GET" | "POST" | "PUT" | "DELETE";

interface Options<T> {
  method: APIMethod;
  headers?: Record<string, string>;
  body?: T;
  signal?: AbortSignal;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface apiError {
  message: string;
  status: number;
}

export async function API<Req, Res = Req>(
  endpoint: string,
  options: Options<Req>
): Promise<ApiResponse<Res>> {
  try {
    const res = await axios(import.meta.env.VITE_API_URL + endpoint, {
      method: options.method,
      headers: {
        ...options.headers,
      },
      data: options.body,
      signal: options.signal,
    });

    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    const err = error as apiError;

    if (err.status == 401 && localStorage.getItem("refreshToken")) {
      getToken();
    }

    return {
      success: false,
      error: err?.message || "알 수 없는 오류",
    };
  }
}
