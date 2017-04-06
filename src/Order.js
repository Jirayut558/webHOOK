import React, { Component } from 'react';
class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: ""
        }
    }
    componentDidMount() {
        fetch("http://jqhook.azurewebsites.net/order/get/1")
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({data: json});                      
                    });
    };
    render(){
        console.log(this.state.data);
        var j = this.state.data;
        this.print(j);
     return (
    <div>
     
     {this.state.order.map((order,index) => (
          <div>           
            <h4 key={index}>{order.customer_name} : {order.menu}</h4>
            <button  class="label label-danger" onClick={(order_id)=>this.Donebutton(order.id) }>DONE</button> 
          </div>
    ))}          
    </div>
    );  
    }
 Donebutton(order_id){
    var request = new XMLHttpRequest();
        request.open('GET', 'http://jqhook.azurewebsites.net/order/'+order_id+'/done', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send();    
        console.log("Done");      
  }
    print(json){
    console.log(Object.keys(json).length);
    const order =[];
    for(var prop in json) 
    {
        var tmp = JSON.parse(JSON.stringify(json[prop]||{}));
        var count =0;
        if(tmp.Type!='Done'){
        const listmenu = tmp.MenuList.map((menu) => 
          <li key={count++}>{menu}</li>
        )   
        order.push({         
            id:tmp.ID,
            customer_name : tmp.Name,
            menu : listmenu  
        });  }   
    } 
    this.state = {order};
    console.log(this.state.order);    
    }
}
export default Order;