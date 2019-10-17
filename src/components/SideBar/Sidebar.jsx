import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Sidebar.css";

class SideBar extends React.Component {
    logout = () => {
        Cookies.remove("token");
    };
    render() {
        return (
            <div className="sidebar">
                <p className="logo">FiltWriter</p>

                <ul className="sidebar_content">
                    <li>
                        <Link className="sidebar_btn" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar_btn" to="/articles">
                            Articles
                        </Link>
                    </li>
                </ul>

                <Link to="/login" className="logout" onClick={this.logout}>
                    Logout
                </Link>
            </div>
        );
    }
}

export default SideBar;
