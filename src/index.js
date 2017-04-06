import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './css/index.css';
import Home from './Home';
import Login from './Login';
import Order from './Order';
class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact = {true} path={"/"} component = {Login}/>
                    <Route path={'/order'} component={Home}/>
                    <Route path={'/get'} component={Order}/>
                </Switch>    
            </Router>

        );
    }

    
}


ReactDOM.render((
    
    <App/>
    
), document.getElementById('root'))
