import React, { Component } from 'react';
import Fetch from 'react-fetch';
import './css/Order.css'
class Home extends Component {
    render() {
      var url ="http://jqhook.azurewebsites.net/order/get/1"; 
      console.log(url);
     return (  
      <Fetch url={url}>        
        <TestComponent/>     
      </Fetch>
    ); 
  }     
}
class TestComponent extends React.Component{
  render(){   
    const json = this.props;
    console.log(json);
    this.print(json);
    return (
    <div>
      <h4><small>CMU Dorm5 Chicken Rice  Sep 28, 2017, 11:00 AM</small></h4>
     {this.state.order.map((order,index) => (
          <div>           
            <h4 key={index}>{order.id} : {order.menu}</h4>
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
            menu : listmenu  
        });  } 
    } 
      
    this.state = {order};
    console.log(this.state.order); 
  }
}
export default Home;
