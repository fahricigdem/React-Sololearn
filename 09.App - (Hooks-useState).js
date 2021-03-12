import { useState } from 'react'
import './App.css';

function App() {

  const [name, setName] = useState("Onur")
  const [surName, setSurName] = useState("Cigdem")

  return (
    <div className="App">
      <p>{name} {surName}</p>
    </div>
  );
}

export default App;

