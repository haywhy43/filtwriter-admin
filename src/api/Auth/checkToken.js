import { http } from "../../util/http";
async function checkToken() {
    const data = await http.get("/");
    return data;
}

export { checkToken };
