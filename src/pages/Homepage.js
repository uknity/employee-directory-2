
import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


class Homepage extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        const sortedEmployees = res.data.results.sort(function(a, b){
          if(a.name.first < b.name.first) { return -1; }
          if(a.name.first > b.name.first) { return 1; }
          return 0;
          
          
      })
      this.setState({ employees: sortedEmployees, results: sortedEmployees })})  
        
      .catch((err) => console.log(err));
       
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    const filteredEmployees = this.state.results.filter(employee => {
      return employee.name.first.toLowerCase().indexOf(event.target.value) !== -1
    })
    this.setState({employees: filteredEmployees})
  };

  render() {
    return (
      <div>
        <div className="container.fluid">
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <SearchResults results={this.state.employees} />
        </div>
      </div>
    );
  }
}

export default Homepage;

