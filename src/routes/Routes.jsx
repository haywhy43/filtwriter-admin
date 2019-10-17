import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../views/Login/Login';
import PrivateRoute from './ProtectedRoute'
import Articles from '../views/Articles/Articles'
import Dashboard from '../views/Dashboard/Dashboard';

class Routing extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute  path="/articles" component={Articles} />
                </Switch>
            </Router>
        )
    }
}

export default Routing;