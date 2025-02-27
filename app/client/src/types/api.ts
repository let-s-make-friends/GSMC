import axios from "axios";

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

export async function API<T>(
  endpoint: string,
  options: Options<T>
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
  } catch (error: any) {
    return {
      success: false,
      error: error?.response?.data?.message || error.message || "Unknown error",
    };
  }
}
