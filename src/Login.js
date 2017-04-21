import React from 'react';
import Fetch from 'react-fetch';
import {BrowserRouter as Router, Route, Switch, Link,browserHistory } from 'react-router-dom';
import Order from './Order';
import management from './management';
import './css/_form-page.css';
class Login extends React.Component{

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    render(){
        return(

<div >

        <div>
            <div className='form-page__form-wrapper'>
                <div className='form-page__form-header'>
                <center><h2 className='form-page__form-heading'>Login</h2></center>
                </div>       
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div class="container">
                    <label><b>Username</b></label>
                    <input type='text' placeholder='Enter username' required ref={(user) => this.userInput = user}/>
                    <label><b>Password</b></label>
                    <input type='password' placeholder='Enter password' required ref={(pass) => this.passInput = pass}/>
                    <center><button className="login" type="submit">Login</button>
                    <button2 onClick={this.handleClick}>Signup</button2></center>
                    </div>
                    </form>             
                </div>
         </div>
 </div>   
        );
    }
    handleClick(e){
        e.preventDefault();
        window.location.replace('/signup');
        console.log("Signup click!");
    }
    handleSubmit(e) {
        e.preventDefault()
        var data = {
            username: this.userInput.value,
            password: this.passInput.value
        }
        console.log(data)
        var params = "username="+this.userInput.value+"&password="+this.passInput.value;
        console.log(params);
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('post', 'http://jqhook.azurewebsites.net/login/manager');
        xmlRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xmlRequest.responseType = 'json'
        xmlRequest.addEventListener('load', () => {
            if (xmlRequest.status == 200) {
                var user = xmlRequest.response;
                 var count = Object.keys(user).length;
                console.log(xmlRequest.response)  
                console.log(count);           
                if (user.Email != null) {                
                        if(count==5){
                            window.sessionStorage.setItem('userid',user.ID);
                            window.location.href = window.location.origin + '/management';
                            console.log(user.ID);                                                
                        }
                        else{
                            console.log(user);  
                          //  window.location.href = window.location.origin + '/order';                        
                        }                           
                }
                else {
                    console.log("User is wrong")
                }
                
            }
            else {
                console.log("Error Cannot Login")
            }
        })
        xmlRequest.send(params)
    }
}
export default Login;