import React, { Component } from 'react';
import './css/se.css';

class Order extends React.Component{
     
    constructor(props){
        super(props)
        this.state = {
            data: "",
            dp : ""
        }
    }
       
    componentWillMount() {   
        this.intervalId = setInterval(this.timer.bind(this), 5000);
        

    }  
    timer(){
        var url = 'http://jqhook.azurewebsites.net/order/get/'+window.sessionStorage.getItem('storeid');
        fetch(url)
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({data: json});                      
                    });
        console.log("fetch");
    }
    render(){   
        var j = this.state.data;             
        this.print(j);   
        
     return (
        
    <div>

    <ul>
	    <li className="active" className="left"><a href="default.asp">Home</a></li>
	    <li  className="left"><a onClick={this.linktoaddmenu}>Add menu</a></li>	 
	    <li className="left"><a href="">Summary</a></li>
        <li className="right"><a onClick={this.logout}>Logout</a></li>
        <li className="right"><b>{window.sessionStorage.getItem('username')}</b></li>  
	</ul>
	
	
	<h1>Order</h1>

                <table>
                    <tr>
                        <th>Customer</th>
                        <th>Menu</th>
                        <th></th>	
                    </tr>

     {this.state.order.map((order,index) => (                                 
                    <tr>                    
                        <td>{order.customer_name}</td>
                        <td>{order.menu}</td>	
                        <td><button className="done" onClick={(order_id)=>this.Donebutton(order.id) }>DONE</button>  </td>                
                    </tr>                               
    ))} 
    </table>  
                
    </div> 
    );  
}
logout(){
    window.sessionStorage.clear();
    window.location.href = window.location.origin;
}
linktoaddmenu(){
    window.location.href = window.location.origin + '/menu';
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
               // window.location.reload();
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
        console.log("order");   
        order.push({         
            id:tmp.ID,
            customer_name : tmp.Name,
            menu : listmenu  
        });  
        }   
    }
    this.state = {order};

    //console.log(this.state.dp);  

}

}
export default Order;