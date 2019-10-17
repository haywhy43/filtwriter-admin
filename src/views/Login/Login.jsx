import React, { Component } from "react";
import "./Login.css";
import Cookies from "js-cookie";
import getAccess from "../../api/Auth/login";
import loader from "../../assets/img/loading.svg";
// import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            loading: false,
            loadingText: false
        };
    }
    onNameChange = event => {
        this.setState({ userName: event.target.value });
    };

    onPassChange = event => {
        this.setState({ password: event.target.value });
    };

    login = event => {
        this.setState({ loading: true });
        getAccess(this.state.userName, this.state.password)
            .then(data => {
                Cookies.set("token", data.token);
                setTimeout(() => this.props.history.push("/"), "3000");
                this.setState({ loadingText: true });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
        event.preventDefault();
    };
    render() {
        return (
            <div className="login_main">
                <div className="header">
                    <p>Filt<span className="secondHalf">Writer</span></p>
                </div>
                <form className="login" onSubmit={this.login}>
                    <div className="login_inner">
                        <div className="head">
                            <p>Sign In</p>
                        </div>
                        <div className="body">
                            <div className="form_group">
                                <label htmlFor="userName" className="input_label">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Enter Username"
                                    className="input_control"
                                    onChange={this.onNameChange}
                                />
                            </div>

                            <div className="form_group">
                                <label htmlFor="password" className="input_label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="input_control"
                                    onChange={this.onPassChange}
                                />
                            </div>

                            <div className="button_wrapper">
                                <button className="btn_login" type="submit">
                                    Login
                                    {this.state.loading ? (
                                        <img src={loader} alt="loader" width="23px" height="23px" className="loader" />
                                    ) : (
                                        ""
                                    )}
                                </button>
                            </div>

                            {this.state.loadingText ? (
                                <p className="loginSuccess">Login Succesful... Redirecting Now... </p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
