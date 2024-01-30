import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { ErrorBoundary } from "react-error-boundary";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import user from "../data/user";

import "./styles/articles.css";

function fallbackRender({ error, resetErrorBoundary }) {
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

	return (
		<>
			<ErrorBoundary fallbackRender={fallbackRender}>
				<Helmet>
					<title>{user.main.title}</title>
					<meta name="description" content={user.SEO.about} />
					<meta
						name="keywords"
						content={user.SEO.keywords.join(", ")}
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
								I'm passionate about pushing the boundaries of
								what's possible and inspiring the next
								generation of innovators.
							</div>

							<div className="subtitle articles-subtitle">
								Chronological collection of my long-form
								thoughts on programming, leadership, product
								design, and more.
							</div>

							<div className="articles-container">
								<div className="articles-wrapper">
									{user.articles.map((article) => (
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
