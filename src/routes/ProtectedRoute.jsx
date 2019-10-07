import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../api/Auth/checkToken";

const Auth = {
    isAuthenticated : false,

    authenticate() {
        checkToken().then(data => {
            if (data.status === 200) {
                this.isAuthenticated = true
            }
        });
    },

    async getAuth(){
        await this.authenticate()
        return this.isAuthenticated
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.getAuth() ? (
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
