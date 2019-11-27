import {http} from "../../util/http";

async function dashboardData() {
    const data = await http.get(process.env.REACT_APP_API_URL);
    return data;
}

export  { dashboardData };
