import axios from "axios";
import Cookies from "js-cookie";


async function uploadArticle(type, formData) {
    const data = await axios.post(process.env.REACT_APP_API_URL + `/article/${type}`, formData, {
        headers: {
            Authorization: "Bearer " + Cookies.get("token"),
            "Content-Type": "multipart/form-data"
        }
    });

    return data;
}


async function uploadImage(formData) {
    const data = await axios.post(process.env.REACT_APP_API_URL + `/image/upload`, formData, {
        headers: {
            Authorization: "Bearer " + Cookies.get("token")
        }
    });

    return data;
}

async function editArticle(formData) {
    const data = await axios.post(process.env.REACT_APP_API_URL + "/article/edit", formData, {
        headers: {
            Authorization: "Bearer " + Cookies.get("token"),
            "Content-Type": "multipart/form-data"
        }
    });

    return data;
}

export {uploadArticle, editArticle, uploadImage};
