const userInfo = {
	main: {
		title: "Natnael Kagnaw",
		name: "Natnael",
		email: "natnael.kagnaw01@gmail.com",
		logo: "../logo.png",
		resumeLink:
			"https://docs.google.com/document/d/1QomnFY5EaaZFf1lEcTBozUWlGAlNdeG4Yri_h7MGmoM/edit?usp=sharing",
	},
	analytics: {
		// Google Analytics Tracking ID
		// https://github.com/truethari/reactfolio#-google-analytics
		GOOGLE_TRACKING_ID: "",
	},
	SEO: {
		keywords: ["Natnael", "Natnael Kagnaw", "Natnael Sisay"],
		about: `Innovative and Self-directed Full Stack
		Software Engineer with over 5 years of
		experience, specializing in Java, Spring
		Boot, node for Back-end and React, Angular,
		and other cutting-edge technologies for
		Frontend web development. Proven track
		record of achieving performance
		improvements, implementing efficient
		solutions for challenging problems, and
		contributing to the success of projects
		through dedication and innovation.`,
	},

	socials: [
		{
			name: "LinkedIn",
			link: "https://linkedin.com/in/natnael-kagnaw01",
		},
		{
			name: "GitHub",
			link: "https://github.com/NatnaelSisay",
		},
		{
			name: "StackOverflow",
			link: "https://stackoverflow.com/users/8230968/natnael-sisay",
		},
		{
			icon: "faTwitter",
			name: "Twitter",
			link: "https://twitter.com/natnael_kagnaw",
		},
		{
			name: "Instagram",
			link: null,
		},
	],

	projects: [
		{
			title: "Idea",
			description:
				"Personal project for sparking fresh ideas and unwinding during downtime, using external APIs for frontend development with strong mobile-friendly design and robust error handling",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/NatnaelSisay/bored",
			technologies: ["React"],
		},

		{
			title: "Xillow",
			description:
				"Collaborated to create a property management system. Features include authentication/authorization, Role-based views, search listings, bid on properties and more",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/NatnaelSisay/Mini-property-management-front-end",
			technologies: ["React", "SpringBoot", "MySQL"],
		},

		{
			title: "AskOnce",
			description:
				"Created an online platform that fosters interaction between students and professors, enabling them to ask, answer, and upvote good questions.",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com/NatnaelSisay/AskOnce",
			technologies: ["Angular", "Node", "MongoDB"],
		},
	],

	articles: [
		{
			id: "1",
			title: "How to get started with react",
			date: "31 Jan 2024",
			description:
				"Embarking on the journey with React introduces unparalleled front-end development efficiency and empowers developers to build dynamic user interfaces seamlessly, discover the reasons behind the rising popularity of React in the tech community.",
			keywords: ["react", "react.js", "front-end"],
			link: "https://natnael-sisay.medium.com/how-to-get-started-with-react-0a1bed2b6585",
			platform: "medium",
		},
	],

	experiences: [
		{
			title: "Software Engineer",
			company: "DataLeeq",
			companyLink: "https://www.dataleeq.com/",
			companyShortDetail: "Data consulstancy and Automation",
			date: "2023 - Present",
			desc: "Design Interactive web applications used by clients and monitory the deployment of microservices and products in AWS",
			descBullets: [
				"Successfully implemented CI/CD pipelines using Jenkins and Docker, migrating monolithic applications to microservices architecture with Spring Boot, Kubernetes, and AWS EKS.",
				"Collaborated in leading SDLC for Java/Spring Boot applications, focusing on RESTful API and microservices architecture.",
				"Mentored and fostered collaboration within the development team, emphasizing code reviews and unit tests.",
			],
		},
		{
			title: "Software Engineer",
			company: "Adludio",
			companyLink: "https://www.adludio.com/",
			companyShortDetail: "Xillow is a property management system",
			date: "2021 - 2022",
			desc: "Collaborated to create a property management system. Features include authentication/authorization, Role-based views, search listings, bid on properties and more",
			descBullets: [
				"Designed and developed the front-end using React, Redux, and Material UI",
				"Implemented the back-end using Spring Boot, Spring Security, and MySQL",
				"Utilized Git for version control and Jira for project management",
			],
		},
		{
			title: "Software Developer",
			company: "Zowi Tech",
			companyLink: "https://zowitech.com/",
			companyShortDetail: "Xillow is a property management system",
			date: "2017 - 2021",
			desc: "Collaborated to create a property management system. Features include authentication/authorization, Role-based views, search listings, bid on properties and more",
			descBullets: [
				"Designed and developed the front-end using React, Redux, and Material UI",
				"Implemented the back-end using Spring Boot, Spring Security, and MySQL",
				"Utilized Git for version control and Jira for project management",
			],
		},
	],
};

export default userInfo;
