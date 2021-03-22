import { useEffect } from 'react'
import './App.scss';

function App() {

  useEffect(() => {
    //fetch('/api/note?folder=60524c1394586ed2fbc602db&title=My Cool Note&body=my text&id=6052b762926cb13d0e896c86', {
    fetch('/api/note', {
      method: 'GET',
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
