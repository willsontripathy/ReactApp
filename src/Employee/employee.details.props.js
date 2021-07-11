import React from 'react';
import EmployeeDetailView from '../views/employee.details.view';


const EmployeeProps = (props) => {

    console.log(props);
    const employees = props.Employee;

    return (
        <EmployeeDetailView  employeeDetail={employees} />
    )

}

export default EmployeeProps;