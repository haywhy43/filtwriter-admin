import axios from "axios";
import Cookies from "js-cookie";
import React from "react";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
});



http.interceptors.request.use(
    config => {
        const token = Cookies.get("token");
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

export { http };
