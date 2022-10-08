import React from "react";
import { Element } from "react-scroll";
import image from "../../Assets/company/WWDWWD.svg";
import work from "../../Assets/company/work_values_principles.svg";
import mission1 from "../../Assets/company/content.svg"
import mission2 from "../../Assets/company/content(1).svg"
import mission3 from "../../Assets/company/content(2).svg"
function Company() {
	return (
		<Element className="section p-5" name="Company">
			<div>
				<div className="text-center p-5">
					<div className="text-[2.5rem] p-2">Company</div>
				</div>

				<div>
					<div>
						<div className="text-[2.0rem] text-center p-4">
							Mission
						</div>
						<div className="row justify-center flex items-stretch">
							<div className="col-10 col-sm-8 col-md-6 col-lg-4 ">
								<img
									className="max-h-[24rem] sm:max-h-[27rem] md:max-h-[29rem]
									lg:max-h-[31rem] product "
									src={mission1}
									alt=""
								/>
							</div>
							<div className="col-10 col-sm-8 col-md-6 col-lg-4">
								<img
									className="max-h-[24rem] sm:max-h-[27rem] md:max-h-[29rem]
									lg:max-h-[31rem] product"
									src={mission2}
									alt=""
								/>
							</div>
							<div className="col-10 col-sm-8 col-md-6 col-lg-4">
								<img
									className="max-h-[24rem] sm:max-h-[27rem] md:max-h-[29rem]
									lg:max-h-[31rem] product"
									src={mission3}
									alt=""
								/>
							</div>
						</div>
					</div>

					<div className="">
						<div className="text-[1.7rem] text-center mt-12  ">
							Why We Do What We Do
						</div>
						<div className="row justify-content-center text-center product-holder h-100 top-50 bottom-50">
							<div className="col-12 first-line:col-sm-6 col-md-6 my-auto order-2 ">
								<div className="product-title text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem]">
									BBT wants to responsibly
									activate the digital genes
									of Ethiopia,
									consideringing the social
									construct and
									environmental constraints.{" "}
									<br /> <br />
									BBT wants to be part of
									the journey that unleashes
									the untapped resources and
									opportunities.
									<br /> <br />
									BBT wants to inaugurate a
									catalyst approach to a
									technologically advanced
									Ethiopia and cure the
									“System Yelem” syndrome.
								</div>

								<div className="links-wrapper">
									<ul>
										<li></li>
									</ul>
								</div>
							</div>

							<div className="col-10 col-sm-6 col-md-6  ">
								<div className="prodict-image  product sm:max-w-[27rem] ">
									<img src={image} alt="" />
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="text-[2.0rem] text-center py-9 pt-20">
							Work Values & Principles
						</div>
						<div className="row justify-center ">
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px]  text-center  col-11 col-sm-10 col-md-8 col-lg-5 col-xxl- m-2 p-3">
								admit mistakes and shortcomings
							</div>
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px]  text-center  col-11 col-sm-10 col-md-8 col-lg-5 col-xxl- m-2 p-3">
								show empathy
							</div>
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px]  text-center  col-11 col-sm-10 col-md-8 col-lg-5 col-xxl- m-2 p-3">
								deliver result
							</div>
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px]  text-center  col-11 col-sm-10 col-md-8 col-lg-5 col-xxl- m-2 p-3">
								unite around the mission
							</div>
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px] text-center   col-11 col-sm-10 col-md-8 col-lg-5 col-xxl- m-2 p-3">
								obsess over customers
							</div>
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px]  text-center  col-11 col-sm-10 col-md-8 col-lg-5 col-xxl-  m-2 p-3">
								think and communicate clearly
							</div>
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px]  text-center  col-11 col-sm-10 col-md-8 col-lg-5 col-xxl-  m-2 p-3 product">
								rely on work ethic
							</div>
							<div className="sm:hover:bg-[#ffc000] bg-[#f0e7ec] text-[#892f3c] text-[20px]  text-center  col-11 col-sm-10 col-md-8 col-lg-5 col-xxl-  m-2 p-3">
								sweat the details
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="row g-4 justify-content-center  mx-auto ">
					<div
						class="product col-11 col-sm-8 col-lg-5 col-xxl- col-md-6  wow fadeInUp"
						data-wow-delay="0.5s"
					></div>
				</div>
			</div>
		</Element>
	);
}

export default Company;
