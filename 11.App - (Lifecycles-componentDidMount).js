import { Component } from 'react'
import './App.css';

class Counter extends Component {
  state = { number: 0 }

  increment = () => {
    this.setState({ number: this.state.number + 1 })
  }

  componentDidMount() {
    this.setState({ number: 42 })
  }

  render() {
    return <div>
      <p>counter:{this.state.number}</p>
      <button onClick={this.increment}>up</button>
    </div>;
  }
}

export default Counter