import React from "react";

import "./styles/card.css";

const Card = (props) => {
	const { icon, title, body, children } = props;
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-title">{title}</div>
				<div className="card-body">
					<div className="card-text">{body}</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Card;
