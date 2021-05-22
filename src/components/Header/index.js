import React from "react";
import "./style.css";
import headerImg from "./headerImg.jpg";

//function to create header
function Header() {
	return (
		<header>
			<div
				className="jumbotron jumbotron-fluid headerStyle"
				style={{
					backgroundImage: `url(${headerImg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: "400px",
            
				}}
			>
				<div className="container headerContainer">
					<h1 className="display-4">Employee Directory</h1>

					<p className="lead">Begin typing an employee name to allow search</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
