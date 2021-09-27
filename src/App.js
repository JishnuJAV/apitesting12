import { useEffect, useState } from 'react';
import './App.css';


export const DataFetching =()=>{
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => setResults(json)).catch(err =>{
      console.log(err)
    })
  
  },[])
  return(
    <div>
      <ul>
        {
          results.map(result => <li key={result.id}>{result.id}<br/>{result.name}<br/>{result.email}</li>)
        }
      </ul>
    </div>
  );
}


const App=()=> {
  return (
    <div className="App">
     <h1>api testing..!!</h1>
    <DataFetching />
    </div>
  );
}

export default App;
