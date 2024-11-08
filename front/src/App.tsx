import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState<any[]>([]);
  const [numb, setNumb] = React.useState<number>(0);

  useEffect(() => {
    fetch('http://localhost:3001/articles')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Cypress Ci Test</p>
        <h4>Data from Db</h4>
        <div>
          {data.map((d) => (
            <div key={d.id} style={{ backgroundColor: "white", borderRadius: "5px", color: "black", padding: "5px" }}>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          ))}
        </div>

        <h4>Click testing</h4>
        <p>Count : {numb}</p>
        <button onClick={() => setNumb(numb + 1)}>Increment</button>
      </header>
    </div>
  );
}


export default App;
