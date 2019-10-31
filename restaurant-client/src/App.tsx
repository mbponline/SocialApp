import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';


class App extends Component{
  //Initiates values
  state = {
    values: []
  }
//First method called
  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
          //updates state and causes a render which gets data from our api
      this.setState({
        values: response.data
      })
    })
  }
  render(){
  return (
    <div>
        <Header as='h2' icon>
    <Icon name='users' />
    <Header.Content>
      Restaurants
    </Header.Content>
  </Header>
  <List>
  {this.state.values.map((value: any) => (
          <List.Item key={value.id}>{value.name}</List.Item>
        ))}
  </List>
    </div>
  ); 
}
}

export default App;
