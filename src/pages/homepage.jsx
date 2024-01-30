import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { ErrorBoundary } from "react-error-boundary";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import user from "../data/user";

import "./styles/homepage.css";
import ResumeLink from "../components/resume";
import DynamicIcon from "../components/dynamic-icon";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<>
			<Helmet>
				<title>{user.main.title}</title>
				<meta name="description" content={user.SEO.about} />
				<meta name="keywords" content={user.SEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									Full Stack Software Engineer
								</div>

								<div className="subtitle homepage-subtitle">
									Innovative and Self-directed Full Stack
									Software Engineer with over 5 years of
									experience, specializing in Java, Spring
									Boot, node for Back-end and React, Angular,
									and other cutting-edge technologies for
									Frontend web development. Proven track
									record of achieving performance
									improvements, implementing efficient
									solutions for challenging problems, and
									contributing to the success of projects
									through dedication and innovation.
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage-optimized.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<ResumeLink />

						<div className="homepage-socials">
							{user.socials.map((social, index) => {
								return (
									social.link && (
										<a
											href={social.link}
											target="_blank"
											rel="noreferrer"
											key={index}
										>
											<DynamicIcon
												socialMedia={social.name}
											/>
										</a>
									)
								);
							})}
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<ErrorBoundary
								fallback={<p>error rendering articles</p>}
							>
								<div className="homepage-articles">
									{user.articles?.map((article, index) => {
										return (
											<div
												className="homepage-article"
												key={index + 1}
											>
												<Article article={article} />
											</div>
										);
									})}
								</div>
							</ErrorBoundary>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
