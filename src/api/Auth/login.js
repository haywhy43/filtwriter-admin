import http from "../../util/http";

async function getAccess(username, key) {
    const data = await http.post("/login", { name: username, password: key });
    return data.data;
}

export default  getAccess ;
