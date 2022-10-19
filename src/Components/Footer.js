import React from 'react'
import footer from "../Assets/footer.png"
import logo from "../Assets/logow.png"
function Footer() {
  return (
		<div >
			<div className="relative flex justify-start md:justify-center md:items-end ">
				<img
					className="absolute object-cover top-10 h-[460px] w-full xl:mt-10 z-0 footerbg"
					src={footer}
					alt="background"
				/>
				<div className="flex pt-36 md:pt-32 lg:pt-40 xl:pt-96   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
					<div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
						<div className="flex justify-start items-center space-x-4">
						
						</div>
						<div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
							<div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
								
							</div>
							<div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
								
							</div>
							<div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
								
							</div>
						</div>
					</div>
					<div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
						<p className="p-[30px] pt-[3px] md:mt-12 xl:mt-0 text-sm leading-none text-[#fff]">
							2022 Black Bridge Technology. All Rights
							Reserved
						</p>
						<div className=" mb-[30px] mt-50 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
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
						<div className="flex  justify-start md:justify-end items-start  w-full md:w-auto md:items-center space-x-6 ">

						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Footer