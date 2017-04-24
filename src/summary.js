/*http://jqhook.azurewebsites.net/store/:storename/getsummary*/
import React, { Component } from 'react';

class Summary extends Component{
componentWillMount
  constructor(props){
        super(props)
        this.state = {
            data: ""
        }
    }
    componentDidMount(){
       // var url = 'http://jqhook.azurewebsites.net/store/'+window.sessionStorage.getItem('storename')+'/getsummary';
         var url = 'http://jqhook.azurewebsites.net/store/Sweet stories/getsummary';
                fetch(url)
                    .then( (response) => {
                        return response.json() })   
                            .then( (json) => {
                                this.setState({data: json});                      
                            });
                console.log("fetch");
    }
    render(){
        var order = this.state.data.OrderReport;
        var queue = this.state.data.QueueReport;
        order = JSON.parse(JSON.stringify(order||{}));
        queue = JSON.parse(JSON.stringify(queue||{}));

        console.log(order.Income);
        console.log(queue.Queue_num);
        return(
            <h1>Summary</h1>
        );
    }
}
export default Summary;