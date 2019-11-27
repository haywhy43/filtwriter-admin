import {http} from '../../util/http';

async function getAllArticles(){
    const data = http.get('/articles')
    return data
}


export default getAllArticles;