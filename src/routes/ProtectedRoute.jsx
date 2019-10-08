import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../api/Auth/checkToken";

const Auth = {
    async authenticate() {
        var auth = false;
        await checkToken()
            .then(data => {
                if (data.status === 200) {
                    this.authenticate.auth = true;
                }
            })
            .catch(error => {
                this.authenticate.auth = false;
            });

        return auth;
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.authenticate() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login"
                    }}
                />
            )
        }
    />
);
export default PrivateRoute;
