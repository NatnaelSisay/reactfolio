import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { ErrorBoundary } from "react-error-boundary";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import { articles } from "../data/articles";

import "./styles/articles.css";

function fallbackRender({ error, resetErrorBoundary }) {
	// Call resetErrorBoundary() to reset the error boundary and retry the render.

	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: "red" }}>{error.message}</pre>
		</div>
	);
}

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<>
			<ErrorBoundary fallbackRender={fallbackRender}>
				<Helmet>
					<title>{`Articles | ${INFO.main.title}`}</title>
					<meta name="description" content={currentSEO.description} />
					<meta
						name="keywords"
						content={currentSEO.keywords.join(", ")}
					/>
				</Helmet>

				<div className="page-content">
					<NavBar active="articles" />
					<div className="content-wrapper">
						<div className="articles-logo-container">
							<div className="articles-logo">
								<Logo width={46} />
							</div>
						</div>

						<div className="articles-main-container">
							<div className="title articles-title">
								{INFO.articles.title}
							</div>

							<div className="subtitle articles-subtitle">
								{INFO.articles.description}
							</div>

							<div className="articles-container">
								<div className="articles-wrapper">
									{articles.map((article, index) => (
										<div
											className="articles-article"
											key={article.id}
										>
											<Article article={article} />
										</div>
									))}
								</div>
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

export default Articles;
