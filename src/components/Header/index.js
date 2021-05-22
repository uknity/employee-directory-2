import React from "react";
import "./style.css";
import headerimg from "./headerimg.jpg";

//function to create header
function Header() {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid" style={{
        height: '400px',
        paddingBottom: '0px',
        color: '#f5426c',
        textAlign: 'center',
        marginBottom: '30px',
        backgroundImage: `url(${headerimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
				<div className="container">
					<h1 className="display-4">Employee Directory</h1>

					<p className="lead">Begin typing an employee name to allow search</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
