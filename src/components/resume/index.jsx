import React from "react";

import user from "../../data/user";

import "./resume.css";
export default function ResumeLink() {
	return (
		<button className="cta">
			<a href={user.main.resumeLink} target="_blank" rel="noreferrer">
				My Resume
			</a>
		</button>
	);
}
