import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link,browserHistory } from 'react-router-dom';
import './css/_main.css';
import Login from './Login';
import Order from './Order';
import Signup from './signup';
import Management from './management';
class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact = {true} path={"/"} component = {Login}/>
                    <Route path={'/order'} component={Order}/>
                     <Route path={'/signup'} component={Signup}/>
                    <Route path='/management' component={Management}/>>              
                </Switch>    
            </Router>

        );
    }

    
}


ReactDOM.render((  
    <App/> 
), document.getElementById('root'))
