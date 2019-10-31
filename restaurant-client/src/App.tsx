import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{
  //Initiates values
  state = {
    values: []
  }
//First method called
  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      console.log(response);
          //updates state and causes a render which gets data from our api
      this.setState({
        values: response.data
      })
    })
  }
  render(){
  return (
    <div className="App">
     <header className='App-header'>
      <img src={logo} className='App-logo' />
      <ul>
        {this.state.values.map((value: any) => (
          <li>{value.name}</li>
        ))}
      </ul>
     </header>
    </div>
  ); 
}
}

export default App;
