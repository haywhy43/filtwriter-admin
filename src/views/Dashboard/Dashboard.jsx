import React from "react";
import "./Dashboard.css";
import article from "../../assets/img/article.svg";
import SideBar from "../../components/SideBar/Sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="main">
            <SideBar />
            <div className="content">
                <div className="dashboard">
                    <div className="dashboard_card_plate">
                        <div className="dashboard_card">
                            <div>
                                <img src={article} alt="article" width="70px" height="70px" />
                            </div>
                            <div className="text">
                                <p className="lng">Total Number of Articles: </p>
                                <p className="num">50</p>
                            </div>
                        </div>
                    </div>

                    <div className="new_article_wrapper">
                        <Link to="/articles/new" className="new_article">
                            Write A New Article
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
