import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Optional: log API errors in dev
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (import.meta.env.DEV) console.error("API error:", err?.response?.data || err.message);
    return Promise.reject(err);
  }
);
