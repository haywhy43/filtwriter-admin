import React, { Component } from "react";
import getAllArticles from "../../api/Articles/all";
import ArticleList from "../ArticleList/index";
import plus from "../../assets/img/plus.svg";
import "./Articles.css";

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles: ""
        };
    }
    componentDidMount() {
        getAllArticles().then(data => {
            this.setState({ articles: data.data });
        });
    }
    render() {
        return (
            <div className="article">
                {!this.state.articles ? (
                    <ArticleList />
                ) : (
                        <button className="create">Create New Article <img src={plus} alt="plus sign" width="25px" height="25px" /></button>
                        
                )}
            </div>
        );
    }
}

export default Articles;
