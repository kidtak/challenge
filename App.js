import React, { Component } from 'react';
import './App.css';


class App extends Component {

     

    constructor() {
    super();
    this.state = {};
    this.getRandomName = this.getRandomName.bind(this);
  }
     getRandomName() {
    return colour[Math.floor(Math.random() * colour.length)];}
        
render() {
    console.log(this.props.data.colour)
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Anonymous Name Generator </h1>
        </header>
        <p className="App-intro">
          Your anonymous name is:
        </p>
        

        
      </div>
    );
  }
}

export default App;
