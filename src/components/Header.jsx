"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import chain from "../../public/assets/chain.svg";
import header1 from "../../public/assets/header.png";
import idea from "../../public/assets/idea.png";
import rule from "../../public/assets/rule.png";
import judge from "../../public/assets/judge.png";
import stroke from "../../public/assets/stroke.png";
import bulb from "../../public/assets/bulb.png";
import star from "../../public/assets/star.svg";
import starp from "../../public/assets/starp.svg";
import flare from "../../public/assets/flare.svg";

import { motion } from "framer-motion";

import CountdownTimer from "./Timer";

function Header() {
	return (
		<>
			<hr className="border-t border-gray-400/5 " />
			<section className="flex justify-around mt-8 container mx-auto px-4 ">
				<div className="lg:block hidden w-96 h-2"></div>
				<div className="sm:text-xl font-semibold text-center flex justify-center gap-2">
					<span>Igniting a Revolution in</span>
					<div className="flex flex-col items-center">
						<span>HR Innovation </span>
						<Image
							className="w-32"
							src={stroke}
							alt="stroke"></Image>
					</div>
				</div>
			</section>
			<section
				id="overview"
				className=" mx-auto p-3 sm:p-8 flex flex-col items-center lg:flex-row">
				<div className="flex flex-col gap-4 sm:ml-8  lg:w-1/2">
					<p className="font-bold text-4xl sm:text-5xl xl:text-6xl">
						<span className="pt-8 flex items-center ">
							getlinked Te
							<span className="flex -mt-6 flex-col-reverse  items-center">
								<span>ch</span>
								<Image
									className="w-7 -mb-4"
									src={bulb}
									alt="bulb-icon"></Image>
							</span>
						</span>
						<span className="font-bold  flex gap-2 mt-4">
							Hackathon <span className="text-[#fe34b9]">1.0</span>
							<Image
								className="h-10 sm:h-16  w-fit"
								src={chain}
								alt="chain-icon"></Image>
						</span>
					</p>

					<p className="text-sm leading-loose sm:text-center lg:text-left">
						Participate in getlinked tech Hackathon 2023 stand <br /> a chance
						to win a Big prize
					</p>
					<Link
						href="/register"
						className=" sm:mx-auto lg:mx-0 w-fit px-4 py-[6px] bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm">
						Register
					</Link>
					<CountdownTimer
						day={28}
						m={"dec"}
						year={"2023"}
					/>
				</div>
				<div className="lg:w-1/2   w-full  flex justify-center">
					<Image
						className="lg:h-[70vh]  h-96  sm:w-fit"
						src={header1}
						alt="header-image"></Image>
				</div>
			</section>
			<hr className="border-t border-gray-400/5 " />
			<section className=" relative overflow-hidden container mx-auto p-3 md:p-8 flex flex-col items-center lg:flex-row gap-6">
				<div className="lg:w-1/2 flex justify-center">
					<Image
						className="  md:w-4/5"
						src={idea}
						alt="big-idea"></Image>
				</div>
				<div className="lg:w-1/2">
					<p className="text-xl font-semibold items-center lg:items-start flex flex-col gap-2 mb-6">
						<span>Introduction to getlinked</span>
						<span className="text-[#D434FE]">tech Hackathon 1.0</span>
					</p>

					<p className="leading-6 sm:leading-8">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
				</div>
				<span className="absolute overflow-hidden -z-10 top-0 lg:bottom-2/3  right-[20%]    ">
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
							alt="starp-icon"></Image>
					</motion.div>
				</span>
				<span className="absolute overflow-hidden -z-10 bottom-0 lg:bottom-1/2  left-[15%]    ">
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
							alt="starp-icon"></Image>
					</motion.div>
				</span>
				<span className="sm:block hidden absolute overflow-hidden -z-10 bottom-0 lg:bottom-1/2  -left-1/2 rounded-full w-[300px] md:w-[450px] h-[300px] md:h-[450px]   ">
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
							className="rounded-full w-[300px] md:w-[450px] h-[300px] md:h-[450px]"
							src={flare}
							alt="starp-icon"></Image>
					</motion.div>
				</span>
			</section>
			<hr className="border-t border-gray-400/5 " />
			<section className=" sm:flex hidden relative overflow-hidden container mx-auto p-5 sm:p-8  flex-col-reverse items-center lg:flex-row">
				<span className="absolute overflow-hidden -z-10 bottom-0   left-0 rounded-full w-[300px] md:w-[450px] h-[300px] md:h-[450px]   ">
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
							className="rounded-full w-[300px] md:w-[450px] h-[300px] md:h-[450px]"
							src={flare}
							alt="starp-icon"></Image>
					</motion.div>
				</span>
				<div className="flex flex-col justify-center lg:w-2/3 mx-auto">
					<p className="sm:text-2xl font-bold flex-col flex  mb-6">
						<span>Rules and </span>
						<span className="text-[#D434FE]">Regulation</span>
					</p>

					<p className="leading-6 sm:leading-8">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
				</div>
				<div className="lg:w-1/2 flex justify-center">
					<Image
						className="   w-full"
						src={rule}
						alt="rule-image"></Image>
				</div>

				<span className="absolute overflow-hidden  w-fit -z-10 bottom-0  right-1/4  lg:left-1/2  -translate-x-1/2">
					<motion.div
						initial={{ opacity: 0.5, scale: 0.8 }}
						animate={{
							opacity: 1,
							scale: 1,
							filter: "drop-shadow(0 0 5px rgba(0, 0, 255, 0.5))",
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							repeatType: "reverse",
						}}>
						<Image
							src={star}
							alt="starp-icon"></Image>
					</motion.div>
				</span>
			</section>
			<hr className="border-t border-gray-400/5 " />
			<section className=" relative overflow-hidden container mx-auto p-3 sm:p-8 flex flex-col items-center lg:flex-row">
				<div>
					<Image
						className=" lg:h-[70vh]  h-96  sm:w-fit"
						src={judge}
						alt="judges-image"></Image>
				</div>
				<div className="flex flex-col justify-center lg:w-1/2">
					<p className="text-xl font-semibold flex-col flex gap-3 mb-3">
						<span>Judging Criteria</span>
						<span className="text-[#D434FE]">Key attributes</span>
					</p>
					<p className="text-sm font-semibold  mb-3">
						<span className="text-[#D434FE]">Innovation and Creativity</span>
						<span className="ml-1">
							: Evaluate the uniqueness and creativity of the solution. Consider
							whether it addresses a real-world problem in a novel way or
							introduces innovative features.
						</span>
					</p>

					<p className="text-sm font-semibold  mb-3">
						<span className="text-[#D434FE]">Functionality</span>
						<span className="ml-1">
							: Assess how well the solution works. Does it perform its intended
							functions effectively and without major issues? Judges would
							consider the completeness and robustness of the solution.
						</span>
					</p>
					<p className="text-sm font-semibold  mb-3">
						<span className="text-[#D434FE]">Impact and Relevance</span>
						<span className="ml-1">
							: Determine the potential impact of the solution in the real
							world. Does it address a significant problem, and is it relevant
							to the target audience? Judges would assess the potential social,
							economic, or environmental benefits.
						</span>
					</p>
					<p className="text-sm font-semibold  mb-3">
						<span className="text-[#D434FE]">Technical Complexity</span>
						<span className="ml-1">
							: Evaluate the technical sophistication of the solution. Judges
							would consider the complexity of the code, the use of advanced
							technologies or algorithms, and the scalability of the solution.
						</span>
					</p>
					<p className="text-sm font-semibold  mb-3">
						<span className="text-[#D434FE]">Adherence to Hackathon Rules</span>
						<span className="ml-1">
							: Judges will Ensure that the team adhered to the rules and
							guidelines of the hackathon, including deadlines, use of specific
							technologies or APIs, and any other competition-specific
							requirements.
						</span>
					</p>
					<div className=" flex justify-center sm:justify-start mt-4">
						<button className="  px-4 py-[6px] bg-gradient-to-r text-center  from-[#fe34b9] to-[#903aff] rounded-sm">
							Read More
						</button>
					</div>
				</div>

				<span className="absolute overflow-hidden w-fit -z-10 bottom-0 right-[10%]  md:right-1/4  lg:left-1/2  -translate-x-1/2">
					<motion.div
						initial={{ opacity: 0.5, scale: 0.8 }}
						animate={{
							opacity: 1,
							scale: 1,
							filter: "drop-shadow(0 0 5px rgba(0, 0, 255, 0.5))",
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "reverse",
						}}>
						<Image
							src={star}
							alt="star-icon"></Image>
					</motion.div>
				</span>
			</section>
		</>
	);
}

export default Header;
