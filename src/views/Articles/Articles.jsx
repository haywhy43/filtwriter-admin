import React, { Component } from "react";
import getAllArticles from "../../api/Articles/all";
import ArticleList from "../../components/ArticleList/ArticleList";
import plus from "../../assets/img/plus.svg";
import "./Articles.css";
import SideBar from "../../components/SideBar/Sidebar";
import { Link } from "react-router-dom";

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles: ""
        };
    }
    componentDidMount() {
        getAllArticles().then((data) => {
            this.setState({ articles: data.data });
        });
    }
    render() {
        return (
            <div className="d-flex">
                <SideBar />

                <div className="article">
                    <div className="createWrapper">
                        <Link to="/articles/new" className="create_btn">
                            Create New Article
                        </Link>
                    </div>
                    {this.state.articles.length ? (
                        <ArticleList articles={this.state.articles} />
                    ) : (
                        <Link className="create" to="/articles/new">
                            Create New Article <img src={plus} alt="plus sign" width="25px" height="25px" />
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default Articles;
