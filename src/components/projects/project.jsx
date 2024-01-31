import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";
import DynamicIcon from "../dynamic-icon";

const Project = (props) => {
	const { title, description, linkText, link, technologies } = props;

	return (
		<>
			<div className="project">
				<a href={link} target="_blank" rel="noreferrer">
					<div className="project-container">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-technologies">
							{technologies.map((technology, index) => (
								<div className="project-technology" key={index}>
									<DynamicIcon socialMedia={technology} />
								</div>
							))}
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</a>
			</div>
		</>
	);
};

export default Project;
