import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    // constructor(){
    //     super();

    // }
    componentDidMount(){
    }
    render() {
        return (
            <div className="login">
                <div className="login_inner">
                    <div className="head">
                        <p>Sign In</p>
                    </div>
                    <div className="body">
                        <div className="form_group">
                            <label htmlFor="userName" className="input_label">User Name</label>
                            <input type="text" className="input_control" />
                        </div>

                        <div className="form_group">
                            <label htmlFor="password" className="input_label">Password</label>
                            <input type="text" className="input_control" />
                        </div>

                        <div className="button_wrapper">
                            <button className="btn_login">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
