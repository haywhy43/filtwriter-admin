import React from "react";
import "./ArticleList.css";
import { Link } from "react-router-dom";
import  deleteArticle  from "../../api/Articles/del";

class ArticleList extends React.Component {
    delete = event => {
        console.log(event.target.name);
        deleteArticle(event.target.name)
        .then(data => {this.props.history.push('/articles')})
    };
    render() {
        return (
            <div style={{ width: "100%" }}>
                <table className="table">
                    <thead>
                        <tr className="thead">
                            <th style={{ width: "25%" }}>SN</th>
                            <th style={{ width: "25%" }}>Author</th>
                            <th style={{ width: "25%" }}>Title</th>
                            <th style={{ width: "25%" }}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.articles.map((article, i) => (
                            <tr key={article.id} className="tbody">
                                <td style={{ width: "25%" }}>{i + 1}</td>
                                <td style={{ width: "25%" }}>{article.author}</td>
                                <td style={{ width: "25%" }}>{article.title}</td>
                                <td className="actions">
                                    <div className="action">
                                        <Link className="edit_btn" to={"/articles/edit/" + article.id}>
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="action del">
                                        <button className="del_btn" name={article.id} onClick={this.delete}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ArticleList;
