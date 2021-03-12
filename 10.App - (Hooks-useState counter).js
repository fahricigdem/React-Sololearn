import { useState } from 'react'
import './App.css';

function App() {

  const [number, setNumber] = useState(0)
  
  const increment = () => {
      setNumber(number + 1)
  };

  return (
    <div className="App">

      <p>{number}</p>
      <button onClick={increment}>Increase it!</button>
      
    </div>
  );
}

export default App;
