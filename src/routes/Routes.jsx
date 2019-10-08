import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../components/Login/Login';
import App from '../App/App';
import PrivateRoute from './ProtectedRoute'

class Routing extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <PrivateRoute exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}

export default Routing;