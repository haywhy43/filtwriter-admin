import React, { Component } from "react";
import getAllArticles from "../../api/Articles/all";
import ArticleList from "../../components/ArticleList/index";
import plus from "../../assets/img/plus.svg";
import "./Articles.css";
import SideBar from '../../components/SideBar/Sidebar'

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
            console.log(this.state.articles);
        });
    }
    render() {
        return (
            <div className="d-flex">
                <SideBar />
                <div className="article">
                    {this.state.articles.length ? (
                        <ArticleList />
                    ) : (
                        <button className="create">
                            Create New Article <img src={plus} alt="plus sign" width="25px" height="25px" />
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default Articles;
