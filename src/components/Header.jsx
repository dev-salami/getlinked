import Image from "next/image";
import Link from "next/link";
import React from "react";
import chain from "../../public/assets/chain.svg";
import header1 from "../../public/assets/header.png";
import idea from "../../public/assets/idea.png";
import rule from "../../public/assets/rule.png";
import judge from "../../public/assets/judge.png";
import sponsors from "../../public/assets/sponsors.svg";
import CountdownTimer from "./Timer";

function Header() {
	return (
		<>
			<hr className="border-t border-gray-400/5 " />
			<section className="container mx-auto p-8 flex flex-col items-center lg:flex-row">
				<div className="flex flex-col gap-4 sm:ml-8 sm:mt-8 lg:w-1/2">
					<p className="font-bold text-4xl sm:text-6xl">
						<span>getlinked Tech</span>
						<span className="font-bold  flex gap-2 mt-4">
							Hackathon <span className="text-[#fe34b9]">1.0</span>
							<Image
								className="h-10 sm:h-16  w-fit"
								src={chain}
								alt="chain-icon"></Image>
						</span>
					</p>

					<p className="text-sm leading-loose">
						Participate in getlinked tech Hackathon 2023 stand <br /> a chance
						to win a Big prize
					</p>
					<Link
						href="/register"
						className=" w-fit px-4 py-[6px] bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm">
						Register
					</Link>
					<CountdownTimer
						day={28}
						m={"dec"}
						year={"2023"}
					/>
					{/* <div className="flex gap-5 mt-8">
						<div className="text-3xl font-semibold ">
							<span>00</span>
							<span className="text-sm ml-1">H</span>
						</div>

						<div className="text-3xl font-semibold ">
							<span>00</span>
							<span className="text-sm ml-1">M</span>
						</div>
						<div className="text-3xl font-semibold ">
							<span>00</span>
							<span className="text-sm ml-1">S</span>
						</div>
					</div> */}
				</div>
				<div className="lg:w-1/2">
					<Image
						className="lg:h-[70vh]  w-fit"
						src={header1}
						alt="header-image"></Image>
				</div>
			</section>
			<hr className="border-t border-gray-400/5 " />
			<section className="container mx-auto p-8 flex flex-col items-center lg:flex-row gap-6">
				<div className="lg:w-1/2">
					<Image
						className="  w-fit"
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
			</section>
			<hr className="border-t border-gray-400/5 " />
			<section className="container mx-auto p-4 lg:p-8 flex flex-col-reverse lg:grid lg:grid-cols-2 grid-cols-1">
				<div className="flex flex-col justify-center md:w-2/3 mx-auto">
					<p className="sm:text-2xl font-bold flex-col flex  mb-6">
						<span>Rules and </span>
						<span className="text-[#D434FE]">Regulation</span>
					</p>

					<p className="leading-6 sm:leading-8">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
				</div>
				<div>
					<Image
						className="  w-fit"
						src={rule}
						alt="big-idea"></Image>
				</div>
			</section>
			<hr className="border-t border-gray-400/5 " />
			<section className=" container mx-auto p-8 grid lg:grid-cols-2 grid-cols-1">
				<div>
					<Image
						className="  w-fit"
						src={judge}
						alt="judges-image"></Image>
				</div>
				<div className="flex flex-col justify-center">
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
			</section>
		</>
	);
}

export default Header;
