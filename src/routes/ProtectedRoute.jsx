import React from "react";
import { Route } from "react-router-dom";
import { checkToken } from "../api/Auth/checkToken";

const Auth = {
    async authenticate() {
        var auth;
        checkToken()
            .then(data => {
                if (data.status === 200) {
                    this.authenticate.auth = true;
                    return true;
                } else {
                    this.authenticate.auth = false;
                }
            })
            .catch(error => {
                this.authenticate.auth = false;
                return false;
            });

        return await auth;
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.authenticate() ? (
                <Component {...props} />
            ) : (
                this.props.history.push('/login')
            )
        }
    />
);
export default PrivateRoute;
