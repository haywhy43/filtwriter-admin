const axios = require("axios");

const http = axios.create({
    baseURL: process.env.API_URL
});

const token = "npm install axios";

http.interceptors.request.use(
    config => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
