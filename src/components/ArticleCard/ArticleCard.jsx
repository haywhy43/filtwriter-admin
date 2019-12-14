import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";
import deleteArticle from "../../api/Articles/del";

class ArticleCard extends React.Component {
    delete = (event) => {
        deleteArticle(event.target.name).then((data) => {
            window.location.reload();
        });
    };

    render() {
        return (
            <div>
                {this.props.articles.map((elem) => (
                    <div className="card">
                        <figure>
                            <img
                                src={process.env.REACT_APP_CLOUDINARY_URL + elem.profile_id}
                                alt=""
                                className="card-img"
                            />
                        </figure>

                        <div className="card-body">
                            <div className="little-info">
                                <p>Author: {elem.author}</p>
                                <p>{elem.is_published ? "Published" : "Not Published"}</p>
                            </div>
                            <h3 className="card-title">{elem.title}</h3>
                            <div className="actions">
                                <div className="action">
                                    <Link className="edit_btn" to={"/articles/edit/" + elem.id}>
                                        Edit
                                    </Link>
                                </div>
                                <div className="action del">
                                    <button className="del_btn" name={elem.id} onClick={this.delete}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ArticleCard;
