import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      count: 0
    }
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    let { count } = this.state
    return (
      <div className="App">
        <h2>Count: { count }</h2>
        <Button id="incr"
          title = { "+" }
          task = { this.incrementCounter }
          style={{color: 'red', marginTop: 10, padding: 10,  }}
        />
        <Button id="decr"
          title = { "-" }
          task = { this.decrementCounter }
        />

      </div>
    );
  }
}

export default App;
