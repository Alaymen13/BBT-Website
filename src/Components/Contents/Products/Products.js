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
			{/* <div class=" w-full lg:max-w-full lg:flex">
				<div
					class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"

					style={{backgroundImage: `url(${etta})`}}
					title="Mountain"
				></div>
				<div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div class="mb-8">
						<p class="text-sm text-gray-600 flex items-center">
							<svg
								class="fill-current text-gray-500 w-3 h-3 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
							</svg>
							Members only
						</p>
						<div class="text-gray-900 font-bold text-xl mb-2">
							Best Mountain Trails 2020
						</div>
						<p class="text-gray-700 text-base">
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
							Voluptatibus quia, Nonea! Maiores et
							perferendis eaque, exercitationem
							praesentium nihil.
						</p>
					</div>
					<div class="flex items-center">
						<img
							class="w-10 h-10 rounded-full mr-4"
							src="/ben.png"
							alt="Avatar of Writer"
						/>
						<div class="text-sm">
							<p class="text-gray-900 leading-none">
								John Smith
							</p>
							<p class="text-gray-600">Aug 18</p>
						</div>
					</div>
				</div>
			</div> */}

			<Product
				title="ETTA"
				image={etta}
				description="Bringing the world of lottery and e-commerce together"
				imgOrder="first"
				desOrder="last"
			/>
			<Product
				title="TERUMBA"
				image={turumba}
				description="Advertisement management platform connecting brand owners and advertising agencies."
				imgOrder="last"
				desOrder="first"
				pyImage="[0px]"
				
			/>
			<Product
				title="INFLOW"
				image={inflow}
				pt="[97px]"
				description="Supply chain management system digitalizing every step of the manufacturing process"
				imgOrder="first"
				desOrder="last"
				pyImage="[70px]"
				pyText="[71px]"
			/>
			<Product
				title="CES"
				image={ces}
				description="From marketing to production, this cleaning enterprise system is getting adopted quickly by the big names of the sector."
				imgOrder="last"
				desOrder="first"
				pyImage="[70px]"
				pyText="[70px]"
			/>
			<Product
				title="MATRIX 42"
				image={matrix}
				pt="[97px]"
				description="The Forrester WaveTM: Enterprise Service Management (ESM), Q4 2021 - Matrix42 named Strong Performer. Its ESM platform standardize and streamlines your enterprise processes. BBT is a trusted vendor and integrator by th
"
				imgOrder="first"
				desOrder="last"
				pyImage="[70px]"
				pyText="[70px]"
			/>
			<Product
				title="oneHR"
				image={oneHR}
				description="oneHR - an end to end human resource management system covering from the basic HR modules to the advanced topics.
"
				imgOrder="last"
				desOrder="first"
				pyImage="[70px]"
				pyText="[70px]"
			/>
			<Product
				title="HELLO TRAFFIC"
				image={hello}
				description="In partnership with insurance and traffic management, BBT is kicking off the first traffic management solution aiming to get you back on the road as quick as possible."
				imgOrder="first"
				desOrder="last"
				pyImage="[70px]"
				pyText="[70px]"
			/>
		</Element>
	);
}

export default Products;
