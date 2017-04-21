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
        var j = this.state.data;
        console.log(j);
        this.print(j);
        
     return (
    <div>
     <h>Order</h>
     {this.state.order.map((order,index) => (
         <div>
                <label key={index}>{order.customer_name} : {order.menu}</label>   
                <button className="done" onClick={(order_id)=>this.Donebutton(order.id) }>DONE</button>              
          </div>       
    ))}          
    </div>
    );  
}
handleSubmit(e) {
        e.preventDefault()
        console.log(e);
}
 Donebutton(order_id){
    var request = new XMLHttpRequest();
        request.open('GET', 'http://jqhook.azurewebsites.net/order/'+order_id+'/done', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.responseType = 'json';
        
        request.send(); 
         request.addEventListener('load', () => {
             if (request.status == 200){
                 var res = request.response;
                console.log(res);
                window.location.reload();
        }    
         });
        

        
        
        console.log('http://jqhook.azurewebsites.net/order/'+order_id+'/done');  
   
  }
 
    print(json){
    const order =[];
    for(var prop in json) 
    {
        var tmp = JSON.parse(JSON.stringify(json[prop]||{}));
        var count =0;
        if(tmp.Status==0){
        const listmenu = tmp.MenuList.map((menu) => 
          <li key={count++}>{menu}</li>
        )   
        order.push({         
            id:tmp.ID,
            customer_name : tmp.Name,
            menu : listmenu  
        });  
        }   
    } 
    this.state = {order};
    console.log(this.state.order);  
    
}

}
export default Order;