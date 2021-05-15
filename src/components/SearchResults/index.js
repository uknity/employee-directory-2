import React from "react";
import "./style.css";

//function to take in employees array as props and format in a table
function SearchResults(props) {
  console.log(props);
  
  return (
    <div>
      <div className="container.fluid searchResults">
        <div className="row tableRow">
          <table className="table table-striped empTable">
            <thead>
              <tr>
              <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                
              </tr>
            </thead>
            <tbody>
              {props.results.map(employee => (
                
                <tr className="employeeRow">
                  <td><img src={employee.picture.thumbnail} alt="employee"/></td>
                  <td>{employee.name.first} {employee.name.last}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.dob.date}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
