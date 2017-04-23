import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link,browserHistory } from 'react-router-dom';
import './css/_main.css';
import Login from './Login';
import Order from './Order';
import Signup from './signup';
import Management from './management';
import Menu from './menu';
class App extends Component{
    
    render(){/*
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure!");

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);*/
        return(
            <Router>
                <Switch>
                    <Route exact = {true} path={"/"} component = {Login}/>
                    <Route path={'/order'} component={Order}/>
                    <Route path={'/signup'} component={Signup}/>
                    <Route path={'/management'} component={Management}/>
                    <Route path={'/menu'} component={Menu}/>                
                </Switch>    
            </Router>

        );
    }

    
}


ReactDOM.render((  
    <App/> 
), document.getElementById('root'))
