import http from '../../util/http';

export async function checkToken(){
    const data = http.get('/')
    return data
}

// export default { checkToken }