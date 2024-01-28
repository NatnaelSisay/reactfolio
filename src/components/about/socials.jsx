import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";
import DynamicIcon from "../dynamic-icon";

const Socials = () => {
	return (
		<div className="socials">
			{INFO.socials.map((social, index) => {
				return (
					social.link && (
						<div className="social">
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
