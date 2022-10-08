// import React, { useState, useEffect, useRef } from "react";

// import emailjs from "@emailjs/browser";
// function Contact() {
// 	const [formvalue, setFormvalue] = useState({
// 		name: "",
// 		email: "",
// 		message: "",
// 	});
// 	const [formerror, setFormerror] = useState({});
// 	const [issubmit, setSubmit] = useState(false);

// 	const handlevalidation = (e) => {
// 		const { name, value } = e.target;
// 		setFormvalue({ ...formvalue, [name]: value });
// 	};
// 	const handlesubmit = (e) => {
// 		e.preventDefault();
// 	};

// 	const validationform = (value) => {
// 		const errors = {};
// 		const emailPattern =
// 			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 		if (!value.name) {
// 			errors.name = "Please Enter Name";
// 		}

// 		if (!value.email) {
// 			errors.email = "Please Enter Email";
// 		} else if (!emailPattern.test(value.email)) {
// 			errors.email = "Enter Valid Email";
// 		}
// 		if (!value.message) {
// 			errors.message = "Please Enter message";
// 		}

// 		return errors;
// 	};

// 	useEffect(() => {
// 		if (Object.keys(formerror).length === 0 && issubmit) {
// 			console.log(formvalue);
// 		}
// 	}, [formerror, formvalue, issubmit]);

// 	// const form = useRef();

// 	const sendEmail = (e) => {
// 		e.preventDefault();
// 		setFormerror(validationform(formvalue));
// 		setSubmit(true);
// 		console.log(formvalue);
// 		emailjs
// 			.sendForm(
// 				"service_r83hbii",
// 				"template_r8wttlq",
// 				setFormerror(validationform(formvalue)),
// 				"WnB2RJCsqx2QKcaUK"
// 			)
// 			.then(
// 				(result) => {
// 					console.log(result.text);
// 					console.log("message sent");
// 				},
// 				(error) => {
// 					console.log(error.text);
// 				}
// 			);
// 	};
// 	return (
// 		<div className="container">
// 			<div className="row mb-5">
// 				<div className="col-sm-6 text-success">
// 					<h3 className="fw-bold">
// 						{" "}
// 						React js Contact form validation
// 					</h3>
// 				</div>

// 				<form onSubmit={sendEmail}>
// 					<div className="row mb-4">
// 						<label className="col-sm-2 col-form-label">
// 							Name
// 							<span className="astriccolor">*</span>
// 						</label>
// 						<div className="col-sm-5">
// 							<input
// 								type="text"
// 								className="form-control"
// 								name="name"
// 								value={formvalue.name}
// 								onChange={handlevalidation}
// 							/>
// 							<span className="text-danger">
// 								{formerror.name}{" "}
// 							</span>
// 						</div>
// 					</div>

// 					<div className="row mb-4">
// 						<label className="col-sm-2 col-form-label">
// 							Email
// 							<span className="astriccolor">*</span>
// 						</label>
// 						<div className="col-sm-5">
// 							<input
// 								type="text"
// 								className="form-control"
// 								name="email"
// 								value={formvalue.email}
// 								onChange={handlevalidation}
// 							/>
// 							<span className="text-danger">
// 								{formerror.email}{" "}
// 							</span>
// 						</div>
// 					</div>

// 					<div className="row mb-4">
// 						<label className="col-sm-2 col-form-label">
// 							message
// 							<span className="astriccolor">*</span>
// 						</label>
// 						<div className="col-sm-5">
// 							<textarea
// 								className="form-control"
// 								name="message"
// 								value={formvalue.message}
// 								onChange={handlevalidation}
// 							/>
// 							<span className="text-danger">
// 								{formerror.message}{" "}
// 							</span>
// 						</div>
// 					</div>

// 					<div className="row mb-4">
// 						<label className="col-sm-2 col-form-label"></label>
// 						<div className="col-sm-10">
// 							<button
// 								type="submit"
// 								className="btn btn-success"
// 								name="button"
// 							>
// 								Submit
// 							</button>
// 						</div>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default Contact;




// import React, { useState } from "react";
// import {
// 	MDBValidation,
// 	MDBValidationItem,
// 	MDBInput,
//   MDBInputGroup,
// 	MDBBtn,
// 	MDBCheckbox,
// } from "mdb-react-ui-kit";

// export default function App() {
// 	const [formValue, setFormValue] = useState({
// 		name: "",
// 		lname: "",
// 		email: "",

// 	});

// 	const onChange = (e: any) => {
// 		setFormValue({ ...formValue, [e.target.name]: e.target.value });
// 	};

// 	return (
// 		<MDBValidation className="row g-3">
// 			<MDBValidationItem className="col-md-4">
// 				<MDBInput
// 					value={formValue.name}
// 					name="name"
// 					onChange={onChange}
// 					id="validationCustom01"
// 					required
// 					placeholder="Name"
// 				/>
// 			</MDBValidationItem>

// 			<MDBValidationItem
// 				feedback="Please choose a username."
// 				invalid
// 				className="col-md-4"
// 			>
// 				<MDBInputGroup>
// 					<input
// 						type="textarea"
// 						className=""
// 						id="validationCustomEmail"
// 						placeholder="email"
// 						required
// 					/>
// 				</MDBInputGroup>
// 			</MDBValidationItem>
// 			<MDBValidationItem className="col-md-4">
// 				<MDBInput
// 					value={formValue.lname}
// 					name="lname"
// 					onChange={onChange}
// 					id="validationCustom02"
// 					placeholder="message"
// 					required
// 				/>
// 			</MDBValidationItem>
// 			<MDBValidationItem className="col-12"></MDBValidationItem>
// 			<div className="col-12">
// 				<MDBBtn type="submit">Submit form</MDBBtn>
// 				<MDBBtn type="reset">Reset form</MDBBtn>
// 			</div>
// 		</MDBValidation>
// 	);
// }

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
const form = useRef();

const sendEmail = (e) => {
	e.preventDefault();

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
};

	return (

    	<div className="row justify-content-center">
			<div className=" bg-[#] col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 ">
				<h1 className="text-[2.2rem] text-center my-4 mb-4">
					Contact Us
				</h1>
				<form className="row" ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input
						type="text"
						name="name"
						className="form-control my-2"
					/>

					<label>Email</label>
					<input
						type="gmail"
						name="user_email"
						className="form-control my-2"
					/>

					<label>Message</label>
					<textarea
						name="message"
						cols="4"
						className="form-control my-2"
					/>
					<input
						type="submit"
						name="Send"
						className="form-control  btn-primary my-4 bg-[#ffc000ff] text-[1.1rem] font-bold text-black hover:bg-[#66023cff]"
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
