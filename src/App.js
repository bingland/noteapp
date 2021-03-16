import { useEffect } from 'react'
import './App.css';

function App() {

  useEffect(() => {
    console.log('uh hi?')
    fetch('/api', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return (
    <div className="App">
      <p>If you're seeing this, good job :)</p>
    </div>
  );
}

export default App;
