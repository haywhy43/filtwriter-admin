import axios from "axios";
import Cookies from "js-cookie";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: { "Content-Type": "application/json" }
});

const token = Cookies.get("token");

http.interceptors.request.use(
    config => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default http;
