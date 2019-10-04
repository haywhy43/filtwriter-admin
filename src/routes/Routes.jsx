import React, {Component} from './node_modules/react';
import {BrowserRouter as Router, Switch, Route} from './node_modules/react-router-dom';
import Login from '../components/Login/Login';
import App from '../components/App/App';

class Routing extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}

export default Routing;