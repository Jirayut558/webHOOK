/*Address:
 ID: -1
 -Img: 
 -Location lat long
 -Name: 
 Open: 
 Owner_ID
 -Rate: 0
 -Thumnail:

 Catagory

 time
 http://jqhook.azurewebsites.net/store/add*/

 import React, { Component } from 'react';
import { Link } from 'react-router';
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
                <input type='text' placeholder='Name' required ref={(name) => this.name_input = name}/> <br/>
                 <input type='text' placeholder='Image url' required ref={(img) => this.img_intput = img}/><br/>               
                <input type='text' placeholder='Small image' required ref={(simg) => this.simg_input = simg}/>
                <input type='text' placeholder='Open Time' required ref={(opentime) => this.open_input = opentime}/>
                <input type='text' placeholder='Close Time' required ref={(closetime) => this.close_input = closetime}/>
                <input type='text' placeholder='Address' required ref={(address) => this.addr_input = address}/>
                <input type='text' placeholder='Telephone number' required ref={(tel) => this.tel_input = tel}/>
   
                <input type='text' placeholder='Catagory' required ref={(Catagory) => this.cat_input = Catagory}/><br/>
             
                <text>Location</text>
                <input type='text' placeholder='Latitude' required ref={(lat) => this.lat_input = lat}/>
                <input type='text' placeholder='Longitude' required ref={(long) => this.long_input = long}/><br/>
   
                <input type='submit' value='Submit'/>
            </form>
            </div>
        );
    }
    handleSubmit(e){
        e.preventDefault()

        var data = {
            Name: this.name_input.value,
            Img: this.img_intput.value,
            Thumnail:this.simg_input.value,
            Address:this.addr_input.value,
            Owner_ID:window.sessionStorage.getItem('userid'),
            Open:this.open_input.value,
            Close:this.close_input.value,
            Tel:this.tel_input.value,
            Rate:0,
            Catagory: this.cat_input.value,
            Location:{lat:this.lat_input.value,long:this.long_input.value}                      
        }
        
        var json = JSON.stringify(data);
       

        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('post','http://jqhook.azurewebsites.net/store/add');
        xmlRequest.setRequestHeader('Content-type', 'application/json');
        xmlRequest.responseType = 'json';
        xmlRequest.send(json);
        xmlRequest.addEventListener('load', () => {
            if(xmlRequest.status==200)
            {
                alert("Add Successed");
            }else
            {
                alert("Error : Cannot Submit");
            }
        })
    }
 }
 export default Management;