import http from '../../util/http';

async function deleteArticle(id){
    const data = await http.delete('/article/delete',{data: {id: id} })
    return data;
}

export default deleteArticle;