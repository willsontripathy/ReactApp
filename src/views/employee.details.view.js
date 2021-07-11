const EmployeeDetailView = ({employeeDetail}) => {
    return (
        <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {employeeDetail.map((e) => {
            return (
              <tr key={e.Id}>
                <td>{e.Id}</td>
                <td>{e.Name}</td>
                <td>{e.Gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}

export default EmployeeDetailView;