import React from "react";
import { Link } from "react-router-dom";

function ProductsProps({
	imgOrder,
	desOrder,
	title,
	description,
	image,
	pt,
	pyImage,
	pyText,
	subDis,
}) {
	return (
		<div>
			<section className="container internal-page-wrapper top-100 p-[50px]">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12"></div>
					</div>
					<div className="service-item row my-[20px]justify-content-center text-center product-holder h-100 top-50 bottom-50">
						<div
							className={`py-20
							 col-md-6 my-auto order-2 order-sm-${desOrder}`}
						>
							<div className="product-title text-[1.9rem] product-title">
								{title}
							</div>
							<div className="product-brief text-[1.3rem]">
								{description}
							</div>
							<div className="text-[18px]">
								<i>{subDis}</i>
							</div>

							<div className="links-wrapper"></div>
						</div>

						<div
							className={`py-20
							col-md-6 order-1 order-sm-${imgOrder}`}
						>
							<div className="prodict-image m-[10px] p-3 product flex items-center justify-center ">
								<img
									className={`pt-${pt} max-h-[300px]`}
									src={image}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ProductsProps;
