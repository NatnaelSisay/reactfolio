import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { article } = props;

	return (
		<>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						<span>|</span> <span>{article.date}</span>
					</div>
					<div className="homepage-article-title">
						{article.title}
					</div>
					<div className="homepage-article-description">
						{article?.description}
					</div>
					<div className="homepage-article-link">
						<a href={article.link} target="_blank" rel="noreferrer">
							Read article on {article.platform}
							<span className="pl-1">
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faUpRightFromSquare}
								/>
							</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Article;
