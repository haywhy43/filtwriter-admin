import React from "react";
import "./ArticleList.css";
import { Link } from "react-router-dom";
import deleteArticle from "../../api/Articles/del";
import { withRouter } from "react-router-dom";
import check from "../../assets/img/success.svg";
import unCheck from "../../assets/img/cancel-mark.svg";

class ArticleList extends React.Component {
    delete = event => {
        deleteArticle(event.target.name).then(data => {
            window.location.reload();
        });
    };
    render() {
        return (
            <div style={{ width: "100%" }} className="stuff">
                
                <table className="table">
                    <thead>
                        <tr className="thead something">
                            <th>SN</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Published</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.articles.map((article, i) => (
                            <tr key={article.id} className="tbody">
                                <td>{i + 1}</td>
                                <td>{article.author}</td>
                                <td>{article.title}</td>
                                <td>{article.is_published ? <img src={check} alt="confirmed Icon"/> : <img src={unCheck} alt="unconfirmed Icon"/>}</td>
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

export default withRouter(ArticleList);
