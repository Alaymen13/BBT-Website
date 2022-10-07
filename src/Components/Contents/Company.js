import React from "react";
import { Element } from "react-scroll";
import image from "../../Assets/company/WWDWWD.svg"

function Company() {
	return (
		<Element className="section p-5" name="Expertise">
			<div>
				<div className="text-center p-5">
					<div className="text-[2.5rem]">Company</div>
				</div>

				<div>
					<div>
						<div className="text-[2.0rem]">Mission</div>
					</div>

					<div>
						<div className="text-[2.0rem]">
							Why We Do What We Do
						</div>
						<div className="row justify-content-center text-center product-holder h-100 top-50 bottom-50">
							<div
								className={`col-sm-6 col-md-6 my-auto order-2`}
							>
								<div className="product-title text-[1.8rem]">
									title
								</div>
								<div className="product-brief">
							description
								</div>

								<div className="links-wrapper">
									<ul>
										<li>
										
										</li>
									</ul>
								</div>
							</div>

							<div
								className={`col-sm-6 col-md-6`}
							>
								<div className="prodict-image m-[10px] p-3 product max-h-[100px]">
									<img
									
										src={image}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="text-[2.0rem]">
							Work Values & Principles
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="row g-4 justify-content-center  mx-auto ">
					<div
						class="product col-11 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
						data-wow-delay="0.5s"
					></div>
				</div>
			</div>
		</Element>
	);
}

export default Company;
