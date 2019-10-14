import React, { Component } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Articles from "../../components/Articles/Articles";
import "./App.css";
import Cookies from "js-cookie";

class App extends Component {
    constructor() {
        super();
        this.state = {
            show: "Dashboard"
        };
    }

    load = event => {
        this.setState({ show: event.target.innerText });
    };

    logout = () => {
        Cookies.remove("token");
        this.props.history.push('/login')
    };
    render() {
        return (
            <div className="App">
                <div className="sidebar">
                    <p className="logo">FiltWriter</p>

                    <ul className="sidebar_content">
                        <li>
                            <button className="sidebar_btn" onClick={this.load}>
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button className="sidebar_btn" onClick={this.load}>
                                Articles
                            </button>
                        </li>
                    </ul>

                    <button className="logout" onClick={this.logout}>
                        Logout
                    </button>
                </div>

                <div className="content">{this.state.show === "Dashboard" ? <Dashboard /> : <Articles />}</div>
            </div>
        );
    }
}

export default App;
