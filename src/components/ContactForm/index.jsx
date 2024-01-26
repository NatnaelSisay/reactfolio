import React, { useState } from "react";

export default function ContactForm() {
	const initlaState = { name: "", email: "", message: "" };
	const [user, setUser] = useState(initlaState);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		// send requeset to AWS Lmabda and process the email
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-vertical custom-gap-1"
			>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group mt-1">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						className="form-control"
						id="message"
						rows="3"
						onChange={handleChange}
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
