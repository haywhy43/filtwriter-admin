import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../views/Login/Login";
import PrivateRoute from "./ProtectedRoute";
import Articles from "../views/Articles/Articles";
import Dashboard from "../views/Dashboard/Dashboard";
import NewArticle from "../views/CreateArticle/NewArticle";
import EditArticle from "../views/EditArticle/EditArticle";
import PageNotFound from "../views/NotFound/404"
import App from "../views/App/App";
import Nar from "../views/NAr/NAr"
class Routing extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={App} />
                    <Route exact path="/nar" component={Nar} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/articles" component={Articles} />
                    <PrivateRoute  path="/articles/new" component={NewArticle} />
                    <PrivateRoute path="/articles/edit/:id" component={EditArticle} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default Routing;
