import React, { Component } from "react";
import "./Login.css";
import Cookies from "js-cookie";
import getAccess from "../../api/Auth/login";
import loader from "../../assets/img/loading.svg";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            loading: false
        };
    }
    componentDidMount(){
        console.log(Cookies.get('token'))
    }
    onNameChange = event => {
        this.setState({ userName: event.target.value });
    };

    onPassChange = event => {
        this.setState({ password: event.target.value });
    };

    login = () => {
        this.setState({loading: true})
        getAccess(this.state.userName, this.state.password).then(data => {
            Cookies.set("token", data.token);
            setTimeout(()=>this.props.history.push("/"), '3000')
            
        });
    };
    render() {
        return (
            <div className="login">
                <div className="login_inner">
                    <div className="head">
                        <p>Sign In</p>
                    </div>
                    <div className="body">
                        <div className="form_group">
                            <label htmlFor="userName" className="input_label">
                                User Name
                            </label>
                            <input type="text" className="input_control" onChange={this.onNameChange} />
                        </div>

                        <div className="form_group">
                            <label htmlFor="password" className="input_label">
                                Password
                            </label>
                            <input type="password" className="input_control" onChange={this.onPassChange} />
                            
                        </div>

                        <div className="button_wrapper">
                            <button className="btn_login" onClick={this.login}>
                                Login  {this.state.loading ? <img src={loader} alt="loader" width="25px" height="25px"/> : ''}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
