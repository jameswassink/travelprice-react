import React, { Component } from 'react';
import logo from './dollar-q.jpg';
import './App.css';
import InputContainer from './Inputs';
import OutputContainer from './Outputs';
const calculator = require('./travelprice/src/controller');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultObject: {
        message: "This is placeholder text.",
      }
    };    
  }

  async handleFormSubmit(input){
    console.log(input);
    const result = await calculator.calculate(input.origin, input.destination);
    console.log(result);
  }


  render() {
    console.log(this.state.resultObject);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt=""/>
          Is it worth paying the toll?
        </header>
        <div className="App-body">
          <div className="container">
            <InputContainer handleFormSubmit={this.handleFormSubmit}></InputContainer>
          </div>
          <div className="container">
            <OutputContainer resultObject={this.state.resultObject}></OutputContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
