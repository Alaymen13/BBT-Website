import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";


function Form() {
const form = useRef();

	const initailValue = { name: "", user_email: "", message: "" };
	const [formValue, setFormValue] = useState(initailValue);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		// console.log(e.value);
		const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
		console.log(formValue);
	};

	const sendEmail = (e) => {
		e.preventDefault();
setFormErrors(validate(formValue))
setIsSubmit(true)
if (Object.keys(formErrors).length === 0 && isSubmit) {
	emailjs
		.sendForm(
			"service_r83hbii",
			"template_r8wttlq",
			form.current,
			"WnB2RJCsqx2QKcaUK"
		)
		.then(
			(result) => {
				console.log(result.text);
				console.log("message sent");
			},
			(error) => {
				console.log(error.text);
			}
		);
}
	};
	

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValue);
		}
	}, [formErrors])

	const validate = (value) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/i;
		if (!value.name) {
			errors.name = "Name is required";
		}
		if (!value.user_email) {
			errors.user_email = "Email is required";
		} else if (!regex.test(value.user_email)) {
			errors.user_email = "Please Enter a Valid email format!";
		}
		if (!value.message) {
			errors.message = "message is required";
		}
		return errors;
	};

	return (
		<div className="row justify-center pt-5">
			{Object.keys(formErrors).length === 0 && isSubmit ? (
				<div className="alert alert-success" role="alert">
					Message sent Sucessfully
				</div>
			) : (
				<pre>{JSON.stringify(formValue, 2)}</pre>
			)}

			<div className="col-6">
				<form className="" onSubmit={sendEmail} ref={form}>
					<label>Name</label>
					<input
						type="text"
						name="name"
						className="form-control my-2"
						value={formValue.name}
						onChange={handleChange}
					/>
					<p>{formErrors.name}</p>
					<label>Email</label>
					<input
						type="gmail"
						name="user_email"
						className="form-control my-2"
						value={formValue.user_email}
						onChange={handleChange}
					/>
					<p>{formErrors.user_email}</p>
					<label>Message</label>
					<textarea
						name="message"
						cols="4"
						className="form-control my-2"
						value={formValue.message}
						onChange={handleChange}
					/>
					<p>{formErrors.message}</p>
					<input
						type="submit"
						name="Send"
						className="form-control  btn-primary my-4 bg-[#ffc000ff] text-[1.1rem] font-bold text-black hover:bg-[#66023cff]"
					/>
				</form>
			</div>
		</div>
	);
}

export default Form;
