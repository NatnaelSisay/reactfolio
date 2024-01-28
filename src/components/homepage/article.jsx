import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";
import Markdown from "react-markdown";
const markdown = "# Hi, *Pluto*!";

const Article = (props) => {
	const { title, description, date, link, article } = props;

	return (
		<React.Fragment>
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
						{article.content.map((content, index) => {
							return (
								<div key={index}>
									{/* {content} */}
									{/* <Markdown> {markdown}</Markdown> */}
								</div>
							);
						})}
						<Link to={"/articles/" + article.id}>
							Read article
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
