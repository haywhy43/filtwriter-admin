import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Sidebar.css";
import menuIcon from "../../assets/img/menu.svg";
import cancelIcon from "../../assets/img/cancel.svg";

class SideBar extends React.Component {
    constructor() {
        super();
        this.state = {
            openMenu: false
        };
    }
    logout = () => {
        Cookies.remove("token");
    };

    toggleMenu = () => {
        const sideBar = document.getElementsByClassName("sidebar")[0];
        if (this.state.openMenu) {
            this.setState({ openMenu: false });
            sideBar.style.display = "none";
        } else {
            this.setState({ openMenu: true });
            sideBar.style.display = "flex";
        }
    };
    render() {
        return (
            <div className="main_sidebar">
                <div>
                    <div className="hamburger">
                        {this.state.openMenu ? (
                            <img src={cancelIcon} alt="" width="30px" height="30px" onClick={this.toggleMenu} />
                        ) : (
                            <img src={menuIcon} alt="" width="30px" height="30px" onClick={this.toggleMenu} />
                        )}
                        <div className="header_sideBar push">
                            <p>
                                Filt<span className="secondHalf">Writer</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="header_sideBar">
                        <p>
                            Filt<span className="secondHalf">Writer</span>
                        </p>
                    </div>

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
            </div>
        );
    }
}

export default SideBar;
