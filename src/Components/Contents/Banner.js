import React from "react";
import { Element } from "react-scroll";

function Banner() {
	return (
		<Element className="section" name="Banner">
			<div className="banner flex ">
				<div className="banner_fadeRight">
					<div class="grid grid-cols-1 gap-9 place-content-around h-[600px] container ...">
						<div className="container text-center   w-2/3 mr-[300px] mb-[50px] text-[20px]  font-bold  sm:text-[25px] md:text-[28px] lg:text-[32px]">
						
						</div>
						<div className="container text-center  w-2/3 mr-[450px] text-[20px] font-bold font-mono sm:text-[25px] md:text-[28px] lg:text-[32px]">
							
						</div>
					</div>
				</div>
				<div className="banner_fadeLeft">
					<div class="grid grid-cols-1 gap-9 place-content-around h-[600px] container ">
						<div className="container text-center  w-2/3 mr-2 mb-[186px] font-bold text-[20px] sm:text-[25px] md:text-[28px] lg:text-[32px]">
						
						</div>

						<div></div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Banner;
