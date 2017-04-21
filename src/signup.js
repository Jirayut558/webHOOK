import React, { Component } from 'react';

class Signup extends Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        
        return(
            <div>
                <h>Signup</h>
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <input type='text' placeholder='firstname' required ref={(fname) => this.fname_input = fname}/>
                <input type='text' placeholder='lastname' required ref={(lname) => this.lname_input = lname}/>               
                <input type='text' placeholder='email' required ref={(email) => this.email_input = email}/>
                <input type='password' placeholder='password' required ref={(pass) => this.pass_input = pass}/>
                <input type='password' placeholder='confirm-password' required ref={(conpass) => this.conpass_input = conpass}/>
                <input type='submit' value='Submit'/>
            </form>
            </div>
        );
    }
handleSubmit(e) {
        e.preventDefault()
        console.log("Submit");
        var tmp =  {confirmpassword: this.conpass_input.value};
        var data = {
            Password: this.pass_input.value,
            Name: this.fname_input.value,
            Lastname: this.lname_input.value,          
            Email:this.email_input.value,
            Type:1
        }       
        var params = "Password="+data.Password+"&Name="+data.Name
                        +"&Lastname="+data.Lastname+"&Email="+data.Email+"&Type="+data.Type;
      
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('post', 'http://jqhook.azurewebsites.net/signup/');
        xmlRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xmlRequest.responseType = 'json'                     
                if (tmp.confirmpassword == data.Password&&this.validation(data.Email)) {
                    xmlRequest.send(params); 
                    var user = xmlRequest.response
                console.log(xmlRequest.response)
                                 
                }
                else{                
                    if(tmp.confirmpassword != data.Password&&this.validation(data.Email)){
                        alert("Password do not Match");
                    }
                    else if(!this.validation(data.Email)&&tmp.confirmpassword == data.Password){
                         alert("Email not valid");
                    }
                    else{
                        alert("Password do not Match");
                        alert("Email not valid");
                    }
                }              
    }
  validation(e){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;      
        return re.test(e);
  }
}

export default Signup;