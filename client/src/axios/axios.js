import axios from "axios";

const api = axios.create({
 // baseURL: import.meta.env.VITE_API_URL,
   baseURL: "http://localhost:5000/api/v1/",
});

export default api;
