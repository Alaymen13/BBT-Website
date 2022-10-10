import React from "react";
import arrow from "../../Assets/arrow.svg";
// import enterprise from "../../Assets/cards/enterprise.png";
import enterprise from "../../Assets/expertise/enterprise_systems.svg";
import service from "../../Assets/expertise/service_management.svg";
import agile from "../../Assets/expertise/agile_software_requirement.svg";
import business from "../../Assets/expertise/business_process_management.svg";
import data from "../../Assets/expertise/data_management.svg"
import { Element } from "react-scroll";

function Expertise() {
	return (
		<Element className="section p-5" name="Expertise">
			<div>
				<div className="text-center p-5">
					<div className="text-[2.5rem]">Expertise</div>
				</div>

				<div class="row g-4 justify-content-center  mx-auto ">
					<div
						class="product col-12 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
						data-wow-delay="0.5s"
					>
						<div
							class="service-item service-item bg-[#fbd35d]
						text-[#66023cff] 
						sm:bg-[#fff] 
						sm:text-[#000000]
						sm:hover:text-[#66023cff] 
						sm:hover:bg-[#fbd35d] text-center h-100 p-4 p-xl-5 "
						>
							<img
								class="inline
							img-fluid mb-[21px] max-h-[80px] sm:max-h-[87px] md:max-h-[95px] lg:max-h-[115px] "
								src={enterprise}
								alt=""
							/>

							<h3 class="mb-3 text-[1.5rem] sm:text-[1.6rem]  md:text-[1.7rem] lg:text-[1.8rem] font-bold ">
								Enterprise System
							</h3>
							<p class="mb-[21px] text-[16.8px] sm:text-[17.5px] md:text-[18.3px] lg:text-[19px] ">
								Enterprise Systems is a crucial
								component in the health of a
								company. And BBT participates in
								building systems that ties
								together business processes and
								enable the flow of information
								between units to run operations
								efficiently.
							</p>
						</div>
					</div>
					<div
						class=" col-12 col-sm-6 col-lg-4 col-md-6 wow fadeInUp"
						data-wow-delay="0.5s"
					>
						<div
							class="product service-item bg-[#66023cff]
						text-[#fbd35d] 
						sm:bg-[#fff] 
						sm:text-[#000000]
						sm:hover:text-[#fbd35d] 
						sm:hover:bg-[#66023cff] text-center h-100 p-3 p-xl-5 "
						>
							<img
								class="inline
							img-fluid mb-[21px] max-h-[80px] sm:max-h-[87px] md:max-h-[95px] lg:max-h-[115px] cart-icon"
								src={service}
								alt=""
							/>
							<h3 class="mb-3 text-[1.5rem] sm:text-[1.6rem]  md:text-[1.7rem] lg:text-[1.8rem] font-bold ">
								Service Management
							</h3>
							<p class="mb-[21px] text-[16.8px] sm:text-[17.5px] md:text-[18.3px] lg:text-[19px] ">
								Service Management is a set of
								organizational capabilities for
								enabling value for customers in
								the form of services. We, at
								BBT, help companies unlock these
								capabilities. We provide SM
								trainings and enterprise service
								management platform through our
								partnership with matrix42.
								Matrix42 ESM - help you
								standardize and manage all IT
								and non-IT processes and
								services from provisioning to
								Service Lifecycle Management and
								End-of-Life (EoL)
							</p>
						</div>
					</div>
					<div
						class=" col-12 col-sm-6 col-lg-4 col-md-6 wow fadeInUp "
						data-wow-delay="0.5s"
					>
						<div
							class="product service-item bg-[#fbd35d]
						text-[#66023cff] 
						sm:bg-[#fff] 
						sm:text-[#000000]
						sm:hover:text-[#66023cff] 
						sm:hover:bg-[#fbd35d]  text-center h-100 p-3 p-xl-5 "
						>
							<img
								class="inline
							img-fluid mb-[21px] max-h-[80px] sm:max-h-[87px] md:max-h-[95px] lg:max-h-[115px] "
								src={agile}
								alt=""
							/>
							<h3 class="mb-3 text-[1.5rem] sm:text-[1.6rem]  md:text-[1.7rem] lg:text-[1.8rem] font-bold">
								Agile Software Requirements
							</h3>
							<p class="mb-[21px] text-[16.8px] sm:text-[17.5px] md:text-[18.3px] lg:text-[19px] ">
								It’s not only a trend to use
								Scrum but it’s now a must so
								that you are able to deliver
								higher-value, higher-quality
								software at faster and faster
								rates. It comes down to
								satisfying your customer through
								early and continuous deliverable
								of valuable software. At BBT we
								intervene at different levels of
								the methodology : team level -
								program level - portfolio level
							</p>
						</div>
					</div>
					<div
						class=" col-12 col-sm-6 col-lg-4 col-md-6 wow fadeInUp"
						data-wow-delay="0.5s"
					>
						<div
							class="product service-item bg-[#66023cff]
						text-[#fbd35d] 
						sm:bg-[#fff] 
						sm:text-[#000000]
						sm:hover:text-[#fbd35d] 
						sm:hover:bg-[#66023cff] text-center h-100 p-3 p-xl-5 "
						>
							<img
								class="inline
							img-fluid mb-[21px] max-h-[80px] sm:max-h-[87px] md:max-h-[95px] lg:max-h-[115px] "
								src={business}
								alt=""
							/>
							<h3 class="mb-3 text-[1.5rem] sm:text-[1.6rem]  md:text-[1.7rem] lg:text-[1.8rem] font-bold">
								Business Process Management
							</h3>
							<p class="mb-[21px] text-[16.8px] sm:text-[17.5px] md:text-[18.3px] lg:text-[19px] ">
								Business Process Management is
								mainly about streamlining and
								optimizing your process in a way
								that is efficient to your
								customers and your employees.
								Using different modeling
								approaches (UML & BPMN) we
								discover, model, improve
								business process. Through our
								partnership with Matrix42, we
								digitilize your processes via
								workflow automation.
							</p>
						</div>
					</div>
					<div
						class=" col-12 col-sm-6 col-lg-4 col-md-6 wow fadeInUp"
						data-wow-delay="0.5s"
					>
						<div
							class="product service-item bg-[#fbd35d]
						text-[#66023cff] 
						sm:bg-[#fff] 
						sm:text-[#000000]
					
						sm:hover:bg-[#fbd35d] sm:hover:text-[#66023cff]  text-center h-100 p-3 p-xl-5 "
						>
							<img
								class="inline
							img-fluid mb-[21px] max-h-[80px] sm:max-h-[87px] md:max-h-[95px] lg:max-h-[115px] "
								src={data}
								alt=""
							/>
							<h3 class="mb-3 text-[1.5rem] sm:text-[1.6rem]  md:text-[1.7rem] lg:text-[1.8rem] font-bold">
								Data Management{" "}
							</h3>
							<p class="mb-[21px] text-[16.8px] sm:text-[17.5px] md:text-[18.3px] lg:text-[19px] ">
								We believe that data is a
								critical business vector, so we
								armed ourselves with frameworks
								to build your data capital.
								Ready to design and build your
								enterprise databases, data lakes
								or data warehouses, in support
								of various machine learning and
								deep learning applications on
								your data.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Expertise;

