import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

function ContactUs() {
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
		setFormErrors(validate(formValue));
		setIsSubmit(true);
		if (!Object.keys(formErrors).length === 0 && isSubmit) {
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
	}, [formErrors]);

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
    		<Element className="section p-5" name="ContactUs">
		<div className="row justify-center pt-5">
			{Object.keys(formErrors).length === 0 && isSubmit ? (
				<div className="alert alert-success" role="alert">
					Thank You! Your message has been sent.
				</div>
			) : (
				console.log(".")
			)}

			<div className="col-6">
				<div className="text-center p-4">
					<div className="text-[2.5rem] p-2">Company</div>
				</div>
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
    </Element>
	);
}

export default ContactUs;

// sult) => {
// 					console.log(result.text);
// 					console.log("message sent");
// 				},
// 				(error) => {
// 					console.log(error.text);
// 				}
// 			);
// 	};

// 	return (

//     	<div className="row justify-content-center">
// 			<div className=" bg-[#] col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 ">
// 				<h1 className="text-[2.2rem] text-center my-4 mb-4">
// 					Contact Us
// 				</h1>
// 				<form className="row" ref={form} onSubmit={sendEmail}>
// 					<label>Name</label>
// 					<input
// 						type="text"
// 						name="name"
// 						className="form-control my-2"
// 					/>

// 					<label>Email</label>
// 					<input
// 						type="gmail"
// 						name="user_email"
// 						className="form-control my-2"
// 					/>

// 					<label>Message</label>
// 					<textarea
// 						name="message"
// 						cols="4"
// 						className="form-control my-2"
// 					/>
// 					<input
// 						type="submit"
// 						name="Send"
// 						className="form-control  btn-primary my-4 bg-[#ffc000ff] text-[1.1rem] font-bold text-black hover:bg-[#66023cff]"
// 					/>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default ContactUs;
