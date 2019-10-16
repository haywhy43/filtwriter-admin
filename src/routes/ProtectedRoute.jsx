import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../api/Auth/checkToken";


class PrivateRoute extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: true
        };
    }
    componentDidMount() {
        checkToken()
            .then(data => {
                this.setState({redirect: true})
            })
            .catch(error => {
                this.setState({redirect: false})
            });
    }
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props => (this.state.redirect ? <Component {...props} /> : <Redirect to='/login' />)}
            />
        );
    }
}
export default PrivateRoute;
