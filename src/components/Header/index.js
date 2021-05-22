import React from "react";
import "./style.css";
// import headerimg from "./headerimg.jpg";

//function to create header
function Header() {
	return (
		<header>
			<div className="jumbotron jumbotron-fluid headerStyle">
				<div className="container">
					<h1 className="display-4">Employee Directory</h1>

					<p className="lead">Begin typing an employee name to allow search</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
