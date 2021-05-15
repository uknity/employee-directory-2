import React from "react";
import "./style.css";

//function to create header
function Header() {
  return (
    
    <header>
        <div className="jumbotron jumbotron-fluid header">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                
                <p className="lead">Begin typing an employee name to allow search</p>
                
            </div>
        </div>        
      </header>

  );
}

export default Header;
