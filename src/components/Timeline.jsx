"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import star from "../../public/assets/star.svg";
import starp from "../../public/assets/starp.svg";

function Timeline() {
	return (
		<section
			id="timeline"
			className="relative overflow-hidden container mx-auto px-6 mb-20 flex flex-col gap-10">
			<span className="absolute overflow-hidden w-fit -z-10 bottom-0 right-[10%]  md:right-1/4  lg:left-0  -translate-x-1/2">
				<motion.div
					initial={{ opacity: 0.5, scale: 0.8 }}
					animate={{
						opacity: 1,
						scale: 1,
						filter: "drop-shadow(0 0 5px rgba(0, 0, 255, 0.5))",
					}}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: "reverse",
					}}>
					<Image
						src={starp}
						alt="star-icon"></Image>
				</motion.div>
			</span>
			<span className="absolute overflow-hidden w-fit -z-10 top-0 right-[10%]  md:right-1/4  lg:right-0  -translate-x-1/2">
				<motion.div
					initial={{ opacity: 0.5, scale: 0.8 }}
					animate={{
						opacity: 1,
						scale: 1,
						filter: "drop-shadow(0 0 5px rgba(0, 0, 255, 0.5))",
					}}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: "reverse",
					}}>
					<Image
						src={starp}
						alt="star-icon"></Image>
				</motion.div>
			</span>
			<span className="absolute overflow-hidden w-fit -z-10 bottom-1/2 right-[10%] lg:left-[10%]  -translate-x-1/2">
				<motion.div
					initial={{ opacity: 0.5, scale: 0.8 }}
					animate={{
						opacity: 1,
						scale: 1,
						filter: "drop-shadow(0 0 5px rgba(0, 0, 255, 0.5))",
					}}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: "reverse",
					}}>
					<Image
						src={star}
						alt="star-icon"></Image>
				</motion.div>
			</span>
			<div className="flex  flex-row-reverse md:flex-row justify-center gap-6">
				<div className="md:w-1/2 max-w-md ml-auto flex-col flex justify-end gap-3">
					<h2 className="font-semibold text-xl text-[#D434FE] ">
						Hackathon Announcement
					</h2>
					<p className="text-sm">
						The getlinked tech hackathon 1.0 is formally announced to the
						general public and teams begin to get ready to register
					</p>
					<span className="text-[#D434FE] md:hidden font-semibold">
						November 18, 2023
					</span>
				</div>
				<div className="flex gap-12 items-end font-semibold md:w-1/2">
					<div className="flex justify-center flex-col gap-2">
						<span className="border border-[#D434FE] h-28 md:h-20 w-fit mx-auto"></span>
						<span className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-full h-8 w-8 flex items-center justify-center p-2">
							1
						</span>
					</div>
					<span className="text-[#D434FE] md:block hidden ">
						November 18, 2023
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-between md:justify-center  gap-6  ">
				<div className="flex md:flex-row-reverse  md:-ml-16 gap-12 items-end font-semibold md:w-1/2 ">
					<div className="flex justify-center   flex-col gap-2">
						<span className="border border-[#D434FE] h-28 md:h-20 w-fit mx-auto"></span>
						<span className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-full h-8 w-8 flex items-center justify-center p-2">
							2
						</span>
					</div>
					<span className="text-[#D434FE] md:block hidden ">
						November 18, 2023
					</span>
				</div>
				<div className=" overflow-hidden  md:-mr-44 lg:-mr-28 xl:mr-4 md:pl-5 xl:pl-0  md:w-1/2 max-w-md  flex-col flex justify-end gap-3 ">
					<h2 className="font-semibold text-xl text-[#D434FE] ">
						Teams Registration begins
					</h2>
					<p className="text-sm">
						Interested teams can now show their interest in the getlinked tech
						hackathon 1.0 2023 by proceeding to register
					</p>
					<span className="text-[#D434FE] md:hidden font-semibold">
						November 18, 2023
					</span>
				</div>
			</div>

			<div className="flex   flex-row-reverse md:flex-row justify-center gap-6">
				<div className="md:w-1/2 max-w-md ml-auto flex-col flex justify-end items-start  gap-3">
					<h2 className="font-semibold text-xl text-[#D434FE] ">
						Teams Registration ends
					</h2>
					<p className="text-sm">
						Interested Participants are no longer Allowed to register
					</p>
					<span className="text-[#D434FE] md:hidden font-semibold">
						November 18, 2023
					</span>
				</div>
				<div className="flex gap-12 items-end font-semibold md:w-1/2">
					<div className="flex justify-center flex-col gap-2">
						<span className="border border-[#D434FE] h-28 md:h-20 w-fit mx-auto"></span>
						<span className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-full h-8 w-8 flex items-center justify-center p-2">
							3
						</span>
					</div>
					<span className="text-[#D434FE] md:block hidden ">
						November 18, 2023
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-between md:justify-center  gap-6  ">
				<div className="flex md:flex-row-reverse  md:-ml-16 gap-12 items-end font-semibold md:w-1/2 ">
					<div className="flex justify-center   flex-col gap-2">
						<span className="border border-[#D434FE] h-28 md:h-20 w-fit mx-auto"></span>
						<span className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-full h-8 w-8 flex items-center justify-center p-2">
							4
						</span>
					</div>
					<span className="text-[#D434FE] md:block hidden ">
						November 18, 2023
					</span>
				</div>
				<div className=" overflow-hidden  md:-mr-44 lg:-mr-28 xl:mr-4 md:pl-5 xl:pl-0  md:w-1/2 max-w-md  flex-col flex justify-end gap-3 ">
					<h2 className="font-semibold text-xl text-[#D434FE] ">
						Announcement of the accepted teams and ideas{" "}
					</h2>
					<p className="text-sm">
						All teams whom idea has been accepted into getlinked tech hackathon
						1.0 2023 are formally announced
					</p>
					<span className="text-[#D434FE] md:hidden font-semibold">
						November 18, 2023
					</span>
				</div>
			</div>
			<div className="flex  flex-row-reverse md:flex-row justify-center gap-6">
				<div className="md:w-1/2 max-w-md ml-auto flex-col flex justify-end gap-3">
					<h2 className="font-semibold text-xl text-[#D434FE] ">
						Getlinked Hackathon 1.0 Offically Begins
					</h2>
					<p className="text-sm">
						Accepted teams can now proceed to build their ground breaking skill
						driven solutions
					</p>
					<span className="text-[#D434FE] md:hidden font-semibold">
						November 18, 2023
					</span>
				</div>
				<div className="flex gap-12 items-end font-semibold md:w-1/2">
					<div className="flex justify-center flex-col gap-2">
						<span className="border border-[#D434FE] h-28 md:h-20 w-fit mx-auto"></span>
						<span className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-full h-8 w-8 flex items-center justify-center p-2">
							5
						</span>
					</div>
					<span className="text-[#D434FE] md:block hidden ">
						November 18, 2023
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-between md:justify-center  gap-6  ">
				<div className="flex md:flex-row-reverse  md:-ml-16 gap-12 items-end font-semibold md:w-1/2 ">
					<div className="flex justify-center   flex-col gap-2">
						<span className="border border-[#D434FE] h-28 md:h-20 w-fit mx-auto"></span>
						<span className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-full h-8 w-8 flex items-center justify-center p-2">
							6
						</span>
					</div>
					<span className="text-[#D434FE] md:block hidden ">
						November 18, 2023
					</span>
				</div>
				<div className=" overflow-hidden  md:-mr-44 lg:-mr-28 xl:mr-4 md:pl-5 xl:pl-0  md:w-1/2 max-w-md  flex-col flex justify-end gap-3 ">
					<h2 className="font-semibold text-xl text-[#D434FE] ">Demo Day</h2>
					<p className="text-sm">
						Teams get the opportunity to pitch their projects to judges. The
						winner of the hackathon will also be announced on this day
					</p>
					<span className="text-[#D434FE] md:hidden font-semibold">
						November 18, 2023
					</span>
				</div>
			</div>
		</section>
	);
}

export default Timeline;
