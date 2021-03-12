import { useEffect, useState } from 'react'
import { Component } from 'react'
import './App.css';

// function ListeErstellen(liste) {
//   return <ul>{liste.map((val) => <li>{val}</li>)}</ul>
// }

// const liste = ["ali", "veli", "deli"]

// function listeSenden() {
//   return ListeErstellen(liste)
// }

// export default listeSenden

//#########################################

const liste = ["ali", "veli", "deli"]
function listeSenden() {
  return <div className="App-header"><ul>{liste.map((val) => <li>{val}</li>)}</ul></div>
}
export default listeSenden

//###########################################

// const Test = () => {
//   const liste = ["a", [1, " a ", 3], 3, 4]
//   return (<List liste={liste} />);
// }

// const List = (props) => {
//   const liste = props.liste
//   const listItems = liste.map((val) => <li>{val}</li>)
//   return <ul>{listItems}</ul>
// }
// export default Test;





