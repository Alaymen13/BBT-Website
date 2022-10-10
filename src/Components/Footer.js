import React from 'react'
import footer from "../Assets/footer.png"
import logo from "../Assets/logow.png"
function Footer() {
  return (
		<div className>
			<div className="relative justify-center justify-items-center justify-self-center content-center  flex ">
				<img
					className="pt-[8px] absolute object-cover top-10 h-400px] w-full z-0 footerbg"
					src={footer}
					alt="background"
				/>
				<div className="pt-[80px] aaa justify-center justify-items-center justify-self-center content-center">
					<div className="mt-10  flex-col flex  space-y-4 md:space-x-4 xl:space-x-6">
						<button className="text-base leading-none text-[#fff] hover:text-gray-300">
							Terms of service
						</button>
						<button className="text-base leading-none text-[#fff] hover:text-gray-300">
							Privacy Policy
						</button>
						<button className="text-base leading-none text-[#fff] hover:text-gray-300">
							Security
						</button>
					</div>
					<p className="m-10 md:mt-12 xl:mt-0 text-sm leading-none text-[#fff] ">
						2022 Black Bridge Technology. All Rights
						Reserved
					</p>
				</div>
			</div>
		</div>
  );
}

export default Footer