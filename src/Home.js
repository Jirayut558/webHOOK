import React, { Component } from 'react';
import Fetch from 'react-fetch';


class Home extends Component {
    render() {
    
        

     return (
       
      <Fetch url="http://jqhook.azurewebsites.net/order/get/Macroker">        
        <TestComponent/>
      </Fetch>
    ); 
  }   
  
}
class TestComponent extends React.Component{

  render(){
    var json = this.props;
    var input =JSON.stringify(json[0]||null);
    console.log(json[0]);
    var input2 = JSON.parse(input);
    return <div>{input}
    </div>

  }
}





export default Home;
