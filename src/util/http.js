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
        switch (error.response.status) {
            case 401:
                if (token) return refreshToken();
                else this.props.history.push("/login");
                break;
            case 403:
                return Promise.reject(error);
            default:
                break;
        }
        return Promise.reject(error);
    }
);

const saveToken = res => {
    Cookies.set("token", res.config.headers.Authorization);
};

const refreshToken = () => {
    return axios
        .get(process.env.VUE_APP_API_URL, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            saveToken(response);
        })
        .catch(error => {
            destroyToken();

            return Promise.reject(error);
        });
};

const destroyToken = () => {
    Cookies.set("token", null);
    this.props.history.push("/login");
};

export default http;
