import React from "react";
import EmployeeDetailView from '../views/employee.details.view';

const Employee = () => {
  const employees = [
    { Id: 1, Name: "Ramakanta", Gender: "Male" },
    { Id: 2, Name: "Jayanti", Gender: "Female" },
    { Id: 3, Name: "Nelson", Gender: "Male" },
    { Id: 4, Name: "Manoja", Gender: "Female" },
  ];
  const [employeeState] = React.useState(employees);

  return (
    <EmployeeDetailView employeeDetail={employeeState} />
  );
};

export default Employee;