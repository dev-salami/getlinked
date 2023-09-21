"use client";
import React from "react";
import cup from "../../public/assets/cup.png";
import reward from "../../public/assets/rewards.png";
import Image from "next/image";
import { motion } from "framer-motion";
import flare from "../../public/assets/flare.svg";

function Prizes() {
	return (
		<section className="container mx-auto px-4 pt-6">
			<div className="grid grid-cols-1 md:grid-cols-2 ">
				<div></div>
				<div>
					<p className="text-xl font-semibold items-center lg:items-start flex flex-col mb-6">
						<span>Prizes and</span>
						<span className="text-[#D434FE]">Rewards</span>
					</p>
					<p className="text-center md:text-left mb-6">
						Highlight of the prizes or rewards for winners and participants
					</p>
				</div>
			</div>
			<div className=" sm:flex hidden relative overflow-hidden    gap-10 mx-6 md:flex-row flex-col ">
				<span className="absolute overflow-hidden -z-10 bottom-0 translate-y-1/2   left-0 rounded-full w-[600px] md:w-[900px] h-[600px] md:h-[900px]   ">
					<motion.div
						initial={{ opacity: 0.5, scale: 0.8 }}
						animate={{
							opacity: 1,
							scale: 1,
							filter: "drop-shadow(0 0 5px rgba(0, 0, 255, 0.5))",
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: "reverse",
						}}>
						<Image
							className="rounded-full w-[600px] md:w-[900px] h-[600px] md:h-[900px]"
							src={flare}
							alt="starp-icon"></Image>
					</motion.div>
				</span>
				<div>
					<Image
						className="  w-fit"
						src={cup}
						alt="big-idea"></Image>
				</div>
				<div>
					<Image
						className="  w-fit"
						src={reward}
						alt="big-idea"></Image>
				</div>
			</div>
		</section>
	);
}

export default Prizes;
