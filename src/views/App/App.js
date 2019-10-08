import React, { Component } from "react";
import Dashboard from '../../components/Dashboard/Dashboard'
import Articles from '../../components/Articles/Articles'
import "./App.css";

class App extends Component {
    constructor(){
        super()
        this.state={
            show:"Dashboard"
        }
    }
    render() {
        return (
            <div className="App">
                <div className="sidebar">
                    <p className="logo">FiltWriter</p>

                    <ul className="sidebar_content">
                        <li><button className="sidebar_btn">Dashboard</button></li>
                        <li><button className="sidebar_btn">Articles</button></li>
                    </ul>

                    <button className="logout">Logout</button>
                </div>

                <div className="content">
                    {this.state.show === "Dashboard" ? <Dashboard /> : <Articles />}
                </div>
            </div>
        );
    }
}

export default App;
