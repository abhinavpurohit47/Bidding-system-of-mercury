import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from './Welcome';
import './App.css';


class App extends Component {
  state = {details:[],bidHistory:[]}
  componentDidMount() {
    this.getDetails();          
  }

  getDetails = () => {
    fetch('/api/details')
      .then(res => res.json())
      .then(details => this.setState({details}));
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className = "row">          
            <Welcome details = {this.state.details} />         
        </div>
      </div>     
    );
  }
}

export default App;
