import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import logo from "../Assets/logo2.png";
import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";

const duration = 50;

function Header() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="white"
			variant="light"
			className="header fixed  w-full z-20 top-0 left-0 "
		>
			<Container>
				<Links to="/" className="logo">
					<img src={logo} alt="logo" />
				</Links>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="lists"
				>
					<Nav className="me-auto lists1"></Nav>
					<div className="lg:flex ">
						<Navbar.Collapse id="navbar-dark-example">
							<Nav>
								<NavDropdown
									className="texts"
									id="nav-dropdown-dark-example"
									title="EXPERTISE"
									menuVariant="light"
								>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Expertise"
											duration={
												duration
											}
										>
											Enterprise
											System
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Expertise"
											duration={
												duration
											}
										>
											Service
											Management
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="Expertise"
											duration={
												duration
											}
										>
											Project
											Management
										</Link>
									</NavDropdown.Item>

									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="Expertise"
											duration={
												duration
											}
										>
											Business
											Process
											Management
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="Expertise"
											duration={
												duration
											}
										>
											Data
											Management
										</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
						<Navbar.Collapse id="navbar-dark-example">
							<Nav>
								<NavDropdown
									id="nav-dropdown-dark-example"
									title="PRODUCTS"
									menuVariant="light"
								>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Products"
											duration={
												duration
											}
										>
											ETTA
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Products"
											duration={
												duration
											}
										>
											TERUMBA
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Products"
											duration={
												duration
											}
										>
											INFLOW
										</Link>
									</NavDropdown.Item>

									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Products"
											duration={
												duration
											}
										>
											CES
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Products"
											duration={
												duration
											}
										>
											MATRIX 42
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Products"
											duration={
												duration
											}
										>
											oneHR
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Products"
											duration={
												duration
											}
										>
											HELLO TRAFFIC
										</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
						<Navbar.Collapse id="navbar-dark-example">
							<Nav>
								<NavDropdown
									id="nav-dropdown-dark-example"
									title="SERVICES"
									menuVariant="light"
								>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Services"
											duration={
												duration
											}
										>
											Enterprise
											Applications
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Services"
											duration={
												duration
											}
										>
											Enterprise
											Service
											Management -
											ITIL
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="Services"
											duration={
												duration
											}
										>
											IT Consultancy
										</Link>
									</NavDropdown.Item>

									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="Services"
											duration={
												duration
											}
										>
											Business
											Process
											Engineering
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="Services"
											duration={
												duration
											}
										>
											Scrum
											Methodology
											Training
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="Services"
											duration={
												duration
											}
										>
											UX/UI Design
										</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
						<Navbar.Collapse id="navbar-dark-example">
							<Nav>
								<NavDropdown
									id="nav-dropdown-dark-example"
									title="COMPANY"
									menuVariant="light"
								>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="Company"
											duration={
												duration
											}
										>
											Mission{" "}
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link
											activeClass="active"
											to="wwdwwd"
											duration={
												duration
											}
										>
											WWDWWD
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										{" "}
										<Link
											activeClass="active"
											to="work"
											duration={
												duration
											}
										>
											Work Values &
											Principles
										</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
						<Navbar.Collapse id="navbar-dark-example lastchild">
							<Nav>
								<Link
									activeClass="active"
									to="ContactUs"
									duration={duration}
								>
								<div className="contactus">
									<div className="font-bold hover:text-[#ffc000ff]">
										CONTACT US
									</div>
								</div>
								</Link>
							</Nav>
						</Navbar.Collapse>
					</div>
					{/* <Nav className="header1">
						<Link className="Link " to="/Expertise">
							<h6 className="inline-flex">
								EXPERTISE
								<svg
									class="ml-1 w-6 h-6 pb-[1px] text-[#ffc000ff] hidden sm:hidden lg:inline  "
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</h6>
						</Link>
						<Link className="Link" to="/Products">
							<h6 className="inline-flex">
								PRODUCTS
								<svg
									class="ml-1 w-6 h-6 pb-[1px] text-[#ffc000ff] hidden sm:hidden lg:inline "
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</h6>
						</Link>
						<Link className="Link" to="/Services">
							<h6 className="inline-flex">
								SERVICES
								<svg
									class="ml-1 w-6 h-6 pb-[1px] text-[#ffc000ff] hidden sm:hidden lg:inline "
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</h6>
						</Link>
						<Link className="Link" to="/Company">
							<h6 className="inline-flex">
								COMPANY
								<svg
									class="ml-1 w-6 h-6 pb-[1px] text-[#ffc000ff] hidden sm:hidden lg:inline "
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</h6>
						</Link>
						<Link className="Link" to="/ContactUs">
							<h6 className="inline-flex">
								CONTACT US
								<svg
									class="ml-1 w-6 h-6 pb-[1px] text-[#ffc000ff] hidden sm:hidden lg:inline "
									fill="#ffc000ff"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 50 50"
									aria-hidden="true"
									width="50px"
									height="50px"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
									/>
								</svg>
							</h6>
						</Link>
					</Nav> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
