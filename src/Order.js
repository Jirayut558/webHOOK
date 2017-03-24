import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://jqhook.azurewebsites.net/order/get/Macroker`)
      .then(res => {
        var posts = res.data;//map(obj => obj.data);    
        console.log(posts);
        //this.setState({ posts });
      });
      return(
          <h1></h1>
      );
  }

  render() {
    return (
      <div>
        <h1>{this.props.subreddit}</h1>
        <ul>
            
        </ul>
      </div>
    );
  }
}

export default Fetch;