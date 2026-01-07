export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export async function apiRequest<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(url, options);
  const data = await response.json();
  return {
    data,
    success: response.ok,
    message: data.message
  };
}