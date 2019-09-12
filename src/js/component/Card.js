import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325"
					alt=""
				/>
				<div className="card-body">
					<h4 className="card-title text-center">Card title</h4>
					<p className="card-text text-center">{props.content}</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href="#" className="btn btn-primary">
						{props.tucanBtn || "Click Here"}
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	content: PropTypes.string,
	tucanBtn: PropTypes.string
};
