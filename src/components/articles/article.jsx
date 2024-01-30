import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ErrorBoundary } from "react-error-boundary";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link, platform } = props.article;

	return (
		<>
			<ErrorBoundary fallback={<p>error rendering article</p>}>
				<div className="article">
					<div className="article-left-side">
						<div className="article-date">{date}</div>
					</div>

					<a href={link} target="_blank" rel="noreferrer">
						<div className="article-right-side">
							<div className="article-title">{title}</div>
							<div className="article-description">
								{description}
							</div>
							<div className="article-link">
								Read Article on {platform}
								<span className="pl-1">
									<FontAwesomeIcon
										style={{ fontSize: "10px" }}
										icon={faUpRightFromSquare}
									/>
								</span>
							</div>
						</div>
					</a>
				</div>
			</ErrorBoundary>
		</>
	);
};

export default Article;
