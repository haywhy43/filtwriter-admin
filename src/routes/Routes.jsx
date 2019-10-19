import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../views/Login/Login";
import PrivateRoute from "./ProtectedRoute";
import Articles from "../views/Articles/Articles";
import Dashboard from "../views/Dashboard/Dashboard";
import NewArticle from "../views/CreateArticle/NewArticle";
import EditArticle from "../views/EditArticle/EditArticle";
class Routing extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/articles" component={Articles} />
                    <PrivateRoute  path="/articles/new" component={NewArticle} />
                    <PrivateRoute path="/articles/edit/:id" component={EditArticle} />
                </Switch>
            </Router>
        );
    }
}

export default Routing;
