import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.js";
import { Navbar } from "./Navbar.js";
import { Jumbo } from "./Jumbo.js";
import { Footer } from "./Footer.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Navbar />
				<Jumbo />
				<div className="container">
					<div className="row">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
