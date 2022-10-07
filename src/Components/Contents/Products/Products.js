import React from "react";
import Product from "./ProductsProps.js";
import { Element } from "react-scroll";
import etta from "../../../Assets/products/etta.png";
import inflow from "../../../Assets/products/inflow.svg";
import turumba from "../../../Assets/products/turumba.png";
import matrix from "../../../Assets/products/matrix.svg";
function Products() {
	return (
		<Element className="section pt-5" name="Products">
			<div className="text-center p-5">
				<div className="text-[2.5rem]">Products</div>
			</div>
			<Product
				title="ETTA"
				image={etta}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum."
				imgOrder="1"
				desOrder="2"
			/>
			<Product
				title="TERUMBA"
				image={turumba}
				description="loLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum.rem"
				imgOrder="2"
				desOrder="1"
			/>
			<Product
				title="INFLOW"
				image={inflow}
				pt="[97px]"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum."
				imgOrder="1"
				desOrder="2"
			/>
			<Product
				title="CES"
				image={etta}
				description="loLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum.rem"
				imgOrder="2"
				desOrder="1"
			/>
			<Product
				title="MATRIX 42"
				image={matrix}
				pt="[97px]"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum."
				imgOrder="1"
				desOrder="2"
			/>
			<Product
				title="HELLO TRAFFIC"
				image={etta}
				description="loLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum.rem"
				imgOrder="2"
				desOrder="1"
			/>
		</Element>
	);
}

export default Products;
