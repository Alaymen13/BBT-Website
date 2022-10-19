import React from "react";
import Product from "./ProductsProps.js";
import { Element } from "react-scroll";
import etta from "../../../Assets/products/etta.png";
import inflow from "../../../Assets/products/inflow.svg";
import ces from "../../../Assets/products/ces.svg";
import turumba from "../../../Assets/products/turumba.png";
import matrix from "../../../Assets/products/matrix.svg";
import oneHR from "../../../Assets/products/oneHR.svg";
import hello from "../../../Assets/products/helloTraffic.svg";

function Products() {
	return (
		<Element className="section pt-5" name="Products">
			<div className="text-center p-5">
				<div className="text-[2.5rem] title">Products</div>
			</div>

			<Product
				title="ETTA"
				image={etta}
				description="Bringing the world of lottery and e-commerce together"
				imgOrder="first"
				desOrder="last"
				pyImage="3"
				pyText="3"
			/>
			<Product
				title="TERUMBA"
				image={turumba}
				description="Advertisement management platform connecting brand owners and advertising agencies."
				imgOrder="last"
				desOrder="first"
				pyImage="3"
				pyText="3"
			/>
			<Product
				title="INFLOW"
				image={inflow}
				pt="[97px]"
				description="Supply chain management system digitalizing every step of the manufacturing process"
				imgOrder="first"
				desOrder="last"
				pyImage="20"
				pyText="20"
			/>
			<Product
				title="CES"
				image={ces}
				description="From marketing to production, this cleaning enterprise system is getting adopted quickly by the big names of the sector."
				imgOrder="last"
				desOrder="first"
				pyImage="2"
				pyText="20"
			/>
			<Product
				title="MATRIX 42"
				image={matrix}
				pt="[97px]"
				description="The Forrester WaveTM: Enterprise Service Management (ESM), Q4 2021 - Matrix42 named Strong Performer. Its ESM platform standardize and streamlines your enterprise processes. BBT is a trusted vendor and integrator by th
"
				imgOrder="first"
				desOrder="last"
				pyImage="20"
				pyText="20"
			/>
			<Product
				title="oneHR"
				image={oneHR}
				description="oneHR - an end to end human resource management system covering from the basic HR modules to the advanced topics.
"
				imgOrder="last"
				desOrder="first"
				pyImage="20"
				pyText="20"
			/>
			<Product
				title="HELLO TRAFFIC"
				image={hello}
				description="In partnership with insurance and traffic management, BBT is kicking off the first traffic management solution aiming to get you back on the road as quick as possible."
				imgOrder="first"
				desOrder="last"
				pyImage="20"
				pyText="20"
			/>
		</Element>
	);
}

export default Products;
