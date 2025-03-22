import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});


http.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


http.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error en la API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default http;
