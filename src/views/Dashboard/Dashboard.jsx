import React from "react";
import "./Dashboard.css";
import article from "../../assets/img/article.svg";
import SideBar from "../../components/SideBar/Sidebar";
import { Link } from "react-router-dom";
import { dashboardData } from "../../api/Dashboard/dashboard";
import Card from "../../components/Card/Card";

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            dashboard_data: ""
        };
    }
    componentDidMount() {
        dashboardData().then(data => {
            this.setState({ dashboard_data: data.data[0] });
            // console.log(this.state.dashboard_data);
            // console.log(data.data[0]);
        });
    }

    zero(value) {
        if (value < 10 && value >= 0) {
            return "0" + value;
        }
    }
    render() {
        return (
            <div className="main">
                <SideBar />
                <div className="content">
                    <div className="dashboard">
                        <div className="dashboard_card_plate">
                            <Card
                                img={article}
                                title="Total Number of Authors"
                                data={this.zero(this.state.dashboard_data.no_of_authors)}
                            ></Card>
                            <Card
                                img={article}
                                title="Total Number of Articles"
                                data={this.zero(this.state.dashboard_data.no_of_saved_articles)}
                            ></Card>
                            <Card
                                img={article}
                                title="Total Number of Published Articles"
                                data={this.zero(this.state.dashboard_data.no_of_published_articles)}
                            ></Card>
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
    }
}

export default Dashboard;
