import React from "react";
import Product from "./ProductsProps.js";
import { Element } from "react-scroll";
import img1 from "../../../Assets/products/img1.jpeg";
import img2 from "../../../Assets/products/img2.png";
function Products() {
	return (
		<Element className="section pt-5" name="Products">
			<div className="text-center p-5">
				<div className="text-[2.5rem]">Products</div>
			</div>
			<Product
				title="ETTA"
				image={img1}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum."
				imgOrder="1"
				desOrder="2"
			/>
			<Product
				title="TERUMBA"
				image={img2}
				description="loLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum.rem"
				imgOrder="2"
				desOrder="1"
			/>
			<Product
				title="INFLOW"
				image={img1}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum."
				imgOrder="1"
				desOrder="2"
			/>
			<Product
				title="CES"
				image={img2}
				description="loLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum.rem"
				imgOrder="2"
				desOrder="1"
			/>
			<Product
				title="MATRIK 42"
				image={img1}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum."
				imgOrder="1"
				desOrder="2"
			/>
			<Product
				title="HELLO TRAFFIC"
				image={img2}
				description="loLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias dolore in deserunt sapiente. Corrupti minima aliquid fugiat illum beatae eveniet obcaecati enim aspernatur natus? Labore similique eveniet impedit voluptatum.rem"
				imgOrder="2"
				desOrder="1"
			/>
		</Element>
	);
}

export default Products;
