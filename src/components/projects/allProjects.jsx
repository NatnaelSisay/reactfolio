import React from "react";

import Project from "./project";

import user from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<>
			<h3 className="section-title">Projects</h3>
			<div className="all-projects-container">
				{user.projects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							technologies={project.technologies}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default AllProjects;
