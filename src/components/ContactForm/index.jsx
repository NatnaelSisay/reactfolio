import React, { useState } from "react";
import "./contactForm.css";

export default function ContactForm() {
	const initlaState = { name: "", email: "", message: "" };
	const [successFull, setSuccessFull] = useState(false);
	const [error, setError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [user, setUser] = useState(initlaState);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);

		// send email to AWS Lambda
		setSubmitted(true);
		setError(false);
		setSuccessFull(true);
	};

	return (
		<div>
			{!submitted && (
				<form
					onSubmit={handleSubmit}
					className="flex flex-vertical custom-gap-1"
				>
					<div className="form-group">
						<label htmlFor="name">
							Name <span className="required">*</span>
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							type="number"
							className="form-control"
							id="phone"
							onChange={handleChange}
						/>
					</div>

					<div className="form-group mt-1">
						<label htmlFor="email">
							Email <span className="required">*</span>
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group mt-1">
						<label htmlFor="subject">
							Subject <span className="required">*</span>
						</label>
						<input
							type="text"
							className="form-control"
							id="subject"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">
							Message <span className="required">*</span>
						</label>
						<textarea
							className="form-control"
							id="message"
							rows="3"
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			)}
			{submitted && successFull && (
				<div className="alert alert-success" role="alert">
					Thank you for contacting me. I will get back to you as soon
				</div>
			)}
			{submitted && error && (
				<div className="alert alert-danger" role="alert">
					Error occured while sending the message. Please try again
				</div>
			)}
		</div>
	);
}
