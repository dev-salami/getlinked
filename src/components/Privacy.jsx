import React from "react";
import lock from "../../public/assets/lock.png";
import secure from "../../public/assets/secure.png";
import Image from "next/image";
import { ImCheckmark } from "react-icons/im";

function Privacy() {
	return (
		<section className="container mx-auto py-16 px-6">
			<div className="flex flex-col justify-between  gap-6 lg:flex-row">
				<div className="lg:w-2/5 mx-auto">
					<div className="flex flex-col gap-4 text-center md:text-left">
						<p className="text-xl  font-semibold items-center lg:items-start flex flex-col ">
							<span>Privacy Policy and</span>
							<span className="text-[#D434FE]">Terms</span>
						</p>
						<p>Last updated on September 12, 2023</p>
						<p>
							Below are our privacy & policy, which outline a lot of goodies.
							it’s our aim to always take of our participant
						</p>
					</div>
					<div></div>
					<div className="border-[#D434FE] border rounded-md p-6 mt-10 lg:p-12">
						<p>
							At getlinked tech Hackathon 1.0, we value your privacy and are
							committed to protecting your personal information. This Privacy
							Policy outlines how we collect, use, disclose, and safeguard your
							data when you participate in our tech hackathon event. By
							participating in our event, you consent to the practices described
							in this policy.
						</p>
						<div>
							<span className="text-[#D434FE] font-semibold block mt-6 mb-2">
								Licensing Policy
							</span>
							<p>Here are terms of our Standard License:</p>
							<p className="flex gap-2 my-3">
								<span className="h-5 w-5 rounded-full  p-1 flex justify-center items-center bg-[#2DE100]">
									<ImCheckmark size={30} />
								</span>
								<span>
									The Standard License grants you a non-exclusive right to
									navigate and register for our event
								</span>
							</p>
							<p className="flex gap-2">
								<span className="h-5 w-5 rounded-full  p-1 flex justify-center items-center bg-[#2DE100]">
									<ImCheckmark size={30} />
								</span>
								<span>
									You are licensed to use the item available at any free source
									sites, for your project developement
								</span>
							</p>
							<div className=" flex justify-center  mt-4">
								<button className=" mt-3  px-4 py-[6px] bg-gradient-to-r text-center  from-[#fe34b9] to-[#903aff] rounded-sm">
									Read More
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2  flex justify-center mx-auto relative">
					<Image
						className="relative  h-fit"
						src={secure}
						alt="secure"></Image>
					<Image
						className="absolute  top-1/4 right-1/5"
						src={lock}
						alt="secure"></Image>
				</div>
			</div>
		</section>
	);
}

export default Privacy;
