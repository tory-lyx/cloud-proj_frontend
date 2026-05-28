//export const API_BASE = "http://localhost:5000/api"; http://shop-backend:8080/api

//export const API_BASE = "http://host.docker.internal:5000/api";
//export const API_BASE = "http://localhost:5000/api";

//export const API_BASE = "https://my-shop-backend-kgje.onrender.com/"
//export const API_BASE = "https://my-shop-backend-kgje.onrender.com/swagger/index.html"

export const API_BASE = "https://my-shop-backend-kgje.onrender.com/api"

export const getHeaders = (token?: string) => ({
  "Content-Type": "application/json",
  ...(token && { Authorization: "Bearer " + token }),
});

export async function handleResponse(res: Response) {
  if (!res.ok) {
    let message = "Server error";

    try {
      const data = await res.json();
      message = data.message || message;
    } catch {}

    throw new Error(message);
  }

  return res.json();
}