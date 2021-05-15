import React from "react";

//function to take in parameters as props to create search
function SearchForm(props) {
  console.log(props);
  return (
    <form className="form-horizontal searchBar mx-3">
      <div className="form-group">
      <label htmlFor="searchedName">Search by Name:</label>
          <input
           value={props.search}
           onChange={props.handleInputChange}
           name="employee"
           list="employees"
           className="form-control mr-sm-2"
           type="text"
           placeholder="Search"
           id="employee"
           />
       </div>     
     </form>
      );
    }
    
    export default SearchForm;
    