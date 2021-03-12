import { useEffect, useState } from 'react'
import { Component } from 'react'
import './App.css';

function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    alert("counter is " + counter)
  });

  return <div class="App-header">
    <p>counter:{counter}</p>
    <button onClick={increment}>up</button>
  </div>;

}

export default Counter