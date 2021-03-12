import { useState } from 'react'
import { Component } from 'react'
import './App.css';

function Converter() {
  const [num, setNum] = useState(0)
  const [sum, setSum] = useState(0)

  const handleNum = (e) => {
    setNum(e.target.value)
  }

  function handleSum(e) {
    setSum(sum + Number(num))
    e.preventDefault()
  }

  return <form onSubmit={handleSum}>
    <input type="number" onChange={handleNum} />
    <input type="submit" value="Submit" />
    <p>{sum}</p>
  </form>

}


export default Converter