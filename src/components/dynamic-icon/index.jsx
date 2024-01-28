import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faLinkedin,
	faGithub,
	faStackOverflow,
	faInstagram,
	faWordpress,
	//
	faReact,
	faNode,
	faAngular,
} from "@fortawesome/free-brands-svg-icons"; // Import the icons you need

import "./dynamic-icon.css";

function iconMapper(iconFor) {
	const mapper = {
		linkedin: faLinkedin,
		twitter: faTwitter,
		github: faGithub,
		stackoverflow: faStackOverflow,
		instagram: faInstagram,
		default: faWordpress,
		//
		react: faReact,
		node: faNode,
		angular: faAngular,
		// mongodb: faMongoDB,
	};

	return mapper[iconFor.toLowerCase()];
}

export default function DynamicIcon({ socialMedia }) {
	const icon = iconMapper(socialMedia);
	return (
		<>
			{icon ? (
				<FontAwesomeIcon
					icon={iconMapper(socialMedia)}
					className="homepage-social-icon"
				/>
			) : (
				socialMedia
			)}
		</>
	);
}
