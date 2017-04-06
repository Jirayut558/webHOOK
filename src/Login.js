import React from 'react';
import Fetch from 'react-fetch';
import { BrowserRouter } from 'react-router-dom';

class Login extends React.Component{

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <form className="login-form" onSubmit={this.handleSubmit}>
                <input type='text' placeholder='username' required ref={(user) => this.userInput = user}/>
                <input type='password' placeholder='password' required ref={(pass) => this.passInput = pass}/>
                <input type='submit' value='Login'/>
            </form>
        );
    }

    handleSubmit(e) {
        e.preventDefault()
        var data = {
            username: this.userInput.value,
            password: this.passInput.value
        }
        console.log(data)
        var params = "username="+this.userInput.value+"&password="+this.passInput.value;
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('post', 'http://jqhook.azurewebsites.net/login/');
        xmlRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xmlRequest.responseType = 'json'
        xmlRequest.addEventListener('load', () => {
            if (xmlRequest.status == 200) {
                var user = xmlRequest.response
                console.log(xmlRequest.response)
                
                if (user.Email != null) {
                    window.location.href = window.location.origin + '/order'
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