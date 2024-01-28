import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<Card icon={faBriefcase} title="Work" body={<></>}>
				<div className="works-body">
					{INFO.experiences.map((experience, index) => {
						return (
							<div className="work">
								<div className="work-image">
									<FontAwesomeIcon icon={faBriefcase} />
								</div>
								<div className="work-title">
									{experience.company}
								</div>
								<div className="work-subtitle">
									{experience.title}
								</div>
								<div className="work-duration">
									{experience.date}
								</div>
							</div>
						);
					})}
				</div>
			</Card>
		</div>
	);
};

export default Works;
