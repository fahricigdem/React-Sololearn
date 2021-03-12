import { useState } from 'react'
import { Component } from 'react'
import './App.css';

function Converter() {
  const [km, setkm] = useState(0)

  const handleKm = (e) => {
    setConvertion(e.target.value)
  }

  function convert(km) {
    return (km / 1.609).toFixed(2)
  }

  return <div class="App-header">
    <input type="text" onChange={handleKm} />
    <p>{km} km = {convert(km)} mile</p>
  </div>;

}

export default Converter