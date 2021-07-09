import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [appState, setAppState] =  React.useState("Willson");
  const [count,setCount] = React.useState(1);

  const btnClick = () =>{
    const name = (count % 2 == 1) ? "Will Tripathy": "Willson";
    setAppState(name);
    setCount(count +1);
  }
  
  return (
    <div className="App">
      <h2>{count}</h2>
      <h4>Hello {appState}</h4>
      <button type="button" onClick={btnClick}>Change Name</button>
    </div>
  );
}

export default App;
