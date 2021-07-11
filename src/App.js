import React from 'react';

import './App.css';
import Employee from './Employee/Employee.details';
import EmployeeProps from './Employee/employee.details.props';



function App() {
  const [appState, setAppState] =  React.useState("Willson");
  const [count,setCount] = React.useState(1);

  const employee = [
    { Id: 1, Name: "Ramakanta", Gender: "Male" },
    { Id: 2, Name: "Jayanti", Gender: "Female" },
    { Id: 3, Name: "Nelson", Gender: "Male" },
    { Id: 4, Name: "Manoja", Gender: "Female" },
  ];

  const btnClick = () =>{
    const name = (count % 2 === 1) ? "Will Tripathy": "Willson";
    setAppState(name);
    setCount(count +1);
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <h4>Hello {appState}</h4>
      <button type="button" onClick={btnClick}>Change Name</button>
      <Employee />
      <EmployeeProps Employee={employee} />
    </div>
  );
}

export default App;
