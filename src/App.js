import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  const [countries, setCountires] = useState([]);
  useEffect( () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountires(data));
  }, [])

  return (
    <div>
      <h3>{countries.length}</h3>
      {
        countries.map( country => <Countries country = {country}></Countries>)
      }
      
    </div>
  );
}

export default App;
