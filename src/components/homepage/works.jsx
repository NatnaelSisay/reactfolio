import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
//
import Card from "../common/card";
//
import "./styles/works.css";
//
import user from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<Card icon={faBriefcase} title="Work" body={<></>}>
				<div className="works-body">
					{user.experiences.map((experience, index) => {
						return (
							<a
								href={experience.companyLink}
								target="_blank"
								rel="noreferrer"
								key={index}
							>
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
							</a>
						);
					})}
				</div>
			</Card>
		</div>
	);
};

export default Works;
