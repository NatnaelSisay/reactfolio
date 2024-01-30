import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ErrorBoundary } from "react-error-boundary";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import user from "../data/user";

import "./styles/about.css";
import ResumeLink from "../components/resume";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<ErrorBoundary fallbackRender={<p>error about/</p>}>
				<Helmet>
					<title>{user.main.title}</title>
					<meta name="description" content={user.SEO.about} />
					<meta
						name="keywords"
						content={user.SEO.keywords.join(", ")}
					/>
				</Helmet>

				<div className="page-content">
					<NavBar active="about" />

					<div className="content-wrapper">
						<div className="about-logo-container">
							<div className="about-logo">
								<Logo width={46} />
							</div>
						</div>

						<div className="about-container">
							<div className="about-main">
								<div className="about-right-side">
									<div className="title about-title">
										I’m Natnael, The Code Ninja.
									</div>

									<div className="subtitle about-subtitle">
										I'm an imaginative and self-motivated
										Full Stack Software Engineer with over 5
										years of experience. I specialize in
										crafting Back-end solutions using Java,
										Spring Boot, and node, and I'm skilled
										in Frontend web development with React,
										Angular, and other modern technologies.
										Over the years, I've consistently
										delivered better performance, solved
										tough problems efficiently, and played a
										key role in project success through hard
										work and creative thinking. My focus is
										always on finding innovative solutions
										and making a positive impact in software
										development.
									</div>
									<ResumeLink />
								</div>

								<div className="about-left-side">
									<div className="about-image-container">
										<div className="about-image-wrapper">
											<img
												src="about.jpg"
												alt="about"
												className="about-image"
											/>
										</div>
									</div>

									<div className="about-socials">
										<Socials />
									</div>
								</div>
							</div>
							<div className="about-socials-mobile">
								<Socials />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</ErrorBoundary>
		</>
	);
};

export default About;
