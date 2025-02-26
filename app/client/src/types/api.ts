import axios from "axios";

type APIMethod = "GET" | "POST" | "PUT" | "DELETE";

interface Options {
  method: APIMethod;
  headers: Record<string, string>;
  body?: unknown;
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

export async function API<T>(
  endpoint: string,
  options: Options
): Promise<ApiResponse<T>> {
  try {
    const res = await axios(import.meta.env.VITE_API_URI + endpoint, {
      ...options,
      headers: {
        ...options.headers,
      },
      signal: options.signal,
    });

    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    const err = error as apiError;
    return {
      success: false,
      error: err?.message || "알 수 없는 오류",
    };
  }
}
