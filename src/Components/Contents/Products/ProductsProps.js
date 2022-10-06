import React from "react";
import { Link } from "react-router-dom";

function ProductsProps({
	imgOrder,
	desOrder,
	title,
	description,
	image,
}) {
	return (
		<div>
			<section className="container internal-page-wrapper top-100 p-[50px]">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12"></div>
					</div>
					<div className="row justify-content-center text-center product-holder h-100 top-50 bottom-50">
						<div
							className={`col-sm-6 col-md-6 my-auto order-${desOrder}`}
						>
							<div className="product-title text-[1.8rem]">
								{title}
							</div>
							<div className="product-brief">
								{description}
							</div>

							<div className="links-wrapper">
								<ul>
									<li>
										<Link to="/product">
											Learn more
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div
							className={`col-sm-6 col-md-6 order-${imgOrder}`}
						>
							<div className="prodict-image m-[10px]">
								<img src={image} alt="" />
							
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ProductsProps
