import React from 'react'
import arrow from "../../Assets/arrow.svg";
import img1 from "../../Assets/services/enterprise_applications.svg";
import img2 from "../../Assets/services/enterprise_servicemanagement.svg";
import img3 from "../../Assets/services/IT_consultancy.svg";
import img4 from "../../Assets/services/business_process_eng.svg";
import img5 from "../../Assets/services/scrum_method.svg";
import img6 from "../../Assets/services/UX-UI design.svg";
// import ecommerce from "../../Assets/cards/ecommerce.png";
import { Element } from "react-scroll";


function Services() {
  return (
		<Element className="section p-5 " name="Services">
			<div className="text-center p-5 ">
				<div className="text-[2.5rem]">Services</div>
			</div>

			<div class="row g-4 justify-content-center mx-auto">
				<div
					class=" product col-11 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
					data-wow-delay="0.3s"
				>
					<div class="service-item bg-[#fff] sm:hover:bg-[#fbd35d] sm:hover:text-[#66023cff]  text-center h-100 p-4 p-xl-5 ">
						<img
							class="inline
							img-fluid m-[15px] max-h-[80px] sm:max-h-[85px] md:max-h-[95px] lg:max-h-[100px] "
							src={img1}
							alt=""
						/>
						<h3 class="m-3 text-[20px] sm:text-[23px] md:text-[25px] lg:text-[25px] font-bold ">
							Enterprise Applications
						</h3>
					</div>
				</div>
				<div
					class="product col-11 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
					data-wow-delay="0.5s"
				>
					<div
						class="service-item bg-[#fff]  sm:hover:bg-[#7e325f]
						 sm:hover:text-[#fbd35d] text-center h-100 p-4 p-xl-5 "
					>
						<img
							class="inline
							img-fluid m-[15px] max-h-[80px] sm:max-h-[85px] md:max-h-[95px] lg:max-h-[100px] cart-icon"
							src={img2}
							alt=""
						/>
						<h3 class="m-3 text-[20px] sm:text-[23px] md:text-[24px] lg:text-[25px] font-bold ">
							Enterprise Service Management - ITIL
						</h3>
					</div>
				</div>
				<div
					class="product col-11 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
					data-wow-delay="0.5s"
				>
					<div class="service-item bg-[#fff] sm:hover:bg-[#fbd35d] sm:hover:text-[#66023cff]  text-center h-100 p-4 p-xl-5 ">
						<img
							class="inline
							img-fluid m-[15px] max-h-[80px] sm:max-h-[85px] md:max-h-[95px] lg:max-h-[100px]"
							src={img3}
							alt=""
						/>
						<h3 class="m-3 text-[20px] sm:text-[23px] md:text-[24px] lg:text-[25px] font-bold">
							IT Consultancy
						</h3>
					</div>
				</div>
				<div
					class="product col-11 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
					data-wow-delay="0.5s"
				>
					<div
					// sm:hover:bg-[#7e325f]
					// 	 sm:hover:text-[#fbd35d]  
						class="service-item bg-[#fff] text-center h-100 p-4 p-xl-5 "
					>
						<img
							class="inline
							img-fluid m-[15px] max-h-[80px] sm:max-h-[87px] md:max-h-[95px] lg:max-h-[115px] "
							src={img4}
							alt=""
						/>
						<h3 class="m-3 text-[20px] sm:text-[23px] md:text-[24px] lg:text-[25px] font-bold">
							Business Process Engineering
						</h3>
					</div>
				</div>
				<div
					class="product col-11 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
					data-wow-delay="0.5s"
				>
					<div class="service-item bg-[#fff]   text-center h-100 p-4 p-xl-5 ">
						<img
							class="inline
							img-fluid m-[15px] max-h-[80px] sm:max-h-[85px] md:max-h-[95px] lg:max-h-[100px] "
							src={img5}
							alt=""
						/>
						<h3 class="m-3 text-[20px] sm:text-[23px] md:text-[24px] lg:text-[25px] font-bold">
							Scrum Methodology Training
						</h3>
					</div>
				</div>
				<div
					class="product col-11 col-sm-6 col-lg-4 col-md-6  wow fadeInUp"
					data-wow-delay="0.5s"
				>
					<div
						class="service-item bg-[#fff]  text-center h-100 p-4 p-xl-5 "
					>
						<img
							class="inline
							img-fluid m-[15px] max-h-[80px] sm:max-h-[85px] md:max-h-[95px] lg:max-h-[100px] cart-icon text-yellow-400"
							src={img6}
							alt=""
						/>
						<h3 class="m-3 text-[20px] sm:text-[23px] md:text-[24px] lg:text-[25px] font-bold ">
							UX/UI Design
						</h3>
					</div>
				</div>
			</div>
		</Element>
  );
}

export default Services