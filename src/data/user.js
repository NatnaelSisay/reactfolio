const userInfo = {
	main: {
		title: "Natnael Kagnaw",
		name: "Natnael",
		email: "natnael.kagnaw01@gmail.com",
		logo: "../logo.png",
		resumeLink:
			"https://drive.google.com/drive/folders/1LePT_LUQI1Lxw1fpZqiyIXqJdZ9EV8w8?usp=sharing", // Natnael_Kagnaw_Resume_01_S
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
			company: "DataAnnotation",
			companyLink: "https://www.dataannotation.tech",
			companyShortDetail: "Data consulstancy and Automation",
			date: "2024 - Present",
			desc: "Design Interactive web applications used by clients and monitory the deployment of microservices and products in AWS",
			descBullets: [
				`Led the adoption of a modular React component library integrated with Next.js and Spring Boot APIs, 
					reducing development time for new features by 50% and standardizing code practices acrossmultiple teams.`,
				`Spearheaded the optimization of a React/Next.js frontend and Spring Boot backend, reducing
					page load times by 40% and improving overall system throughput by 30% through strategic
					caching, lazy loading, and efficient API design.`,
				`Maintained high code quality standards, achieving approximately 90% code coverage through
					detailed unit and integration tests, executed under stringent deadlines.`,
			],
		},
		{
			title: "Software Engineer",
			company: "Adludio",
			companyLink: "https://www.adludio.com/",
			companyShortDetail: "Xillow is a property management system",
			date: "2021 - 2023",
			desc: "Collaborated to create a property management system. Features include authentication/authorization, Role-based views, search listings, bid on properties and more",
			descBullets: [
				"Increased request processing capacity by implementing multithreading and parallel processing in Thread pool",
				"Implemented the back-end using Spring Boot, Spring Security, and MySQL",
				"Utilized Git for version control and Jira for project management",
			],
		},
		{
			title: "Software Developer",
			company: "Zowi Tech",
			companyLink: "https://zowitech.com/",
			companyShortDetail: "Xillow is a property management system",
			date: "2019 - 2021",
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
