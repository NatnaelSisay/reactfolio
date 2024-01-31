import React from "react";

import user from "../../data/user";

import "./styles/socials.css";
import DynamicIcon from "../dynamic-icon";

const Socials = () => {
	return (
		<div className="socials">
			{user.socials.map((social, index) => {
				return (
					social.link && (
						<div className="social" key={index}>
							<a
								href={social.link}
								target="_blank"
								rel="noreferrer"
								className="social-link flex"
							>
								<div className="social-icon">
									<DynamicIcon socialMedia={social.name} />
								</div>
								<div className="social-text">
									<span> {`Follow on ${social.name}`}</span>
								</div>
							</a>
						</div>
					)
				);
			})}
		</div>
	);
};

export default Socials;
