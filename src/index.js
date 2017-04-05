import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './css/index.css';
import Home from './Home';
import Login from './Login';
class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact = {true} path={"/"} component = {Home}/>
                    <Route path={'/order'} component={Login}/>
                </Switch>    
            </Router>

        );
    }

    
}


ReactDOM.render((
    
    <App/>
    
), document.getElementById('root'))
