import React from "react";
import Banner from "./Banner.js";
import Expertise from "./Expertise.js";
import Services from "./Services.js";
import Products from "./Products/Products.js";
import Company from "./Company.js";
import ContactUs from "./ContactUs.js";

function Contents() {
	return (
		<div className="pt-[70px]">
			<Banner />
			<Expertise />
			<Products />
			<Services />
			<Company />
			<ContactUs />
		</div>
	);
}

export default Contents;
