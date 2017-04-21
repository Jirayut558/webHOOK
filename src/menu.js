/*
Catagory : Rice
*/ 
import React, { Component } from 'react';
 class Management extends Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
}
render(){
         return(
            <div>
                <h>Signup</h>
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Image url' required ref={(Img) => this.url_input = Img}/>
                <input type='text' placeholder='Name' required ref={(Name) => this.name_input = Name}/>
                <input type='text' placeholder='Price' required ref={(Price) => this.price_input = Price}/>
                <input type='text' placeholder='Catagory' required ref={(Catagory) => this.cat_input = Catagory}/> <br/>
                <input type='text' placeholder='Detail' required ref={(Detail) => this.detail_intput = Detail}/><br/>               
                <input type='submit' value='Submit'/>
            </form>
            </div>
        );
    }

     handleSubmit(e){
        e.preventDefault()
        console.log("Submit");
        var data = {
            Catagory: this.cat_input.value,
            Detail: this.detail_intput.value,
            Img:this.url_input.value,
            Name:this.name_input.value,
            Price:this.price_input.value,
            Store_ID: "",
            Tag:"",
            ID:-1                 
        }
        var json = JSON.stringify(data);      
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('post', 'http://jqhook.azurewebsites.net/menu/addmenu');
        xmlRequest.setRequestHeader('Content-type', 'application/json');
        xmlRequest.responseType = 'json';
        xmlRequest.send(json);
    }
}
 export default Menu;